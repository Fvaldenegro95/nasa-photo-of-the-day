import React from "react";
import "./App.css";
import {useState} from 'react'
import {useEffect} from 'react'
import {nasaURL, apiKey, keyConnect} from './nasaUrl'
import axios from "axios";
import MidSection from "./Components/midSection";
import BotSection from "./Components/botSection";
import TopSection from "./Components/topSection";
import styled, { keyframes } from 'styled-components'


// import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// import theme from './Theme/index'

const kf = keyframes`
0% {
  background-color: #141414;
}
25%{
  background-color: #730761;
}
50% {
  background-color: #067474;
}
75%{
  background-color: #730761;
}
100% {
  background-color: #141414 ;
}`


const BodyStyle = styled.body`
  margin-bottom: -50px;
  animation: ${kf} 5s infinite;
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
    <BodyStyle>

    <TopSection />
    <MidSection />
    <BotSection />

    </BodyStyle>
    </div>

  );
}


export default App;
