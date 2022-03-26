import React, { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import './LazyLoading.css'
 

export default function LazyLoading(){
    const { ref, inView } = useInView();
    const [pokemons,setPokemon] = useState([]);
    const [value,setValue]= useState(0)
    const FetchPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${value}&limit=50`)
        const result = await response.json()
        setPokemon ((prevList) => [...prevList, ...result.results ])
    }
    
      
    useEffect (()=> {      
        if (inView) {
             setValue(value + 50)
             FetchPokemons()                        
 }},[inView])

    


    return(

        <div>
            <div className="Lazy_Container">
                
                {pokemons.map ((pokemon)=> (
                    <div className="Lazy" key={pokemon.name}>
                        <h1>{pokemon.name}</h1>
                        <h2>{pokemon.url}</h2>
                    </div>
                ))}

            </div>
            <div ref={ref}/>

        </div>
    )
}