import React from "react";
import BlouseGallery from "../components/BlouseGallery";

function BlouseDesigns() {
  return (
    <div>

      <div className="page-heading">
        <h1>Our Blouse Collection</h1>

        <p>
          Discover beautiful blouse designs
          for every special occasion.
        </p>
      </div>

      <BlouseGallery />

    </div>
  );
}

export default BlouseDesigns;