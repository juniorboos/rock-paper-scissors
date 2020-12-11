import "./App.css";

import Score from "./components/Score";
import Game from "./components/Game";
import Rules from "./components/Rules";

function App() {
   return (
      <div className="main-container">
         <Score />
         <Game />
         <Rules />
      </div>
   );
}

export default App;
