import React from "react";

import "./styles.css";
import logo from "../../images/logo.svg";

const Score = () => {
   return (
      <div className="score-container">
         <img src={logo} alt="" className="logo" />
         <div className="score-card">
            <h4>SCORE</h4>
            <h1>12</h1>
         </div>
      </div>
   );
};

export default Score;
