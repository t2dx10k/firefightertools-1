import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useTool from "./hooks/useTool";
import ToolPage from "./pages/ToolPage";

function App() {

  const [helloMessage, setHelloMessage] = useState("")

  useEffect(()=> {
    fetchHelloMessage()
  },[])

  function fetchHelloMessage(){
    axios.get("/api/hello")
        .then(response => response.data)
        .then(data => setHelloMessage(data))
        .catch((error) => console.log(error))
  }

  const {tool, deleteTool} = useTool();

  return (
    <div className="App">
      <p>{helloMessage}</p>

        <HashRouter>

          <Routes>
            <Route  path={"/"} element={<MainPage/>}/>
            <Route path={"/toolpage/"} element={<ToolPage tools={tool}/>}/>
          </Routes>
        </HashRouter>

    </div>
  );
}
export default App;
