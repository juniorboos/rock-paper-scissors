import React from "react";

import { useSelector } from "react-redux";

import "./styles.css";
import logo from "../../images/logo.svg";

const Score = () => {
   const score = useSelector((state) => state.score);
   return (
      <div className="score-container">
         <img src={logo} alt="" className="logo" />
         <div className="score-card">
            <h4>SCORE</h4>
            <h1>{score}</h1>
         </div>
      </div>
   );
};

export default Score;
