import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";
import "../InfinityScroll/InfinityScroll.css"

export default function InfinityScroll () {

  const [pokemons , setPokemons] = useState([]);
  const {ref , inView} = useInView();
  const [offset , setOffset] = useState(0)
  

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50 `);
    const result = await response.json();
    setPokemons((prevPokemon) => [...prevPokemon , ...result.results]);
  }

  useEffect(() => {
    if(inView) {
      setOffset( prevOffset => prevOffset + 50 );
      fetchPokemon();
      console.log(offset)
    }
  },[inView]);

  return(
    <div>
      <div>
        {pokemons.map ((pokemon) => (
          <div key={pokemon.name}>
            <h1>{pokemon.name}</h1>
            <h1>{pokemon.url}</h1>
          </div>
        ))}
      </div>
      <div className="ref" ref={ref}>
       
      </div>
    </div>
  )
}