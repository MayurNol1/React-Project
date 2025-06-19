import { useState,useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword]=useState("");
  
  const passwordgenerator = useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed == true) str+="0123456789"
    if (charAllowed == true) str+= "!@#$%^&*()_+-{}`~"

    for (let i = 1; i <= length; i++){
    
    let char = Math.round(Math.random() * str.length + 1)
    pass += str.charAt(char);
   
  }

  setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  const CopyToClip = useCallback(()=>{

    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)

    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length,setNumAllowed,setCharAllowed,passwordgenerator])

  const passwordRef = useRef(null);

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-black"> 
       <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg bg-blue-400 overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-2 px-3' 
          placeholder='password'
          readOnly
          ref = {passwordRef}
          />
          <button 
          onClick={CopyToClip}
          className='outline-none bg-blue-500 text-white shrink-0 px-3 py-0.5'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={5}
            max={50}
            value={length}
            className="cursor-pointer" 
            onChange={(e) => {
              setLength(e.target.value)
            }}/>
            <label>Range: {length} </label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=>(!prev));
            }}
            />
          <label htmlFor="numberInput">Number</label>
          </div>
           <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>(!prev));
            }}
            />
          <label htmlFor="characterInput">character</label>
          </div>

        </div>

    </div>
      
    </>
  )
}

export default App
