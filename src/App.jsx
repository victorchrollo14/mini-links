import React from "react";
import { Header } from "./header";
import { Body } from "./Body";

function App() {
  return (
    <div className="app min-h-screen max-w-md flex flex-col bg-drkBlue   text-white">
      <Header />
      <Body />
    </div>
  );
}

export default App;
