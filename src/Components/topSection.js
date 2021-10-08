import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {nasaURL, apiKey, keyConnect} from '../nasaUrl'
import styled, { keyframes } from 'styled-components'


const kf = keyframes`
100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
}

`
const Title = styled.h1`
opacity: 0%;
transform: scale(5) rotateZ(5760deg);
animation: ${kf} 5s ease-in-out forwards;
color: #0BD3D3;
font-family: "Comic Sans MS";
`


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
    <Title>
  <h1>{title}</h1>
  </Title>
)

}