import { useState, React } from "react";
import "./App.css";
import "./Components/styles.css";
import Tenzie from "./Components/Tenzie";
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  // React.useEffect(() => {
  //   const firstValue = dice[0].value
  //   const allHeld = dice.every(die => die.held)
  //   const allSameNumber = dice.every(die=> die.value)
  //   if(allHeld && allSameNumber){
  //     setTenzies(true)
  //   }
  // }, [dice])

  // function randomDieValue() {
  //   return Math.floor(Math.random() * 6) + 1;
  // }

  function allNewDice() {
    const object = [];
    for (var i = 0; i < 6; i++) {
      object.push(
        {
        // id:generateUniqueRandomNumber(),
        value :Math.floor(Math.random() * 6) + 1 , 
        isHeld:true
        });
      }
      return object;
  }

  function rollDice() {
    setDice(allNewDice);
  }


  const diceElements = dice.map((die) => <Tenzie
  //  key = {die.id} 
   value={die.value} 
   isHeld = {die.isHeld}
   />);
  return (
    <div className="App">
      <div className="main">
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
          Roll
        </button>
      </div>
    </div>
  );
}

export default App;
