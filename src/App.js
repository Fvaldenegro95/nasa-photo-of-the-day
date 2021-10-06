import React from "react";
import "./App.css";
import {useState} from 'react'
import {useEffect} from 'react'
import {nasaURL, apiKey, keyConnect} from './nasaUrl'
import axios from "axios";
import MidSection from "./Components/midSection";
import BotSection from "./Components/botSection";
import TopSection from "./Components/topSection";

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

    <TopSection />
    <MidSection />
    <BotSection />

    </div>
  );
}


export default App;
