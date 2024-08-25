import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// Implement Optimistic UI
// demonstrate rollback behavior on server error

export type Pokemon = {
  name: string;
  url: string;
};

export const useUpdatePokemonName = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      newName,
    }: {
      name: string;
      newName: string;
    }) => {
      // Simulate an API call that fails
      return axios.put(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        name: newName,
      });
    },
    onMutate: async ({ name, newName }: { name: string; newName: string }) => {
      await queryClient.cancelQueries({ queryKey: ["pokemons"] });

      const previousPokemons = queryClient.getQueryData<Pokemon[]>([
        "pokemons",
      ]);

      queryClient.setQueryData<Pokemon[]>(
        ["pokemons"],
        (oldPokemons: Pokemon[] | undefined) =>
          oldPokemons?.map((pokemon) =>
            pokemon.name === name ? { ...pokemon, name: newName } : pokemon
          ) ?? []
      );

      const previousPokemon = previousPokemons?.find(
        (pokemon) => pokemon.name === name
      );
      return { previousPokemon };
    },
    onError: (_err, variables, context) => {
      if (context?.previousPokemon) {
        const { name: nameBeforeUpdate } = context.previousPokemon;
        const { newName } = variables;
        queryClient.setQueryData<Pokemon[]>(
          ["pokemons"],
          (oldPokemons: Pokemon[] | undefined) => {
            console.log({ oldPokemons });
            return oldPokemons
              ? oldPokemons.map((pokemon) =>
                  pokemon.name === newName
                    ? { ...pokemon, name: nameBeforeUpdate }
                    : pokemon
                )
              : [];
          }
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
};
