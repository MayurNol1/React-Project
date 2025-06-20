import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";




export default function Github(){

    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/mayurnol1")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)})

    // },[])

    return(
        <>
            <div className="bg-gray-600 text-white text-center p-3">GitHub Id: {data.id}</div>
        </>
    )
}

export const GithubId = async()=> {
    const res = await fetch("https://api.github.com/users/mayurnol1")
    return res.json()
}