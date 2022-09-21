import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Historique.css';
import logo from '../../logo.png'
import cloche from "../../cloche.png";
import cloche2 from "../../cloche2.png";

function DonneesVitales() {

    const url="https://fhir.alliance4u.io/api/diagnostic-report?subject.reference=patientGroupeMarisolLucas"
    const [diagnostics, setDiagnostics] = useState([]);

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url);
                result = await result.json();
                setDiagnostics(result);
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

    function deleteDiagnostic(event, id) {
        event.preventDefault();
        Axios.delete("https://fhir.alliance4u.io/api/diagnostic-report/" + id)
            .then(res=>{
                console.log("Diagnostic supprimé")
                window.location.replace(`http://localhost:3000/historique`)
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
                <li id="active">
                    <a href="#">Diagnostics</a>
                </li>
                <li >
                    <a href="./donneesVitales">Évolutions</a>
                </li>
                <li>
                    <img id="notification" className="active" style={{display:'block'}} onClick={myFunction} src={cloche} alt={"cloche"}/>
                    <a href="http://localhost:3000/profil"><img id="notif2" className="active" style={{display:'none'}} onClick={myFunction2}  src={cloche2} alt={"clocheRouge"}/></a>
                </li>
            </ul>
            <a href="./profil"><img id="logo" src={logo} alt="logo"/></a>
            <h1>Historique des diagnostics</h1>
            <table id="historique">
                <tr id="titre">
                    <td>Médecin</td>
                    <td>Conclusion</td>
                    <td>Suppression</td>
                </tr>

                {diagnostics.map((item, index) => (
                        <tr>
                            <td>{item.resultsInterpreter[0].display}</td>
                            <td>{item.conclusion}</td>
                            <td>
                                <button id="buttonDeleteObservation" onClick={(event) => {
                                    deleteDiagnostic(event, item.id)}}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    )
                )}
            </table>
        </div>
    );
}

export default DonneesVitales;