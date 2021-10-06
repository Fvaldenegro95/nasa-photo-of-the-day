import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {nasaURL, apiKey, keyConnect} from '../nasaUrl'


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
<h2>Date: {date} </h2>
<p>Photographer: {copyright}</p>
<p>{explanation}</p>
</div>


    )

}
















