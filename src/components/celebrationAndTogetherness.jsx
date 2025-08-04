import React from "react";

export default function CelebrationsAndTogetherness() {
  return (
    <section className="galleryMain" id="Bhawan Day">
      <h1>Celebration and Togetherness</h1>

      <div className="galleryImages">
        <button className="scrollButtons leftBtn">
          <img src="./Images/leftarrow.svg" alt="Scroll Left" />
        </button>
        <div id="scrollDiv">
          <img
            className="galleryImage"
            src="./Images/gallery/1.JPG"
            alt="Gallery Image 1"
          />
          <img
            className="galleryImage"
            src="./Images/gallery/2.JPG"
            alt="Gallery Image 2"
          />
          {/* Add more images here */}
        </div>
        <button className="scrollButtons rightBtn">
          <img src="./Images/rightarrow.svg" alt="Scroll Right" />
        </button>
      </div>
    </section>
  );
}
