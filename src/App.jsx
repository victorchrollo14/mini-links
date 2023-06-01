import React from "react";
import { Header } from "./header";
import { Body } from "./Body";
import { Footer } from "./footer";

function App() {
  return (
    <div className="app min-h-screen max-w-md flex flex-col bg-drkBlue   text-white px-4">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
