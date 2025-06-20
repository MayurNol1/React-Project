import React,{useState} from "react";
import UseContext from "./UserContext";

export default function UserContextProvider({children}){
    const [user,setUser] = useState("")
    return(
        <UseContext.Provider value= {{user, setUser}}>
            {children}
        </UseContext.Provider>
    )
}