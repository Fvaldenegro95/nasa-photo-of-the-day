import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {nasaURL, apiKey, keyConnect} from '../nasaUrl'
import styled from 'styled-components'

const Image = styled.img`
    max-width: 40%;
    max-height: 50%;
`


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

      <Image src={image} alt="spacephoto"/>
  </div>

)

}