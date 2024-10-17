import React from "react";
import "./App.css";
import Head from "./Head";
import Weather from "./Weather";
import Bussiness from "./Bussiness";
import Entertainment from "./Entertainment";
import Sport from "./Sport";
import Technology from "./Technology";
import Food from "./Food";
import Education from "./Education";
import Home from "./Home";

function App() {
    
    function weatherchange(){
        document.getElementById("a").style.display="none";
        document.querySelector(".App").style.display="block"
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("e").style.display="none";
        document.getElementById("f").style.display="none";
        document.getElementById("g").style.display="none";
    }

    function homechange(){
        document.getElementById("a").style.display="flex";
        document.querySelector(".App").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("e").style.display="none";
        document.getElementById("f").style.display="none";
        document.getElementById("g").style.display="none";
    }
    function bussinessschange(){
        document.getElementById("b").style.display="block";
        document.getElementById("a").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("e").style.display="none";
        document.getElementById("f").style.display="none";
        document.getElementById("g").style.display="none";
        document.querySelector(".App").style.display="none";
    }
    function entertainmentchange(){
        document.getElementById("c").style.display="block";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("e").style.display="none";
        document.getElementById("f").style.display="none";
        document.getElementById("g").style.display="none";
        document.querySelector(".App").style.display="none";
    }
    function sportchange(){
        document.getElementById("d").style.display="block";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("e").style.display="none";
        document.getElementById("f").style.display="none";
        document.getElementById("g").style.display="none";
        document.querySelector(".App").style.display="none";
    }
    function technologychange(){
        document.getElementById("e").style.display="block";
        document.querySelector(".App").style.display="none";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("f").style.display="none";
        document.getElementById("g").style.display="none";
    }
    function foodchange(){
        document.getElementById("f").style.display="block";
        document.querySelector(".App").style.display="none";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("e").style.display="none";
        document.getElementById("g").style.display="none";
    }
    function educationchange(){
        document.getElementById("g").style.display="block";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("e").style.display="none";
        document.getElementById("f").style.display="none";
        document.querySelector(".App").style.display="none";
    }
    return (
        <div>
        <Head onweatherclick={weatherchange} onhomeclick={homechange} onbussinessclick={bussinessschange} onentertainmentclick={entertainmentchange} onsportclick={sportchange} ontechnoclick={technologychange} onfoodclick={foodchange} oneducationclick={educationchange}/>
        <div id="a">
            <Home />
        </div>
        <div className="App" style={{display:"none"}}>
            <Weather />
        </div>
        <div id="b" style={{display:"none"}}>
            <Bussiness />
        </div>
        <div id="c" style={{display:"none"}}>
            <Entertainment />
        </div>
        <div id="d" style={{display:"none"}}>
            <Sport />
        </div>
        <div id="e" style={{display:"none"}}>
            <Technology />
        </div>
        <div id="f" style={{display:"none"}}>
            <Food />
        </div>
        <div id="g" style={{display:"none"}}>
            <Education />
        </div>
        </div>
    );
}

export default App;
