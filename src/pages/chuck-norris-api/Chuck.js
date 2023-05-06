import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import "./Chuck.scss"


const Chuck = () => {

    const [joke,setJoke] = useState("")

    const fetchChuckJoke = () => {
        Axios.get("https://api.chucknorris.io/jokes/random").then((res)=>{
            setJoke(res.data.value)
        })
    }

    useEffect(()=>{
     fetchChuckJoke()
    },[])


  return (
    <>
    <h1>Chuck Norris Jokes</h1>
    <div className='chuck'>
        <div className='container'>
            <button onClick={fetchChuckJoke}>Generate Chuck Norris Joke</button>
            <p>{joke}</p>
        </div>
    </div>
    </>

  )
}

export default Chuck