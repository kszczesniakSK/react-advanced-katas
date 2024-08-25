import React, { useState } from "react";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { useUpdatePokemonName } from "../hooks/useUpdatePokemonViews";
import { v4 as uuidv4 } from "uuid";

const PokemonList: React.FC = () => {
  const {
    data: pokemons,
    isLoading,
    isError,
  } = useGetPokemons();

  const updatePokemonViews = useUpdatePokemonName();

  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const [newName, setNewName] = useState<string>("");

  const handleUpdatePokemonName = (pokemonName: string) => {
    updatePokemonViews.mutate({
      name: pokemonName,
      newName: newName || uuidv4(),
    });
    setNewName("");
    setSelectedPokemon(null);
  };


  if (isError) return <p>Error fetching Pokémon data.</p>;

  return (
    <div>
      <h2>Pokémon List</h2>
      {isLoading && (
        <>
          <p>Loading Pokémon...</p>
        </>
      )}

      {/* Render the Pokémon list */}
      {pokemons?.map((pokemon) => (
        <div key={pokemon.name} style={{ marginBottom: "20px" }}>
          <h3>{pokemon.name}</h3>
          <p>{pokemon.url}</p>

          {/* Button to pick a Pokémon and show input for name change */}
          <button
            onClick={() => setSelectedPokemon(pokemon.name)}
            style={{ marginRight: "10px" }}
          >
            Pick {pokemon.name}
          </button>

          {/* Show input and button to update the name if the Pokémon is selected */}
        </div>
      ))}
      {selectedPokemon && (
        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={newName}
            placeholder="Enter new name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <button
            onClick={() => handleUpdatePokemonName(selectedPokemon)}
            style={{ marginLeft: "10px" }}
          >
            Update Name
          </button>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
