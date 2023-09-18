import React, { useEffect, useState } from "react";

 function Cards(props){
    let [pokemon,setPokemon] = useState([])
    let [sprite,setSprite] = useState([])
        useEffect(()=>{
            const fetchData = async ()=>{
                const data = await fetch('https://pokeapi.co/api/v2/pokemon/'+props.pokemon)
                const dataJson = await data.json()
                setPokemon(dataJson)         
            }
            fetchData()
        },[])
        useEffect(()=>{
            const fetchData = async ()=>{
                const data = await fetch('https://pokeapi.co/api/v2/pokemon/'+props.pokemon)
                const dataJson = await data.json()
                setSprite(dataJson.sprites)         
            }
            fetchData()
        },[])
        console.log(pokemon)
    return <div className = "card">
        < h1>{pokemon.name}</h1>
        <img src ={sprite.front_default}></img>       

    </div>
}
export default Cards