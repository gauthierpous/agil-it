import "./Profil.css";
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import logo from "../../logo.png";

function ProfilPage() {

    const url = "https://fhir.alliance4u.io/api/patient/patientGroupeMarisolLucas";

    const [prenom, setPrenom] = useState([]);
    const [nom, setNom] = useState([]);
    const [dateDeNaissance, setDateDeNaissance] = useState([]);
    const [genre, setGenre] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url);
                result = await result.json();
                setId(result.id)
                setPrenom(result.name[0].given[0])
                setNom(result.name[0].family)
                setDateDeNaissance(result.birthDate)
                setGenre(result.gender)
                console.log(result);
            } catch {
                console.log("Error")
            }
        };
        asyncFn();
    }, []);

    const deleteMyProfile = (e) => {
        e.preventDefault();
        console.log("Trying to delete")
        Axios.delete(url)
            .then((res) => {
                    console.log("User deleted");
                    window.location.replace("http://localhost:3000");
                }
            )
    }

    return (
        <div className="profil">
            <a href="../dashboard"><img src={logo} alt="logo"/></a>
            <h1>Mon profil patient</h1>
            <div className="zoneProfil">
                <div className="infoPerso">
                    <div className="champProfil">
                        <p id="first"><i>Prénom</i></p>
                        <p>{prenom}</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Nom</i></p>
                        <p>{nom}</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Date de naissance</i></p>
                        <p>{dateDeNaissance}</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Genre</i></p>
                        <p>{genre}</p>
                    </div>
                    <div className="champProfil">
                        <p><i>E-mail</i></p>
                        <p>bastien.dubois@gmail.com</p>
                    </div>
                    <div className="deleteButton">
                        <button id="buttonDelete" onClick={(e)=> deleteMyProfile(e)}>Supprimer mon profil</button>
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
