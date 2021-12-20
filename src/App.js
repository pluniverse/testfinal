import ReactGA from 'react-ga';
import Home from "Page/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FounderBadge from "./components/BagdePage/foundarbadge";

const App = () => {
  console.warn = () => {};
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/foundersbadge" element={<FounderBadge />}></Route>
      </Routes>
    </>
  );
};

export default App;
