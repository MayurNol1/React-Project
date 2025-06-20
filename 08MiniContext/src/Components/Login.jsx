import React,{useState,useContext} from "react";
import UseContext from "../Context/UserContext";

export default function Login(){
    const [Username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UseContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({Username,password})
    }
    return(<>
        <div>
            <h2>Login</h2>
            <input type="text"
            placeholder="Username"
            value={Username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}

             />
             <br />
             <input type="text"
            placeholder="Password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             />
             
             <button onClick={handleSubmit}>
                Submit
             </button>
        </div>
    </>
)}