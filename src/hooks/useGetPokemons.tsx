import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pokemon } from "./useUpdatePokemonViews";
import { useCallback } from "react";

export const useGetPokemons = () => {
  const queryClient = useQueryClient();

  // useQuery to fetch the Pokemons
  const { data, isLoading, isError, refetch, isFetching } = useQuery<Pokemon[]>(
    {
      queryKey: ["pokemons"],
      queryFn: async ({ signal }): Promise<Pokemon[]> => {

        const { data } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=3",{signal}
        );

        return data.results;
      }, 
    }
  );

  // Callback to manually cancel the request
  const cancelRequest = useCallback(() => {
    queryClient.cancelQueries({ queryKey: ["pokemons"] }); // Cancel the query in React Query
  }, [queryClient]);

  return { data, isLoading, isError, cancelRequest, refetch, isFetching };
};
