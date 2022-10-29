import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useTool from "./hooks/useTool";

function App() {

  const [helloMessage, setHelloMessage] = useState("")
  const {tool} = useTool();

  useEffect(()=> {
    fetchHelloMessage()
  },[])

  function fetchHelloMessage(){
    axios.get("/api/hello")
        .then(response => response.data)
        .then(data => setHelloMessage(data))
        .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <p>{helloMessage}</p>

        <HashRouter>
          <Routes>
            <Route path={"/"} element={<MainPage tools={tool}/>}/>
          </Routes>
        </HashRouter>

    </div>
  );
}

export default App;
