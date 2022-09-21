import React, { useState } from "react";
import cloche from "./cloche.png";
import cloche2 from "./cloche2.png";

function testNotif() {

    function myFunction() {
        document.getElementById("notif2").style.display = "block";
        document.getElementById("notif").style.display = "none";
    }
    function myFunction2() {
        document.getElementById("notif").style.display = "block";
        document.getElementById("notif2").style.display = "none";
    }
    return (
        <div className="testNotif">
            <img id="notif" className="active" style={{display:'block'}} onClick={myFunction} src={cloche} alt={"cloche"}/>
            <a href="http://localhost:3000/profil"><img id="notif2" className="active" style={{display:'none'}} onClick={myFunction2}  src={cloche2} alt={"clocheRouge"}/></a>
        </div>
    );
}

export default testNotif;