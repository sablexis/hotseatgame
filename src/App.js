import { render } from '@testing-library/react';
import './App.css';
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

  function handleHideClick(){
      
    setshowRulesCard(false);
    setshowCardCyclerButton(true);
    
  }


  function handleCyclerClick(){
      
    const card = getRandomItem();
    setCardText(card.text);
    
  }


  return (
    <div className="App">
      <header className="App-header">      
      <Cards showRulesCard={showRulesCard} cardText={cardText} />
        {showCardCyclerButton && <CardCyclerButton onClick={handleCyclerClick} />}
        {!showCardCyclerButton && <HideButton onClick={handleHideClick} />}
      </header>
      
    </div>
  );

  
}

export default App;

