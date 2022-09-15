import React, { useState } from "react";
import "./Connexion.css";
import Axios from "axios";
import ReactDOM from "react-dom";

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
            <div className="bodyMain">
                <form>
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
                            placeholder="Password"
                            type="text"
                            id="password"
                        ></input>

                    <div id="WrongLogin"></div>

                        <br /> <br />
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
                        <br />
                        <br />
                    <div id="buttonContainer">
                        <button onClick={(e) => submit(e)}>log in</button>
                    </div>
                </form>
            </div>
        );
}

export default MainForm;