import React from "react";
import "./styles.css";

function TenziesGame(props) {
  const styles = {
      backgroundColor :props.isHeld ? "#527070" : "white",
      color :props.isHeld ? "white" : "#527070"
  }
  return (
    
    <div>
      <div className="tenzi-row first">
        <div className="tenzi-cell" style={styles} onClick={props.hold}>{props.value }</div>
      </div>
    </div>
  );
}

export default TenziesGame;
