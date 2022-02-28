import React from "react"
import ReactDOM from 'react-dom';
import App from "./App"
import Main from "./components/main"
import Navbar from "./components/navbar"
import "./style.css"

ReactDOM.render(
    <>
       {/* <App /> */}
       <Navbar />
       <Main />
    </>
    ,
    document.getElementById("root")
)