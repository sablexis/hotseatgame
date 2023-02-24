import { render } from '@testing-library/react';
import React, {useState} from 'react';
import './App.css';
import Cards from './Cards';
import RulesCard from './RulesCard';



function CardHolder() {

  const [show, setShow] = useState(true)

  return (
    <div className="card-holder">
      {
      show?<RulesCard />: null
      }
      < Cards />
      <div className = "card-holder-button">
        <button id='new card' onClick={() =>setShow(false)}>
        <i class="fa-solid fa-circle-plus"></i>
        </button> 
      </div>
  </div>
  );
    
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <CardHolder />
      </header>



    </div>
  );
}

export default App;

