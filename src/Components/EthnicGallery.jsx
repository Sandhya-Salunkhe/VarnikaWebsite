import React, { useState } from "react";
import "./EthnicGallery.css";

  const ethnicProducts=[
    {
      id: 1,
      name: "Simple Lehenga",
      description: "Beautiful and eligent.",
      price:"₹2,499",
      image: "/Images/EthnicWear1.jpeg"
    },
    {
      id: 2,
      name: "Elegance Lehenga",
      category: "Lehenga",
      description: "beautiful traditional lehenga, featuring a rich mustard yellow",
      price:"₹2,499",
      image: "/Images/EthnicWear2.jpeg"
    },
    {
      id: 3,
      name: "Royal Rani Red Lehenga",
      category: "Lehenga",
      description: "A gorgeous lehenga Perfect for weddings, receptions",
      price:"₹2,499",
      image: "/Images/EthnicWear3.jpeg"
    },
    {
      id: 4,
      name: "Sage Green Elegance Suit",
      category: "Salwar Suits",
      description: "green straight-cut kurti set featuring delicate embroidery",
      price:"₹2,499",
      image: "/Images/EthnicWear4.jpeg"
    },
    {
      id: 5,
      name: "Rani Red Ethnic Suit",
      category: "Punjabi Suits",
      description: "A stunning red Punjabi suit and a beautiful flowy dupatta",
      price:"₹2,499",
      image: "/Images/EthnicWear5.jpeg"
    },
    {
      id: 6,
      name: "Royal Purple Floral Suit",
      category: "Salwar Suits",
      description: "floral printed palazzo pants ,printed dupatta with traditional borders.",
      price:"₹2,499",
      image: "/Images/EthnicWear6.jpeg"
    },
    {
      id: 7,
      name: "Turquoise Elegance Suit",
      category: "Salwar Suits",
      description: "Elegant turquoise suit with printed dupatta and palazzo.",
      price:"₹2,499",
      image: "/Images/EthnicWear7.jpeg"
    },
    {
      id: 8,
      name: "Sunehri Phool Anarkali",
      category: "Anarkali Suits",
      description: "Floral embroidered mustard suit with matching dupatta.",
      price:"₹2,499",
      image: "/Images/EthnicWear8.jpeg"
    },
    {
      id: 9,
      name: "Lime Blossom Anarkali",
      category: "Anarkali Suits",
      description: "Elegant floral embroidery with delicate lace detailing.",
      price:"₹2,499",
      image: "/Images/EthnicWear9.jpeg"
    },
    {
      id: 10,
      name: "Gulabi Garden Suit",
      category: "Salwar Suits",
      description: "Beautiful floral embroidery with matching dupatta.",
      price:"₹2,499",
      image: "/Images/EthnicWear10.jpeg"
    },
    {
      id: 11,
      name: "Blue Blossom Suit",
      category: "Salwar Suits",
      description: "Sky blue fabric with floral embroidery.",
      price:"₹2,499",
      image: "/Images/EthnicWear11.jpeg"
    },
    {
      id: 12,
      name: "Emerald Grace Anarkali",
      category: "Anarkali Suits",
      description: "Royal green suit with golden embroidery.",
      price:"₹2,499",
      image: "/Images/EthnicWear12.jpeg"
    },
    {
      id: 13,
      name: "Rust Royale Anarkali",
      category: "Anarkali Suits",
      description: "Elegant rust outfit with delicate embroidery.",
      price:"₹2,499",
      image: "/Images/EthnicWear13.jpeg"
    },
    {
      id: 14,
      name: "Cream White Suit",
      category: "Salwar Suits",
      description: "A gorgeous suit",
      price:"₹2,499",
      image: "/Images/EthnicWear14.jpeg"
    },
    {
      id: 15,
      name: "mint green suit",
      category: "Salwar Suits",
      description: "Printed mint green suit with matching dupatta.",
      price:"₹2,499",
      image: "/Images/EthnicWear15.jpeg"
    },
    {
      id: 16,
      name: "Lavender Elegance",
      category: "Salwar Suits",
      description: "Graceful woman wearing a lavender traditional outfit.",
      price:"₹2,499",
      image: "/Images/EthnicWear16.jpeg"
    }
  ];
  function EthnicGallery(){
    return (
    <section className="ethnic-gallery" id="ethnic-gallery">

       <div className="ethnic-heading">
        <span>TRADITIONAL COLLECTION</span>
        <h2>Ethnic Wear Collection</h2>
        <p>
          Discover beautiful ethnic styles that celebrate
          tradition, elegance and timeless fashion.
        </p>
      </div>

      <div className="ethnic-grid">
        {ethnicProducts.map((product) => (
          <div className="ethnic-card" key={product.id}>

            <div className="ethnic-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="ethnic-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>{product.price}</h4>

              <a href={`https://wa.me/918283874680?text=${encodeURIComponent(
                `Hello, I am interested in ${product.name}. Please share more details.`
                 )}`}
                className="ethnic-btn"
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

export default EthnicGallery;