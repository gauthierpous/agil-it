import logo from './logo.svg';
import './App.css';
import Form from './Pages/Form/Form';
import Login from './Pages/Connexion/Connexion';
import React, {useEffect, useState} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Switch>
          <Route path="/dashboard" exact component={Form} />
          <Route path="/" exact component={Login} />
      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
