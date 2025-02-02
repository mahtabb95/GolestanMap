import React from "react";
import logo from "/logo.png";



export default function Header(){
    return(
        <div className="boredr-2 border col-md-10 me-auto d-flex justify-content-between">
            <Title />
            <User />
        </div>
    )
}


function Logo(){
    return(
        <figure className="w-5 h-5">
            <img className="img-fluid" src={logo}></img>
        </figure>
    )
}

function Title(){
    return(
        <div className="d-flex justify-content-center col-10">
            <h1>توزیع سفارشات</h1>
        </div>
    )
}

