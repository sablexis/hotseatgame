import GameCards from "./GameCards";
import RulesCard from './RulesCard';
import React from 'react';

//import {cardCycler} from './GameCards';


export default function Cards({showRulesCard, cardText, rulesText}) {

  return (
    <div className = "card-holder" >
        {showRulesCard ? <RulesCard /> : <GameCards cardText = {cardText} />}
    </div>
  );
  
          
 }

