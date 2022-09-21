import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Form.css';
import logo from '../../logo.png'

function RegistrationForm() {

    const url="https://fhir.alliance4u.io/api/patient"

    const [data, setData] = useState({
        nom: "",
        prenom: "",
        genre: "",
        dateDeNaissance: ""
    })

    var headers = { "Content-Type": "application/json" };

    var myName = [
        {
            use: "official",
            family: data.nom,
            given: [data.prenom]
        }
    ];

    var body = {
        resourceType: "Patient",
        id: "patientGroupeMarisolLucas",
        name: myName,
        gender: data.genre,
        birthDate: data.dateDeNaissance
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


    return (
        <div className="registrationForm">
            <img id="logo" src={logo} alt="logo"/>
            <h1>Renseignez vos informations</h1>
            <form onSubmit={(e)=> submit(e)}>
                <div className="formInput">
                    <label htmlFor="nom">Nom</label>
                    <input onChange={(e)=>handle(e)} type="text" id="nom" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="prenom">Prénom</label>
                    <input onChange={(e)=>handle(e)} type="text" id="prenom" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="dateDeNaissance">Date de naissance</label>
                    <input onChange={(e)=>handle(e)} type="date" id="dateDeNaissance" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="genre">Sexe</label>
                    <input onChange={(e)=>handle(e)} type="text" id="genre" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="mail">Adresse e-mail</label>
                    <input type="mail" id="mail" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="motDePasse">Mot de passe</label>
                    <input type="password" id="motDePasse" required/>
                </div>
                <div id="buttonContainer"><button>Valider / Inscription</button></div>
            </form>
        </div>
    );
}

export default RegistrationForm;