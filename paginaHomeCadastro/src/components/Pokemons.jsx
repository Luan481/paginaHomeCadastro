import { useEffect, useState } from "react";
import api from "../services/api.js";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  async function getPokemon(id) {
    try {
      const res = await api.get(`/pokemon/${id}`);
      return res.data;
    } catch (error) {
      console.log("Erro ao buscar Pokémon");
      return null;
    }
  }

async function loadPokemon() {
  const promises = [];

  for (let i = 1; i <= 27; i++) {
    promises.push(getPokemon(i));
  }

  const results = await Promise.all(promises);

  const pokemonsValidos = results.filter(p => p !== null);

  setPokemons(pokemonsValidos);
}

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <div className={"pokeContainer"}>
      {pokemons.map((p) => (
        <div className={"pokeCard"} key={p.id}>
            <p ><img src={p.sprites.other["official-artwork"].front_default} alt="" height={150}/>{p.name} #{p.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemons;