import React, { useState } from "react";

import "./styles.css";

import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import triangle from "../../images/bg-triangle.svg";

const Game = () => {
   const [choosing, setChoosing] = useState(true);

   if (choosing) {
      return (
         <div className="game-container">
            <div className="choosing">
               <div className="option">
                  <img className="rock" src={rock} alt="" />
               </div>
               <div className="option">
                  <img className="paper" src={paper} alt="" />
               </div>
               <div className="option">
                  <img className="scissors" src={scissors} alt="" />
               </div>
            </div>
         </div>
      );
   }

   return;
};

export default Game;
