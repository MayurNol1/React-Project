import React,{useContext} from "react";
import UseContext from "../Context/UserContext";

export default function Profile(){
    const {user} = useContext(UseContext)
    // console.log(user.Username)
    
    if (!user) return <div>Please Login</div>

    return <div>Welcome : {user.Username} </div>
}