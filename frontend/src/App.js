import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./Nav"
import Test from "./Test"
import Synanyms from "./Synanyms"
import axios from "axios"
import { useEffect, useState } from "react"
import Antonyms from "./Antonyms"
import Aptitude from "./Aptitude"
import Coding from "./Coding"
import Game from "./Game"
import History from "./History"
import Gk from "./Gk"
import Home from "./Home"

import AOS from "aos"
import "aos/dist/aos.css";

const App = ()=>
{

  const [synanyms , setsynanyms] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  useEffect(() => 
  {
    synn();
    anto();
    cod();
    apti();
    gam();
    cul();
    gen();
  }, []);

  const synn = async()=>
  {
    try 
    {
      const sy = await axios.get("http://localhost:2026/synonyms")

      setsynanyms(sy.data.data)
    }
    catch(err)
    {
      console.log("something went wrong : "+err.message );
    }
  }

  //////////////////////////////////////////////////////////////////////

  const [antonyms , setantonyms] = useState([])

  const anto = async()=>
  {

    try 
    {
      const sy = await axios.get("http://localhost:2026/antonyms")

      setantonyms(sy.data.data)
    }
    catch(err)
    {
      console.log("something went wrong : "+err.message );
    }
    
  }

  //////////////////////////////

  const [aptitude , setaptitude] = useState([])

  const apti = async()=>
  {
    const sy = await axios.get("http://localhost:2026/aptitude")

    setaptitude(sy.data.data)
  }

  ///////////////////////////////////////

  const [coding , setcoding] = useState([])

  const cod = async()=>
  {
    const sy = await axios.get("http://localhost:2026/coding")

    setcoding(sy.data.data)
  }
  
  ////////////////////////

  const [games , setgames] = useState([])

  const gam = async()=>
  {
    const sy = await axios.get("http://localhost:2026/games")

    setgames(sy.data.data)
  }

  //////////////////////////////////////

  const [Culture , setculture] = useState([])

  const cul = async()=>
  {
    const sy = await axios.get("http://localhost:2026/culture")
    setculture(sy.data.data)
  }

  //////////////////////////

  const [gk , setgk] = useState([])

  const gen = async()=>
  {
    const sk = await axios.get("http://localhost:2026/gk")

    setgk(sk.data.data)
  }
  

  return(
      <div className="app">
        <Nav />
        <Routes>

          <Route path="/" element={<Home />}/>

          <Route path="/test" element={<Test />} />

          <Route path="/test/synonyms" element={<Synanyms 
              synanyms = {synanyms}
            />} />

            <Route path="/test/Antonyms" element={<Antonyms 
              antonyms = {antonyms}
            />}/>

            <Route path="/test/Aptitude" element={<Aptitude 
                aptitude = {aptitude}
            />}/>

            <Route path="/test/Coding" element={<Coding 
                coding = {coding}
            />}/>

            <Route path="/test/Games" element={<Game 
                games = {games}
            />} />

            <Route path="/test/History&Culture" element={<History 
                Culture = {Culture}
            />}/>

            <Route path="/test/GK" element={<Gk 
              gk = {gk}
            />} />

        </Routes>
      </div>
  )
}

export default App