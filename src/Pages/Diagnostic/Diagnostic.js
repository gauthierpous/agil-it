import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Diagnostic.css';
import logo from '../../logo.png'

function Diagnostic() {

    const url="http://35.176.229.91:8080/api/endusers/byHome/"

    const [data, setData] = useState({
        name:"",
        firstname:"",
        lastname:"",
        date:"",
        password:"",
        email:"",
        phone:"",
    });

    const [count, setCount] = useState(0);


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


    let isDisplayed = 1;
    function change(){
        let hiddenGroup = document.getElementById("groupe" + isDisplayed);
        let shownGroup = document.getElementById("groupe" + (isDisplayed + 1));
        hiddenGroup.style.opacity = "0";
        setTimeout(() => {hiddenGroup.style.display = "none";}, 500);
        shownGroup.style.display = "flex";
        setTimeout(() => {shownGroup.style.opacity = "1";}, 500);
        isDisplayed++;
    }

    return (
        <div className="diagnostic">
            <div className="fautes">
                <h2 >{count}</h2>
                <h2>Compteur de fautes</h2>
            </div>
            <div className="pasDrole">
                <div><button className="buttonDiagnostic">Je ne suis pas drôle <br /> je veux mes résultats</button></div>
            </div>
            <img src={logo} alt="logo"/>
            <h1>Jouons à un jeu !</h1>

            <div id="groupe1" className="group">
                <h2>Quelle pathologie pensez-vous avoir ?</h2>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Mauvaise réponse</button></div>
                <div><button onClick={change} className="buttonDiagnostic">Bonne réponse</button></div>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Mauvaise réponse</button></div>
            </div>
            <div id="groupe2" className="group">
                <h2>Votre espérance de vie a t-elle changé ?</h2>
                <div><button className="buttonDiagnostic">Cancer des couilles</button></div>
                <div><button onClick={change} className="buttonDiagnostic">Valider / Inscription</button></div>
                <div><button className="buttonDiagnostic">Valider / Inscription</button></div>
            </div>
            <div id="groupe3" className="group">
                <h2>Quelle est votre nouvelle espérance de vie ?</h2>
                <div><button className="buttonDiagnostic">Cancer des couilles</button></div>
                <div><button className="buttonDiagnostic">Valider / Inscription</button></div>
                <div><button className="buttonDiagnostic">Valider / Inscription</button></div>
            </div>
        </div>
    );
}

export default Diagnostic;