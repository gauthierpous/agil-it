import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Form.css';
import logo from '../../logo.png'

function PostForm() {

    const url="https://fhir.alliance4u.io/"
    const id = localStorage.getItem("id")

    const [data, setData] = useState({
        poids:"",
        taille:"",
        tension:"",
        temperature:"",
        glycemie:"",
        filtration:"",
        densite:"",
        pouls:""
    })


    //Function to send the entered data to the server via the API
    function submit(e){
        e.preventDefault();
        Axios.post(url + id,{
            poids: data.poids,
            taille:data.taille,
            tension:data.tension,
            temperature:data.temperature,
            glycemie:data.glycemie,
            filtration:data.filtration,
            densite:data.densite,
            pouls:data.pouls
        })
            .then(res=>{
                if (res.data) {
                    console.log("Success")
                ReactDOM.render(
                    <p>Données envoyées</p>,
                    document.getElementById("success")
                )
                }
                else {
                    console.log("Error")
                    ReactDOM.render(
                        <p>Données non envoyées</p>,
                        document.getElementById("error")
                    )
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
            <form>
                <input onChange={(e)=>handle(e)} value={data.poids} type="text" id="poids" placeholder="Poids" required/>
                <input onChange={(e)=>handle(e)} value={data.taille} type="text" id="taille" placeholder="Taille" required/>
                <input onChange={(e)=>handle(e)} value={data.tension} type="text" id="tension" placeholder="Tension artérielle" required/>
                <input onChange={(e)=>handle(e)} value={data.temperature} type="text" id="temperature" placeholder="Température" required/>
            </form>

            <form>

                {/*Champs : glycémie,
                estimated GFR
                Imaging results like bone density or fetal measurements
                Clinical Findings* such as abdominal tenderness
                Device measurements such as EKG data or Pulse Oximetry data
                Clinical assessment tools such as APGAR or a Glasgow Coma Score
                Personal characteristics: such as eye-color
                Social history like tobacco use, family support, or cognitive status
                Envoi du formulaire d'analyse (exemple : glucose)*/}

                <input onChange={(e)=>handle(e)} value={data.glycemie} type="text" id="glycemie" placeholder="Glycémie" required/>
                <input onChange={(e)=>handle(e)} value={data.filtration} type="text" id="GFR" placeholder="Taux de filtration glomérulaire" required/>
                <input onChange={(e)=>handle(e)} value={data.densite} type="text" id="imagingResult" placeholder="Densité osseuse" required/>
                <input onChange={(e)=>handle(e)} value={data.pouls} type="text" id="glycemie2" placeholder="Oximétrie de pouls" required/>

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
            <div id="success"></div>
            <div id="error"></div>
            <div id="buttonContainer"><button onClick={(e) => submit(e)}>Valider</button></div>
        </div>
    );
}

export default PostForm;