import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {nasaURL, apiKey, keyConnect} from '../nasaUrl'
import styled, { keyframes } from 'styled-components'




const Wrapper = styled.h2`
  color: #F890E7;
  font-family: "Comic Sans MS";
`
const Paragraph = styled.p`
    color: #F890E7;
    max-width: 100%;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    font-family: "Comic Sans MS";
    
`



export default function BotSection (){

    const [date, setDate] = useState('')   
    const [copyright, setCopyright] = useState('')
    const [explanation, setExplanation] = useState('')


    useEffect(() =>{
        axios.get(`${nasaURL}${keyConnect}${apiKey}`)
        .then(response =>{
            setDate(response.data.date)
        })
        .catch(err =>{
            console.error(err)
        })
    }, [])

    
    useEffect(() =>{
        axios.get(`${nasaURL}${keyConnect}${apiKey}`)
        .then(response =>{
            setCopyright(response.data.copyright)
        })
        .catch(err =>{
            console.error(err)
        })
    }, [])

    useEffect(() =>{
        axios.get(`${nasaURL}${keyConnect}${apiKey}`)
        .then(response =>{
            setExplanation(response.data.explanation)
        })
        .catch(err =>{
            console.error(err)
        })
    }, [])  

    return (
        
        <div className="imageInformation">
<Wrapper>Photographer: {copyright}</Wrapper>
<Paragraph> Date: {date} </Paragraph>
<Paragraph>{explanation}</Paragraph>
</div>


    )

}
















