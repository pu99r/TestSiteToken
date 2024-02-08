import "./App.css";
import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import MainInfo from "../Components/MainInfo/MainInfo";

function App(): JSX.Element {
  return (
    <div>
      <div className="Head">
        <NavBar></NavBar>
      </div>
      <div className="body">
        <MainInfo />
      </div>
    </div>
  );
}

export default App;
