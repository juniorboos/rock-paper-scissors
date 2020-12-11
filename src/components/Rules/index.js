import React, { useState } from "react";

import "./styles.css";
import closeIcon from "../../images/icon-close.svg";
import rulesImage from "../../images/image-rules.svg";

const Rules = () => {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <button className="btn" onClick={() => setShowModal(!showModal)}>
            RULES
         </button>

         {showModal && (
            <div className="rules-modal">
               <header>
                  <h2 className="title">RULES</h2>
                  <img
                     src={closeIcon}
                     alt=""
                     onClick={() => setShowModal(!showModal)}
                  />
               </header>
               <div className="image-container">
                  <img className="rules-image" src={rulesImage} alt="" />
               </div>
            </div>
         )}
      </>
   );
};

export default Rules;
