import React from "react";
import Education from "./components/Education";
import Header from "./components/Header"
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/PracticalExperience";
import GenerateResume from "./components/GenerateResume";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="parent-container">
          <GenerateResume />  
          <GeneralInfo />
          <Education />   
          <PracticalExperience />
      </div>
    </div>
  )
}


export default App;
