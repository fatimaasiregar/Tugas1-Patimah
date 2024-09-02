// src/App.jsx
import React from 'react';
import Profil from './profil.jsx';

function App() {
  return (
    <div className="App">
      <h1>Pahlawan Indonesia</h1>
      <div className="profil-container">
        <Profil imgSrc="src/assets/Presiden_Sukarno.jpg" name="Ir. Soekarno" />
        <Profil imgSrc="src/assets/moh hatta (2).jpeg" name="Mohammad Hatta" />
        <Profil imgSrc="src/assets/Sudirman.jpg" name="Jenderal Soedirman" />
      </div>
    </div>
  );
}

export default App;
