import React, { useState } from "react";
import "./Connexion.css";
import Axios from "axios";
import ReactDOM from "react-dom";
import logo from "../../logo.png";

function MainForm() {

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
                localStorage.setItem("id", "patientGroupeMarisolLucas")
                window.location.replace(`http://localhost:3000/profil`)
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
            <div className="bodyMain">
                <img src={logo} id="logo" alt="logo"/>
                <form className="formConnexion">
                        <input
                            onChange={(e) => handle(e)}
                            value={data.email}
                            placeholder="Email"
                            type="email"
                            id="email"
                        ></input>
                        <input
                            onChange={(e) => handle(e)}
                            value={data.password}
                            placeholder="Mot de passe"
                            type="password"
                            id="password"
                        ></input>



                    <div id="buttonContainer">
                        <button onClick={(e) => submit(e)}>Se connecter</button>
                    </div>
                    <div id="WrongLogin"></div>
                </form>
            </div>
        );
}

export default MainForm;
