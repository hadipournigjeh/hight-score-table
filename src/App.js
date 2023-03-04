import React from "react";
import "./App.css";
import Table from "./Table";
import allCountryScores from "./scores";

function App() {
  return (
    <div className="App">
      <Table countries={allCountryScores} />
    </div>
  );
}

export default App;
