import logo from './logo.svg';
import './App.css';
import Form from './Pages/Form';
import React, {useEffect, useState} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Form} />
      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
