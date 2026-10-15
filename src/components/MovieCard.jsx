function MovieCard({poster_path, movieTitle, handleAddtoWatchList, movieObj,watchList,removeFromWatchList}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="relative h-[40vh] w-[150px] bg-center bg-cover rounded-xl
                 hover:scale-110 duration-300 hover:cursor-pointer
                 flex flex-col justify-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
        className="absolute top-0.25 right-0.25 z-10 m-4 flex h-7 w-7 items-center justify-center rounded-lg bg-gray-900/60 z-10"
        onClick={() => removeFromWatchList(movieObj)}
      >
        &#10060;
      </div>
      ) : (
        <div
          className="absolute top-0 right-0 z-10 m-4 flex h-7 w-7 items-center justify-center rounded-lg bg-gray-900/60"
          onClick={() => handleAddtoWatchList(movieObj)}
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl">
        {movieTitle}
      </div>
    </div>
  );
}

export default MovieCard;
