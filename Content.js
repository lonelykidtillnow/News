import React from "react";
const Content=(props)=>{
    return(
        <div className="c">
            <img src={props.image}></img>
            <p id="x"><b>{props.headline}</b></p>
            <p id="xx">{props.content}</p>
        </div>
    );
}
export default Content;