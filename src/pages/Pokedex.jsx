import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllPokemons, getPokemonsByType } from '../services/pokemons'
import PokemonList from '../components/pokedex/PokemonList'
import usePokedex from '../hook/usePokedex'

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



const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const {name} = useSelector(store => store.trainer)

  const pokemonByName = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()) )

  // const handleChangeInput = (e) => {
  //   setPokemonName(e.target.value)
  // }
  // const handleChangeSelect = (e) => {
  //   setPokemonType(e.target.value)
  // }

  const handleChange = (setState) => (e) => {
    setState(e.target.value)
  }
  
  // console.log(pokemonByName);

  useEffect(()=> {
    if(!pokemonType) {

      getAllPokemons()
      .then((data) =>setPokemons(data))
      .catch((err) => console.log(err))
    }
  }, [pokemonType])

  

  useEffect(() => {
    if (pokemonType) {
      // Hacer la peticion de los pokemons por tipo
      getPokemonsByType(pokemonType).then((data) => setPokemons(data))
    }
  }, [pokemonType])


  return (
    <main className='pb-10'>
      <header>
      <div className='h-16 bg-red-600 relative'></div>
        <img className='absolute h-16 w-80 z-30 top-2 left-6 ' src="/images/pokedex.png" alt="" />
        <div className='h-10 bg-black relative'>
            <div className='h-16 aspect-square bg-white rounded-full absolute left-3/4 -translate-x-1/2 top-0 border-[8px] border-black after:block after:content-[""] after:h-8 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute  after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:top-1/2 after:border-4 after:border-black'></div>
        </div>
      </header>
      <section className='p-10'>
        <p className='flex text-[#333333] font-normal text-2xl'><span className='text-[#FE1936] mr-1 font-bold'>Welcome {name},</span>here you can find your favorite pokemon</p>
        <form action="" className='flex mt-10'>
          <div className='flex-1 ease-linear'>
            <input value={pokemonName} onChange={handleChange(setPokemonName)} placeholder='Search pokemon....' type="text" className='p-3 h-14  drop-shadow-lg w-4/5' />
            <button className='bg-[#D93F3F] p-4 flex-1 text-white text-xl font-medium'>Search</button> 
          </div>
          <select value={pokemonType} onChange={handleChange(setPokemonType)} name="" id="" className='flex-1 drop-shadow-lg'>
            <option value="" className='text-center'>All pokemons</option>
            <option value="rock" className='text-center'>Rock</option>
          </select>
        </form>
      </section>

      <PokemonList pokemons={pokemonByName}/>
    </main>
  )
}

export default Pokedex