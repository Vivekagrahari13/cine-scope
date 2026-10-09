import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Movies />} />

        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
