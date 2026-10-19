import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  let removeFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  };

  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('moviesApp');
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />{" "}
              <Movies
                handleAddtoWatchList={handleAddtoWatchList}
                removeFromWatchList={removeFromWatchList}
                watchList={watchList}
              />
            </>
          }
        />

        <Route path="/watchlist" element={<WatchList
              watchList={watchList}
              setWatchList={setWatchList}
              removeFromWatchList={removeFromWatchList}
            />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
