import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./Excuse.scss"

const Excuse = () => {

    const [reason,setReason] = useState("")

    let categoryExcuse = (category) =>  {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res)=>{
            console.log(res.data[0].excuse)
            setReason(res.data[0].excuse)
        })
    }


/*     useEffect(()=>{
        familyExcuse()
    },[]) */

  return (
    <>
        <h1>Excuse Generator</h1>
        <div className='excuse'>
        <h4>Generate an excuse for any of the following categories</h4>
        <div className='container'>
        <button onClick={()=>categoryExcuse("family")}>Family</button>
        <button onClick={()=>categoryExcuse("office")}>Office</button>
        <button onClick={()=>categoryExcuse("college")}>College</button>
        <p>{reason}</p>
        </div>
        {/* Instead of creating a separate function for each category. ie. familyExcuse(), officeExcuse() I can sort of use or pass arguments like props for the category 
        which would lead to a cleaner code.
        */}

    </div>
    </>

  )
}
export default Excuse