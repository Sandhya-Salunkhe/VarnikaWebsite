import React, { useState } from "react";
import "./KurtiGallery.css";

  const kurtiProducts=[
    {
      id: 1,
      name: "Simple Lehenga",
      description: "Beautiful and eligent.",
      price:"₹2,499",
      image: "/Images/kurti1.jpeg"
    },
    {
      id: 2,
      name: "Elegance Lehenga",
      category: "Lehenga",
      description: "beautiful traditional lehenga, featuring a rich mustard yellow",
      price:"₹2,499",
      image: "/Images/kurti2.jpeg"
    },
    {
      id: 3,
      name: "Royal Rani Red Lehenga",
      category: "Lehenga",
      description: "A gorgeous lehenga Perfect for weddings, receptions",
      price:"₹2,499",
      image: "/Images/kurti3.jpeg"
    },
    {
      id: 4,
      name: "Sage Green Elegance Suit",
      category: "Salwar Suits",
      description: "green straight-cut kurti set featuring delicate embroidery",
      price:"₹2,499",
      image: "/Images/kurti4.jpeg"
    },
    {
      id: 5,
      name: "Rani Red Ethnic Suit",
      category: "Punjabi Suits",
      description: "A stunning red Punjabi suit and a beautiful flowy dupatta",
      price:"₹2,499",
      image: "/Images/kurti5.jpeg"
    },
    {
      id: 6,
      name: "Royal Purple Floral Suit",
      category: "Salwar Suits",
      description: "floral printed palazzo pants ,printed dupatta with traditional borders.",
      price:"₹2,499",
      image: "/Images/kurti6.jpeg"
    },
    {
      id: 7,
      name: "Turquoise Elegance Suit",
      category: "Salwar Suits",
      description: "Elegant turquoise suit with printed dupatta and palazzo.",
      price:"₹2,499",
      image: "/Images/kurti7.jpeg"
    },
    {
      id: 8,
      name: "Sunehri Phool Anarkali",
      category: "Anarkali Suits",
      description: "Floral embroidered mustard suit with matching dupatta.",
      price:"₹2,499",
      image: "/Images/kurti8.jpeg"
    },
    {
      id: 9,
      name: "Lime Blossom Anarkali",
      category: "Anarkali Suits",
      description: "Elegant floral embroidery with delicate lace detailing.",
      price:"₹2,499",
      image: "/Images/kurti9.jpeg"
    },
    {
      id: 10,
      name: "Gulabi Garden Suit",
      category: "Salwar Suits",
      description: "Beautiful floral embroidery with matching dupatta.",
      price:"₹2,499",
      image: "/Images/kurti10.jpeg"
    },
    {
      id: 11,
      name: "Blue Blossom Suit",
      category: "Salwar Suits",
      description: "Sky blue fabric with floral embroidery.",
      price:"₹2,499",
      image: "/Images/kurti11.jpeg"
    },
    {
      id: 12,
      name: "Emerald Grace Anarkali",
      category: "Anarkali Suits",
      description: "Royal green suit with golden embroidery.",
      price:"₹2,499",
      image: "/Images/kurti12.jpeg"
    },
    {
      id: 13,
      name: "Rust Royale Anarkali",
      category: "Anarkali Suits",
      description: "Elegant rust outfit with delicate embroidery.",
      price:"₹2,499",
      image: "/Images/kurti13.jpeg"
    },
    {
      id: 14,
      name: "Cream White Suit",
      category: "Salwar Suits",
      description: "A gorgeous suit",
      price:"₹2,499",
      image: "/Images/kurti14.jpeg"
    },
    {
      id: 15,
      name: "mint green suit",
      category: "Salwar Suits",
      description: "Printed mint green suit with matching dupatta.",
      price:"₹2,499",
      image: "/Images/kurti15.jpeg"
    },
    {
      id: 16,
      name: "Lavender Elegance",
      category: "Salwar Suits",
      description: "Graceful woman wearing a lavender traditional outfit.",
      price:"₹2,499",
      image: "/Images/kurti16.jpeg"
    },
    {
      id: 17,
      name: "Lavender Elegance",
      category: "Salwar Suits",
      description: "Graceful woman wearing a lavender traditional outfit.",
      price:"₹2,499",
      image: "/Images/kurti17.jpeg"
    },
    {
      id: 18,
      name: "Lavender Elegance",
      category: "Salwar Suits",
      description: "Graceful woman wearing a lavender traditional outfit.",
      price:"₹2,499",
      image: "/Images/kurti18.jpeg"
    }
  ];
  function KurtiGallery(){
    return (
    <section className="kurti-gallery" id="kurti-gallery">

       <div className="kurti-heading">
        <span>TRADITIONAL COLLECTION</span>
        <h2>Kurti Collection</h2>
        <p>
          Discover beautiful Kurti styles that celebrate
          tradition, elegance and timeless fashion.
        </p>
      </div>

      <div className="kurti-grid">
        {kurtiProducts.map((product) => (
          <div className="kurti-card" key={product.id}>

            <div className="kurti-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="kurti-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>{product.price}</h4>

              <a href={`https://wa.me/918283874680?text=${encodeURIComponent(
                `Hello, I am interested in ${product.name}. Please share more details.`
                 )}`}
                className="kurti-btn"
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

export default KurtiGallery;