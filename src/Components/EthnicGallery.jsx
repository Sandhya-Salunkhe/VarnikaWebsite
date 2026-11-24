import React, { useState } from "react";
import "./EthnicDesigns.css";

function EthnicDesigns() {

  const [category, setCategory] = useState("All");
  const [selectedDress, setSelectedDress] = useState(null);

  const EthnitDesigns=[
    {
      id: 1,
      name: "Simple Lehenga",
      category: "Lehenga",
      description: "Beautiful and eligent.",
      image: "/Images/EthnicWear1.jpeg"
    },
    {
      id: 2,
      name: "Elegance Lehenga",
      category: "Lehenga",
      description: "beautiful traditional lehenga, featuring a rich mustard yellow",
      image: "/Images/EthnicWear2.jpeg"
    },
    {
      id: 3,
      name: "Royal Rani Red Lehenga",
      category: "Lehenga",
      description: "A gorgeous lehenga Perfect for weddings, receptions",
      image: "/Images/EthnicWear3.jpeg"
    },
    {
      id: 4,
      name: "Sage Green Elegance Suit",
      category: "Salwar Suits",
      description: "green straight-cut kurti set featuring delicate embroidery",
      image: "/Images/EthnicWear4.jpeg"
    },
    {
      id: 5,
      name: "Rani Red Ethnic Suit",
      category: "Punjabi Suits",
      description: "A stunning red Punjabi suit and a beautiful flowy dupatta",
      image: "/Images/EthnicWear5.jpeg"
    },
    {
      id: 6,
      name: "Royal Purple Floral Suit",
      category: "Salwar Suits",
      description: "floral printed palazzo pants ,printed dupatta with traditional borders.",
      image: "/Images/EthnicWear6.jpeg"
    },
    {
      id: 7,
      name: "Turquoise Elegance Suit",
      category: "Salwar Suits",
      description: "Elegant turquoise suit with printed dupatta and palazzo.",
      image: "/Images/EthnicWear7.jpeg"
    },
    {
      id: 8,
      name: "Sunehri Phool Anarkali",
      category: "Anarkali Suits",
      description: "Floral embroidered mustard suit with matching dupatta.",
      image: "/Images/EthnicWear8.jpeg"
    },
    {
      id: 9,
      name: "Lime Blossom Anarkali",
      category: "Anarkali Suits",
      description: "Elegant floral embroidery with delicate lace detailing.",
      image: "/Images/EthnicWear9.jpeg"
    },
    {
      id: 10,
      name: "Gulabi Garden Suit",
      category: "Salwar Suits",
      description: "Beautiful floral embroidery with matching dupatta.",
      image: "/Images/EthnicWear10.jpeg"
    },
    {
      id: 11,
      name: "Blue Blossom Suit",
      category: "Salwar Suits",
      description: "Sky blue fabric with floral embroidery.",
      image: "/Images/EthnicWear11.jpeg"
    },
    {
      id: 12,
      name: "Emerald Grace Anarkali",
      category: "Anarkali Suits",
      description: "Royal green suit with golden embroidery.",
      image: "/Images/EthnicWear12.jpeg"
    },
    {
      id: 13,
      name: "Rust Royale Anarkali",
      category: "Anarkali Suits",
      description: "Elegant rust outfit with delicate embroidery.",
      image: "/Images/EthnicWear13.jpeg"
    },
    {
      id: 14,
      name: "Cream White Suit",
      category: "Salwar Suits",
      description: "A gorgeous suit",
      image: "/Images/EthnicWear14.jpeg"
    },
    {
      id: 15,
      name: "mint green suit",
      category: "Salwar Suits",
      description: "Printed mint green suit with matching dupatta.",
      image: "/Images/EthnicWear15.jpeg"
    },
    {
      id: 16,
      name: "Lavender Elegance",
      category: "Salwar Suits",
      description: "Graceful woman wearing a lavender traditional outfit.",
      image: "/Images/EthnicWear16.jpeg"
    }
  ];
  const ethnicCategories = [
    "All",
    "Salwar Suits",
    "Anarkali Suits",
    "Lehenga"
  ];
  const filteredEthnic =
    category === "All"
      ? EthnicDesigns
      : EthnicDesigns.filter(
          (dress) => dress.category === category
        );
    
    const whatsappNumber = "918263874680";

    return (
    <section className="ethnic-gallery" id="ethnic-gallery">

      <div className="gallery-heading">
        <p>OUR EXCLUSIVE COLLECTION</p>
        <h2>Beautiful Ethnic Designs</h2>
        <span>
          Choose your favourite ethinic designs and get it
          customized at Varnikaa.
        </span>
      </div>

      {/* Category Filters */}

      <div className="category-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Dress Cards */}

      <div className="ethnic-grid">

        {filteredBlouses.map((ethnic) => (

          <div className="ethnic-card" key={ethnic.id}>

            <img
              src={ethnic.image}
              alt={ethnic.name}
            />

            <div className="ethnic-info">

              <p className="ethnic-category">
                {ethnic.category}
              </p>

              <h3>{ethnic.name}</h3>

              <p>{ethnic.description}</p>

              <button
                className="details-btn"
                onClick={() => setSelectedDress(ethnic)}
              >
                View Details
              </button>

              <a
                className="whatsapp-btn"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hello Varnikaa, I am interested in ${blouse.name} design. Please share stitching details.`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Enquire on WhatsApp
              </a>

            </div>
          </div>

        ))}

      </div>

      {/* Details Popup */}

      {selectedDress && (
        <div className="modal-overlay">

          <div className="ethnic-modal">

            <button
              className="close-btn"
              onClick={() => setSelectedDress(null)}
            >
              ×
            </button>

            <img
              src={selectedDress.image}
              alt={selectedBDress.name}
            />

            <h2>{selectedDress.name}</h2>

            <p>{selectedDress.description}</p>

            <p>
              Category: {selectedDress.category}
            </p>

            <button
              className="details-btn"
              onClick={() => setSelectedDress(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default EthnicDesigns;