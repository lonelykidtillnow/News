import React from "react";
import { FaBloggerB } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { MdApartment } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiNews } from "react-icons/ti";

const Head=({onweatherclick,onhomeclick,onbussinessclick,onentertainmentclick,onsportclick,ontechnoclick,onfoodclick,oneducationclick})=>{

    function resetbgcolor(){
        document.querySelectorAll("label").forEach(label=> label.style.backgroundColor="");
    }

    function weatherchange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey"
        onweatherclick();
    }
    function homechange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey"
        onhomeclick();
    }
    function bussinessschange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey";
        onbussinessclick();
    }
    function entertainmentchange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey";
        onentertainmentclick();
    }
    function sportchange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey";
        onsportclick();
    }
    function technologychange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey";
        ontechnoclick();
    }
    function foodchange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey";
        onfoodclick();
    }
    function educationchange(event){
        resetbgcolor();
        event.target.style.backgroundColor="grey";
        oneducationclick();
    }
    function change(){
        var a=document.querySelector("input").value
        if(a=="bussiness" | a=="stock" | a=="share" | a=="market"){
            onbussinessclick();
        }
        else if(a=="entertainment" | a=="movies" | a=="webseries" | a=="updates"){
            onentertainmentclick();
        }
        else if(a=="sports" | a=="hockey" | a=="football" | a=="cricket" | a=="basketball" | a=="race" | a=="kabaddi"){
            onsportclick();
        }
        else if(a=="technology" | a=="ai" | a=="robot" | a=="5g" | a=="alien" | a=="spaceship" | a=="jobs"|a=="software"){
            ontechnoclick();
        }
        else if(a=="food" | a=="apple" | a=="mango" | a=="juice" | a=="oil" | a=="orange"){
            onfoodclick();
        }
        else if(a=="education" | a=="leave" | a=="aboard" | a=="exam" | a=="result" | a=="foreign"){
            oneducationclick();
        }
        else{
            onweatherclick();
        }
    }
    return(
        <div>
            <div className="a">
                <p style={{fontSize:"20px"}}><FaBloggerB /> Blogger</p>
                <h1 style={{marginTop:"1%",display:"flex",gap:"8px"}}>Short News <TiNews style={{paddingTop:"4px"}}/></h1>
                <p style={{fontSize:"20px"}}><button><FaUserAlt /> Sign in </button> <button><FaSignInAlt /> Sign up</button></p>
            </div>
            <div className="d" style={{display:"flex",justifyContent:"center",gap:"20px"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={homechange}><FaHome /> Home</label>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={bussinessschange}><MdApartment /> Bussiness</label>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={entertainmentchange}><SiDcentertainment /> Entertainment</label>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={sportchange}><FcSportsMode /> Sports</label>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={technologychange}><GrTechnology /> Technology</label>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={foodchange}><IoFastFood /> Food</label>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={educationchange}><MdOutlineCastForEducation /> Education</label>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}} onClick={weatherchange}><TiWeatherPartlySunny /> Weather</label>
            </div>
            <hr></hr>
            <div className="b">
                <input placeholder="Search" style={{width:"300px",height:"30px",border:"1px solid black"}}></input>
                <button style={{borderRadius:"2px",border:"1px solid black"}} onClick={change}>Search</button>
            </div>
        </div>
    )
}
export default Head;