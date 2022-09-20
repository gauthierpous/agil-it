import './App.css';
import Form from './Pages/Form/Form';
import Login from './Pages/Connexion/Connexion';
import React, {useEffect, useState} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import profil from "./Pages/Profil/Profil";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Switch>
          <Route path="/dashboard" exact component={Form} />
          <Route path="/profil" exact component={profil} />
          <Route path="/" exact component={Login} />
      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
