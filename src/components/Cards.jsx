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
return <button onClick = {props.shuffle} key={pokemon.id} id = {pokemon.id}>
    <div id = {pokemon.id} className = "card">
        < h1 id= {pokemon.id}>{pokemon.name}</h1>
        <img src ={sprite.front_default} id = {pokemon.id}></img>       

    </div>
    </button>
}
export default Cards