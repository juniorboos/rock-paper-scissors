import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import triangle from "../../images/bg-triangle.svg";

const Game = () => {
   const [choosing, setChoosing] = useState(true);
   const [userMove, setUserMove] = useState("");
   const [computerMove, setComputerMove] = useState("");
   const [resultMessage, setResultMessage] = useState("");

   const dispatch = useDispatch();

   const playAgain = useRef(null);

   const options = [
      { name: "rock", image: rock },
      { name: "paper", image: paper },
      { name: "scissors", image: scissors },
   ];

   function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }

   const win = () => {
      dispatch({ type: "INCREASE_SCORE" });
      setResultMessage("YOU WON!");
   };

   const lose = () => {
      dispatch({ type: "DECREASE_SCORE" });
      setResultMessage("YOU LOST!");
   };

   const play = async (userDecision) => {
      setChoosing(false);
      setUserMove(userDecision);
      const computerDecision =
         options[Math.floor(Math.random() * options.length)];

      for (let i = 0; i < 60; i++) {
         setComputerMove(options[Math.floor(Math.random() * options.length)]);
         await sleep(50);
      }

      if (userDecision.name === computerDecision.name) {
         setResultMessage("DRAW!");
      } else {
         switch (userDecision.name) {
            case "rock":
               if (computerDecision.name === "paper") {
                  lose();
               } else {
                  win();
               }
               break;

            case "paper":
               if (computerDecision.name === "scissors") {
                  lose();
               } else {
                  win();
               }
               break;

            case "scissors":
               if (computerDecision.name === "rock") {
                  lose();
               } else {
                  win();
               }
               break;

            default:
               break;
         }
      }

      setComputerMove(computerDecision);
      playAgain.current.style.width = "100%";
   };

   const restart = () => {
      setChoosing(true);
      setUserMove("");
      setComputerMove("");
      setResultMessage("");
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
            <div className="play-again" ref={playAgain}>
               <h1>{resultMessage}</h1>
               <button onClick={() => restart()}>PLAY AGAIN</button>
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
