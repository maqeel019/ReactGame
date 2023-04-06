import { useState, React, useEffect } from "react";
import "./App.css";
import "./Components/styles.css";
import Tenzie from "./Components/Tenzie";
import Confetti from "react-confetti";
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

 useEffect(() => {
    const firstValue = dice[0].value
    const allHeld = dice.every(die => die.isHeld)
    const allSameNumber = dice.every(die => die.value === firstValue)
    if(allHeld && allSameNumber){
      setTenzies(true)
    }
  }, [dice])

  // function randomDieValue() {
  //   return Math.floor(Math.random() * 6) + 1;
  // }


  
  function generateNewDice(){
    return {
      id:Math.floor(Math.random() * 5000) + 1,
      value :Math.floor(Math.random() * 6) + 1 , 
      isHeld:false
      }
  }

  function allNewDice() {
    const object = [];
    for (var i = 0; i < 8; i++) {
      object.push(generateNewDice());
      }
      return object;
  }
  
  function holdDice(id){
    setDice(oldDice => oldDice.map(die=>{
     return die.id === id ? 
     {...die , isHeld : !die.isHeld }: die   
    }))
 }


  function rollDice() {
    if(!tenzies){
      setDice(oldDice=>oldDice.map(die =>{
        return die.isHeld ? 
        die : 
        generateNewDice()
      }));  
    }
    else{
      setTenzies(false)
      setDice(allNewDice())
    }
   
  }


  const diceElements = dice.map((die) => <Tenzie
  //  key = {die.id} 
   value={die.value} 
   isHeld = {die.isHeld}
   hold = {()=>holdDice(die.id)}
   />);
  return (
    <div className="App">
      <div className="main">
        {tenzies && <Confetti /> }
        <div className="scoreboard-container">
          <div className="scoreboard-column">
            <h1>SixZies</h1>
            <p>
              Roll until all <span>DICES</span> are <span>SAME</span> .{" "}
              <span>CLICK</span> each DIC to <span>FREEZE</span> it current{" "}
              <span>VALUE</span> between rolls.
            </p>
          </div>
        </div>
        <div className="tenzies-container">{diceElements}</div>
        <button className="rollBtn" onClick={rollDice}>
          {tenzies ?"New Game" : "Roll"}
        </button>
      <footer id="footer">© 2023 AQEEL(AK019). All rights reserved.</footer>
      </div>
    </div>
  );
}

export default App;
