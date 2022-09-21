import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Historique.css';
import logo from '../../logo.png'
import cloche from "../../cloche.png";
import cloche2 from "../../cloche2.png";

function Historique() {

    const url="https://fhir.alliance4u.io/api/patient"
    const url2="https://fhir.alliance4u.io/api/practitioner"

    const [practitionerNames, setPractitionerNames] = useState([]);
    const [selected, setSelected] = useState("f201");
    const [myPractitionerName, setMyPractitionerName] = useState([]);

    const [data, setData] = useState({
        nom: "",
        prenom: "",
        genre: "male",
        dateDeNaissance: "",
        email: ""
    })

    var headers = { "Content-Type": "application/json" };

    var myName = [
        {
            use: "official",
            family: data.nom,
            given: [data.prenom]
        }
    ];

    var myPractitioner = [
        {
            reference: selected
        }
    ]

    var myEmail = [
        {
            system: "email",
            use: "home",
            value: data.email
        }
    ]

    var body = {
        resourceType: "Patient",
        id: "patientGroupeMarisolLucas",
        name: myName,
        gender: data.genre,
        birthDate: data.dateDeNaissance,
        generalPractitioner: myPractitioner,
        telecom: myEmail
    }

    //Function to send the entered data to the server via the API
    function submit(e){
        e.preventDefault();
        console.log("Trying to post");
        Axios.post(url, body, {
            headers: headers
        })
            .then(res=>{
                console.log(res.data);
                console.log("Patient créé");
                window.location.replace(`http://localhost:3000`)
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    //Function to store the user's input in value
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url2);
                result = await result.json();
                setPractitionerNames(result);
                console.log(practitionerNames);
            } catch {
                console.log("Error")
            }
        };
        asyncFn();
    }, []);


    const handleChange = (event) => {
        setSelected(event.target.value);
    }

    function myFunction() {
        document.getElementById("notif2").style.display = "block";
        document.getElementById("notif").style.display = "none";
    }
    function myFunction2() {
        document.getElementById("notif").style.display = "block";
        document.getElementById("notif2").style.display = "none";
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
                <li>
                    <a href="./donneesVitales">Évolutions</a>
                </li>
                <li>
                    <img id="notification" className="active" style={{display:'block'}} onClick={myFunction} src={cloche} alt={"cloche"}/>
                    <a href="http://localhost:3000/profil"><img id="notif2" className="active" style={{display:'none'}} onClick={myFunction2}  src={cloche2} alt={"clocheRouge"}/></a>
                </li>
            </ul>
            <img id="logo" src={logo} alt="logo"/>
            <h1>Historik de skon ressoua</h1>
            <ul id="historique">
                {/*LÀ C'EST LÀ OÙ TU VAS FAIRE LA LISTE...*/}
                {/*SCRUM MASTER !*/}
                <li>
                    <p>Nom du diagnostic</p>
                    <p>Type Maladie (genre crampe)</p>
                    <p><b>Valeur Maladie(Genre au poil)</b></p>
                    <button>Supprimer</button>
                </li>
                <li>
                    <p>Nom du diagnostic</p>
                    <p>Type Maladie (genre crampe)</p>
                    <p><b>Valeur Maladie(Genre au poil)</b></p>
                    <button>Supprimer</button>
                </li>
            </ul>
        </div>
    );
}

export default Historique;