import React, { useState } from "react";

import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <h1>Our Pricing</h1>
        <Card/>
      </div>
    </main>
  );
}

export default App;
