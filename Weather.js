import React from "react";
import {useState} from "react"
import { FaSearch } from "react-icons/fa";
import img from "./image/a1.jpg";
import { LuWaves } from "react-icons/lu";
import { GiSpeedBoat } from "react-icons/gi";

const Weather=()=>{
    const[temp,settemp]=useState("Celusis")
    const[state,setstate]=useState("City")
    const[country,setcountry]=useState("country")
    const[lat,setlat]=useState(0)
    const[long,setlong]=useState(0)
    const[hum,sethum]=useState(0)
    const[ws,setws]=useState(0)
    const[icon,seticon]=useState(0)
    const[text,settext]=useState("Description")

    async function search() {
        // let url="https://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=7572e04198ff5a3c4331ac20ffe6aa6b";
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=7572e04198ff5a3c4331ac20ffe6aa6b&units=metric`);
        const data=await res.json();
        if(data.cod==200){
            settemp(data.main.temp)
            setstate(data.name)
            setcountry(data.sys.country)
            setlat(data.coord.lat)
            setlong(data.coord.lon)
            sethum(data.main.humidity)
            setws(data.wind.speed)
            seticon(data.weather[0].icon)
            settext(data.weather[0].description)
        }
        else{
            alert("City not found,Try Again")
        }
    }
    function change(event){
        setstate(event.target.value)
    }
    return(
        <div>
            <style>
                {
                `.w{
                    width: 200px;
                    height: 20px;
                    border: none;
                    outline: none;
                }
                .img{
                    height: 200px;
                    width: 200px;
                    margin-left: 10px;
                }
                .p{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    border: 1px solid black;
                    width: fit-content;
                    border-radius: 100px;
                    padding: 5px 10px;
                }
                h1{
                    margin-top: 0%;
                }`
                }
            </style>
            <div className="p">
                <input type="text" placeholder="Search" onChange={change} className="w"></input>
                <FaSearch onClick={search}/>
            </div>

            <div className="q">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="img"></img>
                <p style={{textAlign:"center",textTransform:"uppercase",fontSize:"12px",marginTop:"0"}}>({text})</p>
                <h1 style={{textAlign:"center",fontSize:"30px"}}>{temp} °C</h1>
                <h1 style={{textAlign:"center",textTransform:"uppercase",color:"#FDB813"}}>{state}</h1>
                <p style={{textAlign:"center",fontSize:"20px",color:"#888",marginBottom:"0"}}><b>{country}</b></p>
            </div>

            <div className="r" style={{display:"flex",justifyContent:"center",gap:"30px"}}>
                <div>
                    <p style={{fontSize:"18px",textAlign:"center",marginBottom:"0"}}>latitude</p>
                    <p style={{fontSize:"18px",textAlign:"center",color:"#666",marginTop:"0"}}>{lat}</p>
                </div>
                <div>
                    <p style={{fontSize:"18px",textAlign:"center",marginBottom:"0"}}>longitude</p>
                    <p style={{fontSize:"18px",textAlign:"center",color:"#666",marginTop:"0"}}>{long}</p>
                </div>
            </div>
            <div className="s" style={{display:"flex",justifyContent:"space-between",color:"#555"}}>
                <div style={{height:"120px"}}>
                    <LuWaves style={{height:"50px",width:"40px",marginTop:"5px"}}/>
                    <p style={{margin:"0px 10px"}}>{hum}%</p>
                    <p style={{margin:"0"}}>Humidity</p>
                </div>
                <div style={{height:"120px"}}>
                    <GiSpeedBoat  style={{height:"50px",width:"40px"}} />
                    <p style={{margin:"0px 10px"}}>{ws} km/h</p>
                    <p style={{margin:"0"}}>Wind speed</p>
                </div>
            </div>
            <div className="t">
                <p style={{textAlign:"center",fontSize:"10px"}}>Designed By Rajesh &copy;</p>
            </div>
        </div>
    );
}
export default Weather;