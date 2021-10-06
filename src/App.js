import React from "react";
import "./App.css";
import {useState} from 'react'
import {useEffect} from 'react'
import {nasaURL, apiKey, keyConnect} from './nasaUrl'
import axios from "axios";

function App() {

const [nasaData, setNasaData] = useState([]);

useEffect(() => {
  axios.get(`${nasaURL}${keyConnect}${apiKey}`)
  .then(response => {
    setNasaData(response.data)
    return nasaData
  })
  .catch(err =>{
    console.error(err)
  })
}, []
);

console.log(nasaData)






  
  return (
    <div className="App">
      <p>
        This is where everything goes <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>{`${nasaData.title}`}</h1>
      
    <div className="apod-container"></div>
      <div className="apod-image">
        <img src={`${nasaData.url}`} alt="spacephoto"/>
    </div>


    <div className="apod-desc">
      <h2>Date: {nasaData.date}
      </h2>
      <p>Photographer: {nasaData.copyright}</p>
      <p>{nasaData.explanation}</p>
    </div>

    </div>
  );
}


export default App;
