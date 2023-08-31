import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllPokemons,
  getAllTypes,
  getPokemonsByType,
} from "../services/pokemons";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hook/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";
import { logout } from "../store/slices/trainer.slice";

const Pokedex = () => {
  // const { name,
  //   pokemonName,
  //   setPokemonName,
  //   pokemonType,
  //   setPokemonType,
  //   pokemonByName} = usePokedex()

  //   const handleChange = (setState) => (e) => {
  //     setState(e.target.value)
  //   }

  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const { name } = useSelector((store) => store.trainer);
  const [types, setTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleLogout = () => {
    logout
  }

  const pokemonByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonByName,
    currentPage
  );
  // const handleChangeInput = (e) => {
  //   setPokemonName(e.target.value)
  // }
  // const handleChangeSelect = (e) => {
  //   setPokemonType(e.target.value)
  // }

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  // console.log(pokemonByName);

  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    if (pokemonType) {
      // Hacer la peticion de los pokemons por tipo
      getPokemonsByType(pokemonType).then((data) => setPokemons(data));
    }
  }, [pokemonType]);

  return (
    <main className="pb-10">
      
      <section className="p-10">
        <div className="flex">
        <p className="inline-block  text-clip text-[#333333] font-normal text-2xl">
          <span className="text-[#FE1936] font-bold">Welcome {name}, </span>
          here you can find your favorite pokemon
        </p>
        </div>
        <form action="" className="flex mt-10">
          <div className="flex-1 ease-linear">
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon...."
              type="text"
              className="p-3 h-14 text-xs drop-shadow-lg w-4/5 sm:text-base"
            />
          </div>
          <select
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
            name=""
            id=""
            className="flex-1 drop-shadow-lg"
          >
            <option value="" className="text-center">
              All pokemons
            </option>
            {types.map((type) => (
              <option value={type.name} key={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <Pagination lastPage={lastPage} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

      <PokemonList pokemons={itemsInCurrentPage} />

      <Pagination lastPage={lastPage} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

    </main>
  );
};

export default Pokedex;
