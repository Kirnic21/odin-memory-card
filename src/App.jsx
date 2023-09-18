import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
let cum = []
for(let i = 0;i<5;i++)
{
  let randomNumber = Math.floor((Math.random() * 1000))
  cum.push(randomNumber)
}
function App() {

  let [pokemonsId,setPokemons] = useState(cum)

  const generateCards = ()=>{
      let randomNumber = Math.floor((Math.random() * 1000))
      setPokemons([...pokemonsId,randomNumber])

  }
  const shuffleOnClick = ()=>{
    const shuffledArray = pokemonsId.map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
    setPokemons(shuffledArray)
  }
  
    return (
    <div className='board'>
    <button onClick={shuffleOnClick}>gg</button>
    {pokemonsId.map((pokemon1) => <Cards pokemon = {pokemon1} key={pokemon1} onClick ={()=>{console.log("cum")}}></Cards>)}
    </div>  
  )
    }
          export default App
