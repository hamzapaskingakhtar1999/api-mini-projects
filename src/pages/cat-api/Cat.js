import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import "./Cat.scss"


const Cat = () => {

    const [catFact,setCatFact] = useState("")



/*  fetch("https://catfact.ninja/fact")
    .then((res)=>res.json())
    .then((data) => {
        console.log(data.fact);
    }) */

    /* Using Axios instead as it looks cleaner and used mostly with React */

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setCatFact(res.data.fact)
            console.log(res.data)
        })
    }

    useEffect(()=>{
     fetchCatFact()
    },[])


  return (
    <>
    <h1>Cat Facts</h1>
    <div className='cat'>
        <div className='container'>
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    </div>
    </>

  )
}

export default Cat