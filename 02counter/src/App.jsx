import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter] =useState(15);

  const addValue = () =>{
    // counter=counter+1;
    if(counter>=20) {
      setCounter(20);
    }else{
      setCounter(counter+1)
    }
    
  }

  const desValue= ()=>{
    // counter = counter-1;
    if(counter<=0 ){
          setCounter(0);
        }else{
          setCounter(counter-1)
        }
  }

  return (
   
    <>
    
      <h1>React supermercy</h1>
      <h2>count Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button><br />
      <button 
        onClick={desValue}
      >Decrese Value</button>

      <h3>Footer: {counter}</h3>
     
    </>
  )
}

export default App
