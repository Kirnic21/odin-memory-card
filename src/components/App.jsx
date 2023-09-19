import { useState } from 'react'
import Cards from './Cards'
import './App.css'
let randomPokemons = []
for(let i = 0;i<10;i++)
{
  let randomNumber = Math.floor((Math.random() * 1000))
  if(randomPokemons.includes(randomNumber))
  {
    i--
  }
  randomPokemons.push(randomNumber)
}
function App() {

  let [pokemonsId,setPokemons] = useState(randomPokemons)
  let [points,setPoints] = useState(0)
  let [score,setScore] = useState([])
  let [highScore,setHighscore] = useState(0)

  const shuffleOnClick = (e,key)=>{
    const shuffledArray = pokemonsId.map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
    setPokemons(shuffledArray)

  }
  
  const generateOrRemovePoints = (e)=>{
    if(score.includes(e.target.id))
    {
      setHighscore(highScore = points)
      score.length = 0
      setPoints(points = -1)
      console.log(score,"clear!")
    }
    
    setPoints(points+1)
    setScore([...score,e.target.id])
   
  }
  const handleClick =(e)=>{
    shuffleOnClick(e)
    generateOrRemovePoints(e)
  }
    return (
      <>
      <div className ="scores">
      <h1>Score:{points}</h1>
      <h1>High Score:{highScore}</h1>
      </div>
    <div className='board'>
      
    {pokemonsId.map((pokemon1) => <Cards pokemon = {pokemon1} key = {pokemon1} shuffle = {handleClick}></Cards>)}
    </div> 
    </>
  )
    }
          export default App
