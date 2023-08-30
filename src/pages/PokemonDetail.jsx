import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../pokemonDetail/StatBarList";
import { bgStylePokemonType, borderStyledPokemonByType } from "../shared/pokemon";
import MovesPokemon from "../pokemonDetail/MovesPokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  
  const { pokemonId } = useParams();
  
  const isUse = pokemonData?.types[0]
  const isUse2 = pokemonData?.types[1]
  
  const abilityName = pokemonData?.abilities[0]?.ability?.name
  const abilityName2 = pokemonData?.abilities[1]?.ability?.name
  
  useEffect(() => {
    getPokemonById(pokemonId)
    .then((data) => setPokemonData(data))
    .catch((err) => console.log(err));
  }, []);
  
  const image = pokemonData?.image

  return (
    <main className="bg-slate-50 h-full ">


      <section className="px-2 ">
        {/* aqui se define el tamaño */}
        <article className="flex flex-col justify-center items-center m-auto w-3/4 mt-10 bg-white border-[5px] rounded-md pb-4">
          <header
            className={`h-[140px] w-full  relative mb-8 rounded-t ${
              bgStylePokemonType[pokemonData?.types[0]]
            }`}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 h-[65px] aspect-square">
              <img
                className="h-full w-full object-contain"
                src={image ? pokemonData?.image : pokemonData?.imageSecond}
                alt=""
              />
            </div>
          </header>

          <section className="w-full text-center justify-center items-center ">
            <span >
              #{pokemonData?.id}
            </span>
            <div className="flex relative w-2/3 m-auto justify-between  py-4"><hr className="w-2/5 h-0"/> <h2 className="h-6 absolute top-0 left-1/2 -translate-x-1/2">{pokemonData?.name}</h2> <hr className="w-2/5" /></div>

            <article>
              <div className="flex justify-center items-center">
              <div><h2>Weight</h2> <p>{pokemonData?.weigth}</p></div>
              <div className="pl-10"><h2>Height</h2> <p>{pokemonData?.heigth}</p></div>
              </div>
            </article>

            <article className="w-full flex flex-wrap">
              <div className="flex justify-center items-center gap-4 w-full flex-wrap">
              
              <div><h2>Type</h2> <div className="flex">
                {isUse != undefined && <p className={`h-[25px] w-full mr-3 px-4 relative mb-8 ${
              bgStylePokemonType[pokemonData?.types[0]]
            }`}>{pokemonData?.types[0]}</p>}
                
                {isUse2 != undefined && <p className={`h-[25px] w-full px-4  relative mb-8 ${
              bgStylePokemonType[pokemonData?.types[0]]
            }`}>{pokemonData?.types[1]}</p>}
            
            </div></div>



            <div><h2>Skills</h2> <div className="flex"> 
            {abilityName != undefined && <p className={`h-[25px] w-full mr-3 line-clamp-1 px-4 relative mb-8 ${
              bgStylePokemonType[pokemonData?.types[0]]
            }`}>{pokemonData?.abilities[0].ability.name}</p> }

            {abilityName2 != undefined && <p className={`h-[25px] w-full line-clamp-1 px-4 relative mb-8 ${
              bgStylePokemonType[pokemonData?.types[0]]
            }`}>{pokemonData?.abilities[1].ability.name}</p>}

            </div></div>
            
              </div>
            </article>


            <StatBarList stats={pokemonData?.stats} />
          </section>
        </article>
      </section>




      <section className="px-2 pb-10 ">
        {/* aqui se define el tamaño */}
        <article className="flex flex-col justify-center items-center m-auto w-3/4 mt-10 bg-white border-[5px] rounded-md pb-4">
          

          <section className="w-full justify-center items-center ">
            <h2 className="font-medium text-3xl pl-2 py-10">Movements</h2>

            <MovesPokemon moves={pokemonData?.moves}/>
          </section>
        </article>
      </section>
    </main>
  );
};

export default PokemonDetail;
