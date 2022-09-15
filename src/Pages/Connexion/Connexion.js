import React, { useState } from "react";
import "./Connexion.css";
import Axios from "axios";
import ReactDOM from "react-dom";

function MainForm() {

    const url = "http://35.176.229.91:8080/api/clientIndex/login/";


    //Function to send the entered data to the server via the API
    function submit(e) {
/*        e.preventDefault();
        Axios.post(url, {
            email: data.email,
            password: data.password,
        }).then((res) => {
            console.log(res.data);
            if (res.data === "Email incorrect") {
                ReactDOM.render(
                    <p>Wrong email or password ! Please try again</p>,
                    document.getElementById("WrongLogin")
                );
            } else if (res.data === "Password incorrect") {
                ReactDOM.render(
                    <p>Wrong email or password ! Please try again</p>,
                    document.getElementById("WrongLogin")
                );
            } else {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("id", res.data.userId);
                localStorage.setItem("userHomeId", res.data.home_RW_key);
                localStorage.setItem("bulb", "true");
                localStorage.setItem("barOpened", "true");
                if (res.data.avatarUrl != null) {
                    localStorage.setItem("avatarUrl", res.data.avatarUrl);
                }
                window.location.replace(`http://localhost:3000/Dashboard`);
            }
        });*/
    }
        return (
            <div className="bodyMain">
                    <form onSubmit={(e) => submit(e)}>
                        <input
                            placeholder="Email"
                            type="email"
                            id="email"
                        ></input>
                        <input
                            placeholder="Password"
                            type="text"
                            id="password"
                        ></input>

                        <br /> <br />
                        <div id="buttonContainer">
                            <button>log in</button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <a
                            href="/SelectID"
                            style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                color: "white",
                                textDecoration: "none",
                                textTransform: "uppercase",
                                position: "absolute",
                                top: "70%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {" "}
                            Sign Up{" "}
                        </a>
                        <br />
                        <br />
                        <a
                            href="/ForgottenPassword"
                            style={{
                                fontSize: "12px",
                                fontWeight: "normal",
                                cursor: "pointer",
                                color: "white",
                                textDecoration: "none",
                                position: "absolute",
                                top: "80%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {" "}
                            Forgotten password ?
                        </a>
                        <br />
                        <br />
                        <br />
                    </form>

                <div id="WrongLogin"></div>
            </div>
        );
}

export default MainForm;
