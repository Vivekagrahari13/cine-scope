import React, { useState } from "react";

function WatchList({ watchList, setWatchList }) {
  const [search, setSearch] = useState("");
  let handleSearch = (event) => {
    setSearch(event.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4">
          {" "}
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-600 rounded-xl text-white font-bold">
          {" "}
          Thriller
        </div>
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[15rem] bg-gray-200 outline-none px-3"
        />
      </div>

      <div className="overflow-hidden rounded-r-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center items-center">
                  <div onClick={sortIncreasing} className="p-2 cursor-pointer">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </div>
                  <div>Ratings</div>
                  <div onClick={sortDecreasing} className="p-2 cursor-pointer">
                    <i className="fa-solid fa-arrow-down-long"></i>
                  </div>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchList
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 font-medium" key={movieObj.id}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-4">{movieObj.original_title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>Action</td>
                    <td className="text-red-500">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
