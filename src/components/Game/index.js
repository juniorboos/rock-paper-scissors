import React, { useState } from "react";

import "./styles.css";

import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import triangle from "../../images/bg-triangle.svg";

const Game = () => {
   const [choosing, setChoosing] = useState(true);
   const [userMove, setUserMove] = useState("");
   const [computerMove, setComputerMove] = useState("");

   const options = [
      { name: "rock", image: rock },
      { name: "paper", image: paper },
      { name: "scissors", image: scissors },
   ];

   const play = (userDecision) => {
      setChoosing(false);
      setUserMove(userDecision);
      const computerDecision =
         options[Math.floor(Math.random() * options.length)];
      setComputerMove(computerDecision);

      if (userDecision.name === computerDecision.name) {
         return console.log("Draw!");
      }

      switch (userDecision.name) {
         case "rock":
            if (computerDecision.name === "paper") {
               console.log("You lost!");
            } else {
               console.log("You win!");
            }
            break;

         case "paper":
            if (computerDecision.name === "scissors") {
               console.log("You lost!");
            } else {
               console.log("You win!");
            }
            break;

         case "scissors":
            if (computerDecision.name === "rock") {
               console.log("You lost!");
            } else {
               console.log("You win!");
            }

         default:
            break;
      }
   };

   if (choosing) {
      return (
         <div className="game-container">
            <div className="choosing">
               <img className="bg-triangle" src={triangle} alt="" />
               <div
                  className="select option rock"
                  onClick={() => play(options[0])}
               >
                  <img src={rock} alt="" />
               </div>
               <div
                  className="select option paper"
                  onClick={() => play(options[1])}
               >
                  <img src={paper} alt="" />
               </div>
               <div
                  className="select option scissors"
                  onClick={() => play(options[2])}
               >
                  <img src={scissors} alt="" />
               </div>
            </div>
         </div>
      );
   }

   if (!choosing) {
      return (
         <div className="game-container">
            <div className="picked">
               <h4>YOU PICKED</h4>
               <div className={"option " + userMove.name}>
                  <img src={userMove.image} alt="" />
               </div>
            </div>
            <div className="picked">
               <h4>THE HOUSE PICKED</h4>
               <div className={"option " + computerMove.name}>
                  <img src={computerMove.image} alt="" />
               </div>
            </div>
         </div>
      );
   }
};

export default Game;
