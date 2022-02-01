import { usePokemonStore } from "../store";

const Pokemon = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const removePokemon = usePokemonStore((state) => state.removePokemon);

  return (
    <>
      <h2>Pokemones</h2>
      <strong>No. of Pokemons {pokemons.length}</strong>
      <ul>
        {pokemons.map((item, index) => (
          <li key={index}>
            {item.name} {item.id}
            <strong
              onClick={(e) => {
                removePokemon(item.id);
              }}
            >
              X
            </strong>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pokemon;
