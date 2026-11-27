import React, { useState } from "react";
import "./SareeGallery.css";

  const sareeProducts=[
    {
      id: 1,
      name: "Royal Blue & Magenta Saree",
      description: "Royal blue blouse paired with magenta elegance",
      price:"₹2,499",
      image: "/Images/SareeImage1.jpeg"
    },
    {
      id: 2,
      name: "Maroon Gold Border Saree",
      category: "Lehenga",
      description: "Deep maroon drape with golden zari detailing",
      price:"₹2,499",
      image: "/Images/SareeImage2.jpeg"
    },
    {
      id: 3,
      name: "	Emerald Green Floral Saree",
      category: "Lehenga",
      description: "Emerald green silk with rich floral brocade",
      price:"₹2,499",
      image: "/Images/SareeImage3.jpeg"
    },
    {
      id: 4,
      name: "Purple Gold Brocade Saree",
      category: "Salwar Suits",
      description: "Purple silk saree adorned with golden artistry",
      price:"₹2,499",
      image: "/Images/SareeImage4.jpeg"
    },
    {
      id: 5,
      name: "Teal Blue Minimal Saree",
      category: "Punjabi Suits",
      description: "Teal blue drape with sleek modern elegance",
      price:"₹2,499",
      image: "/Images/SareeImage5.jpeg"
    },
    {
      id: 6,
      name: "Midnight Blue Golden Pallu Saree",
      category: "Salwar Suits",
      description: "Navy saree featuring a lustrous golden pallu",
      price:"₹2,499",
      image: "/Images/SareeImage6.jpeg"
    },
    {
      id: 7,
      name: "Peacock Blue Green Saree",
      category: "Salwar Suits",
      description: "Blue green saree with contrasting royal accents",
      price:"₹2,499",
      image: "/Images/SareeImage7.jpeg"
    },
    {
      id: 8,
      name: "	Champagne Scalloped Saree",
      category: "Anarkali Suits",
      description: "Champagne saree with delicate shimmer and scallops.",
      price:"₹2,499",
      image: "/Images/SareeImage8.jpeg"
    },
    {
      id: 9,
      name: "Violet Floral Saree",
      category: "Anarkali Suits",
      description: "Violet saree with floral lavender blouse accents.",
      price:"₹2,499",
      image: "/Images/SareeImage9.jpeg"
    },
    {
      id: 10,
      name: "Pink Gold Banarasi Saree",
      category: "Salwar Suits",
      description: "Vibrant pink silk with intricate golden brocade",
      price:"₹2,499",
      image: "/Images/SareeImage10.jpeg"
    },
    {
      id: 11,
      name: "Ivory Mustard Border Saree",
      category: "Salwar Suits",
      description: "Ivory saree with graceful mustard gold borders",
      price:"₹2,499",
      image: "/Images/SareeImage11.jpeg"
    },
    {
      id: 12,
      name: "	Ruby Red Gold Motif Saree",
      category: "Anarkali Suits",
      description: "Classic red saree with rich gold detailing.",
      price:"₹2,499",
      image: "/Images/SareeImage12.jpeg"
    },
    {
      id: 13,
      name: "Teal Green Gold Butti Saree",
      category: "Anarkali Suits",
      description: "Teal green silk with traditional gold motifs",
      price:"₹2,499",
      image: "/Images/SareeImage13.jpeg"
    },
    {
      id: 14,
      name: "Pastel Green Floral Saree",
      category: "Salwar Suits",
      description: "Pastel green floral drape with scalloped borders",
      price:"₹2,499",
      image: "/Images/SareeImage14.jpeg"
    },
    {
      id: 15,
      name: "Black Scalloped Saree",
      category: "Salwar Suits",
      description: "Black saree featuring elegant scalloped silver embellishments",
      price:"₹2,499",
      image: "/Images/SareeImage15.jpeg"
    },
    {
      id: 16,
      name: "Pink saree",
      category: "Salwar Suits",
      description: "Graceful woman wearing",
      price:"₹2,499",
      image: "/Images/SareeImage16.jpeg"
    }
  ];
  function SareeGallery(){
    return (
    <section className="saree-gallery" id="saree-gallery">

       <div className="saree-heading">
        <span>TRADITIONAL COLLECTION</span>
        <h2>Saree Collection</h2>
        <p>
          Discover beautiful saree that celebrate
          tradition, elegance and timeless fashion.
        </p>
      </div>

      <div className="saree-grid">
        {sareeProducts.map((product) => (
          <div className="saree-card" key={product.id}>

            <div className="saree-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="saree-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>{product.price}</h4>

              <a href={`https://wa.me/918283874680?text=${encodeURIComponent(
                `Hello, I am interested in ${product.name}. Please share more details.`
                 )}`}
                className="saree-btn"
                 target="_blank"
                rel="noopener noreferrer"
              >
               Enquire Now
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default SareeGallery;