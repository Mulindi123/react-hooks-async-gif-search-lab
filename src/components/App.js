import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import GiftListContainer from "./GifListContainer";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <Routes>
        <Route path= "/giflistcontainer" element={<GiftListContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
