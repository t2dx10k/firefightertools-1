import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useTool from "./hooks/useTool";
import ToolPage from "./pages/ToolPage";
import AddPage from "./pages/AddPage";
import AnswerPage from "./pages/AnswerPage";
import LoginPage from "./pages/LoginPage";
import QuizPage from "./pages/QuizPage";
import RegistrationPage from "./pages/RegistrationPage";

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
            <Route path={"/tools/"} element={<ToolPage tools={tool}/>}/>
            <Route path={"/add/"} element={<AddPage/>}/>
            <Route path={"/answer/"} element={<AnswerPage/>}/>
            {/*<Route path={"/details/"} element={<DetailPage tool={tool}/>}/>*/}
            {/*<Route path={"/edit/"} element={<EditPage tool={tool} deleteATool={deleteTool}}/>*/}
            <Route path={"/login/"} element={<LoginPage/>}/>
            <Route path={"/quiz/"} element={<QuizPage/>}/>
            <Route path={"/register/"} element={<RegistrationPage/>}/>
          </Routes>
        </HashRouter>

    </div>
  );
}
export default App;
