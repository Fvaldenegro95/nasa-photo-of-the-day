import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {nasaURL, apiKey, keyConnect} from '../nasaUrl'

export default function TopSection (){

    const [title, setTitle] = useState ('')
    
    
useEffect(()=>{
    axios.get(`${nasaURL}${keyConnect}${apiKey}`)
    .then(response => {
        setTitle(response.data.title)
    })
    .catch(err => {
        console.error(err)
    })
}, [])

return (
  <h1>{title}</h1>
)

}