import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Historique.css';
import logo from '../../logo.png'
import cloche from "../../cloche.png";
import cloche2 from "../../cloche2.png";

function DonneesVitales() {

    const url="https://fhir.alliance4u.io/api/observation?subject.reference=patientGroupeMarisolLucas"
    const [observations, setObservations] = useState([]);

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url);
                result = await result.json();
                setObservations(result);
                console.log(result);
            } catch {
                console.log("Error")
            }
        };
        asyncFn();
    }, []);


    function myFunction() {
        document.getElementById("notif2").style.display = "block";
        document.getElementById("notif").style.display = "none";
    }
    function myFunction2() {
        document.getElementById("notif").style.display = "block";
        document.getElementById("notif2").style.display = "none";
    }

    function deleteObservation(event, id) {
        event.preventDefault();
            Axios.delete("https://fhir.alliance4u.io/api/observation/" + id)
                .then(res=>{
                    console.log("Observation supprimée")
                    window.location.replace(`http://localhost:3000/donneesVitales`)
                })
    }

    return (
        <div className="historique">
            <ul id="navbar">
                <li >
                    <a href="./profil">Mon Profil</a>
                </li>
                <li>
                    <a href="./dashboard">Envoyer ma demande de diagnostic</a>
                </li>
                <li>
                    <a href="./historique">Diagnostics</a>
                </li>
                <li id="active">
                    <a href="#">Évolutions</a>
                </li>
                <li>
                    <img id="notification" className="active" style={{display:'block'}} onClick={myFunction} src={cloche} alt={"cloche"}/>
                    <a href="http://localhost:3000/profil"><img id="notif2" className="active" style={{display:'none'}} onClick={myFunction2}  src={cloche2} alt={"clocheRouge"}/></a>
                </li>
            </ul>
            <img id="logo" src={logo} alt="logo"/>
            <h1>Historique des données envoyées</h1>
            <ul id="historique">
                <li>
                    <p>Nom du diagnostic</p>
                    <p>Donnée</p>
                    <p><b>Valeur</b></p>
                </li>

                {observations.map((item, index) => (
                    <li>
                        <p>{item.resourceType}</p>
                        <p>{item.code.coding[0].display}</p>
                        <p>{item.valueQuantity.value} {item.valueQuantity.unit}</p>
                        <p>
                            <button id="buttonDeleteObservation" onClick={(event) => {
                                deleteObservation(event, item.id)}}>
                                Supprimer
                            </button>
                        </p>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default DonneesVitales;