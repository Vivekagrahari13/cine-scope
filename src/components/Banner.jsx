import React from "react";

function Banner() {
  return (
    <div
      className="h-80 md:h-125 bg-cover bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url(https://cdn.district.in/movies-assets/images/cinema/_Horizontal_Poster2-cedc0d80-961a-11f1-8483-eb84b060bac3.jpg?im=Resize,width=720)`,
      }}
    >
      <div className="w-full bg-black-900/60 text-center text-xl text-white py-2">
        Mirzapur: The Movie
      </div>
    </div>
  );
}

export default Banner;
