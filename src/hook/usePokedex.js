import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllPokemons, getPokemonsByType } from '../services/pokemons'

const usePokedex = () => {
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
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonByName
  )
}

export default usePokedex