import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Form.css';
import logo from '../../logo.png'

function RegistrationForm() {

    const url="http://35.176.229.91:8080/api/endusers/byHome/"

    const [data, setData] = useState({
        name:"",
        firstname:"",
        lastname:"",
        date:"",
        password:"",
        email:"",
        phone:"",

    })


    //Function to send the entered data to the server via the API
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            firstname: data.firstname,
            lastname: data.lastname,
            date: data.date,
            password: data.password,
            email: data.email,
            phone: parseInt(data.phone)
        })
            .then(res=>{
                console.log(res.data);
                if (res.data === "New end user created."){
                    window.location.replace(`http://localhost:3000`);
                }else if (res.data === "Error creating new end user."){
                    console.log('error')
                    ReactDOM.render(<p>This username/email already exists, please choose a new one.</p>, document.getElementById('Err'));
                }
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
            <img src={logo} alt="logo"/>
            <h1>Renseignez vos informations</h1>
            <form onSubmit={(e)=> submit(e)}>
                <div className="formInput">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="dateNaissance">Date de naissance</label>
                    <input type="date" id="dateNaissance" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="sexe">Sexe</label>
                    <input type="text" id="sexe" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="mail">Adresse e-mail</label>
                    <input type="mail" id="mail" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="motDePasse">Mot de passe</label>
                    <input type="password" id="motDePasse" required/>
                </div>
            </form>
            <div id="buttonContainer"><button>Valider / Inscription</button></div>
        </div>
    );
}

export default RegistrationForm;