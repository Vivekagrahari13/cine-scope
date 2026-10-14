function MovieCard({poster_path, movieTitle}) {
  return (
    <div
      className="h-[40vh] w-[150px] bg-center bg-cover rounded-xl
                 hover:scale-110 duration-300 hover:cursor-pointer
                 flex flex-col justify-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
        <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl'>
           {movieTitle} 
        </div>


    </div>
  );
}

export default MovieCard;
