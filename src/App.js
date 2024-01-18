import { render } from '@testing-library/react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from '../Login/Login';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Cards from './Cards';
import React, {useState} from 'react';
import HideButton from './HideButton';
import CardCyclerButton from './CardCyclerButton';
import {  getRandomItem } from './CardData';
import RulesCard from './RulesCard';




function App() {

  const [showRulesCard, setshowRulesCard] = useState(true)
  const [showCardCyclerButton, setshowCardCyclerButton] = useState(false)
  const [cardText, setCardText] = useState('')
  const [token, setToken] = useState();

  function handleHideClick(){
      
    setshowRulesCard(false);
    setshowCardCyclerButton(true);
    
  }


  function handleCyclerClick(){
      
    const card = getRandomItem();
    setCardText(card.text);
    
  }

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className = "wrapper">
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/preferences" Component={Preferences} />
      </Routes>
      </BrowserRouter>
      <div className="App">
            <header className="App-header">      
            <Cards showRulesCard={showRulesCard} cardText={cardText} />
              {showCardCyclerButton && <CardCyclerButton onClick={handleCyclerClick} />}
              {!showCardCyclerButton && <HideButton onClick={handleHideClick} />}
            </header>
            
      </div>
      
      
    </div>
  );

  
}

export default App;

