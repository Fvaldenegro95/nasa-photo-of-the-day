import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {nasaURL, apiKey, keyConnect} from '../nasaUrl'


export default function MidSection (){

const [image, setImage] = useState('')


useEffect(() =>{
    axios.get(`${nasaURL}${keyConnect}${apiKey}`)
    .then(response => {
        setImage(response.data.url)
    })
    .catch(err => {
        console.error(err)
    })
} , [])

return (
    <div className="image-container">
      <img src={image} alt="spacephoto"/>
  </div>

)

}