import React, { useState } from "react";
import "./Profil.css";
import Axios from "axios";
import ReactDOM from "react-dom";
import logo from "../../logo.png";

function ProfilPage() {

    const url = "http://35.176.229.91:8080/api/clientIndex/login/";

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    //Function to send the entered data to the server via the API
    function submit(e) {
        e.preventDefault()
        if (data.email === "bastien.dubois@gmail.com") {
            if (data.password === "1234") {
                window.location.replace(`http://localhost:3000/Dashboard`)
            } else {
                ReactDOM.render(
                    <p>Email et/ou mot de passe incorrect</p>,
                    document.getElementById("WrongLogin")
                )
            }
        } else {
            ReactDOM.render(
                <p>Email et/ou mot de passe incorrect</p>,
                document.getElementById("WrongLogin")
            )
        }
    }
    return (
        <div className="profil">
            <a href="../dashboard"><img src={logo} alt="logo"/></a>
            <h1>Mon profil patient</h1>
            <div className="zoneProfil">
                <div className="infoPerso">
                    <div className="champProfil">
                        <p id="first"><i>Prénom</i></p>
                        <p>Bastien</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Nom</i></p>
                        <p>Dubois</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Date de naissance</i></p>
                        <p>27/07/2001</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Genre</i></p>
                        <p>Masculin</p>
                    </div>
                    <div className="champProfil">
                        <p><i>E-mail</i></p>
                        <p>bastien.dubois@gmail.com</p>
                    </div>
                </div>
                <div className="diagnostic">
                    <button>Accéder au diagnostic</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilPage;
