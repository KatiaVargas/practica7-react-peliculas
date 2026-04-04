import {useState} from "react"
import './App.css'
import MisRutas from "./routers/routes"

function App() {
  
  return (
    <div>
      <header>
        <h1 className="title">Películas</h1>
      </header>
    
      <MisRutas/>
    </div>
  );
}

export default App;