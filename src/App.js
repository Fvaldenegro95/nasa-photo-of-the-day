import React from "react";
import "./App.css";
import {useState} from 'react'
import {useEffect} from 'react'
import {nasaURL, apiKey, keyConnect} from './nasaUrl'
import axios from "axios";
import MidSection from "./Components/midSection";
import BotSection from "./Components/botSection";
import TopSection from "./Components/topSection";
import styled from 'styled-components'


// import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// import theme from './Theme/index'

const Body = styled.body`
  background-image:linear-gradient(160deg, black, #033A3A);
  margin-bottom: -50px;
  `

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
<Body>

    <TopSection />
    <MidSection />
    <BotSection />

</Body>
    </div>
  );
}


export default App;
