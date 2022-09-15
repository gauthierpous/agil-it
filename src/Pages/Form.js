import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Form.css';
import logo from '../logo.png'

function PostForm() {

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
        <div className="formPatient">
            <img src={logo} alt="logo"/>
            <h1>Renseignez les informations</h1>
            <form onSubmit={(e)=> submit(e)}>
                <input type="text" id="poids" placeholder="Poids" required/>
                <input type="text" id="taille" placeholder="Taille" required/>
                <input type="text" id="tension" placeholder="Tension artérielle" required/>
                <input type="text" id="temperature" placeholder="Température" required/>
            </form>

            <form onSubmit={(e)=> submit(e)}>

                {/*Champs : glycémie,
                estimated GFR
                Imaging results like bone density or fetal measurements
                Clinical Findings* such as abdominal tenderness
                Device measurements such as EKG data or Pulse Oximetry data
                Clinical assessment tools such as APGAR or a Glasgow Coma Score
                Personal characteristics: such as eye-color
                Social history like tobacco use, family support, or cognitive status
                Envoi du formulaire d'analyse (exemple : glucose)*/}

                <input type="text" id="glycemie" placeholder="Glycémie" required/>
                <input type="text" id="GFR" placeholder="Taux de filtration glomérulaire" required/>
                <input type="text" id="imagingResult" placeholder="Densité osseuse" required/>
                <input type="text" id="glycemie" placeholder="Oximétrie de pouls" required/>

                {/*<br /><br /><br /><br /><br />*/}
                {/*<input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="Username*" type="text" autoComplete="on" required></input>*/}
                {/*<input onChange={(e)=>handle(e)} id="firstname" value={data.firstname} placeholder="First name" type="text"></input>*/}
                {/*<input onChange={(e)=>handle(e)} id="lastname" value={data.lastname} placeholder="Last name" type="text"></input>*/}
                {/*<input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="Date of Birth" type="date"></input>*/}
                {/*<input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="Password*" required style={{marginBottom:'10px'}}></input>*/}

                {/*<input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="Email*" type="email" required style={{marginTop:'100px'}}></input>*/}
                {/*<input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="Phone" type="tel" pattern="[0-9]{11}"></input>*/}

                {/*<div id='Err'></div>*/}

                {/*<br /><br />*/}
            </form>
            <div id="buttonContainer"><button>Valider</button></div>
        </div>
    );
}

export default PostForm;