import './App.css'
import {AppRouter} from "./routers/AppRouter";

function App() {

  return (
    <div>    
      <header>
      <h1 className='title'>. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁. Películas . ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.</h1>
      </header>
      <AppRouter />

      <footer className="pie_pagina">
        || Alumna: Katia Paola Vargas Flores
        <p>|| Profesor: Zeus Emanuel Gutierrez Cobian</p>
        <p>|| Materia: Dessarrollo de aplicaciones web en la nube y móviles</p>
        <p>|| Ciclo escolar: 2026A       Abril - 2026</p>
        <img src="/img/logo.png" alt="Logo" className="logo" />
      </footer>
    </div>
  ); 
}

export default App;
