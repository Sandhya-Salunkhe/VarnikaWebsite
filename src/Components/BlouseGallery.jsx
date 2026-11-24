import React, { useState } from "react";
import "./BlouseGallery.css";

function BlouseGallery() {

  const [category, setCategory] = useState("All");
  const [selectedBlouse, setSelectedBlouse] = useState(null);

  const blouseDesigns = [
    {
      id: 1,
      name: "Bridal Maggam Work",
      category: "Bridal",
      description: "Beautiful heavy embroidery blouse for weddings.",
      image: "/Images/design1.jpeg"
    },
    {
      id: 2,
      name: "Traditional Silk Blouse",
      category: "Traditional",
      description: "Elegant traditional blouse for silk sarees.",
      image: "/Images/SilkSaree1.jpeg"
    },
    {
      id: 3,
      name: "Party Wear Blouse",
      category: "Party Wear",
      description: "Stylish blouse for parties and special occasions.",
      image: "/Images/partyWearBlouse.jpeg"
    },
    {
      id: 4,
      name: "Simple Cotton Blouse",
      category: "Simple",
      description: "Comfortable and elegant everyday blouse.",
      image: "/Images/simpleCottonBlouse.jpeg"
    },
    {
      id: 5,
      name: "Designer Wedding Blouse",
      category: "Bridal",
      description: "Designer look for your special wedding day.",
      image: "/Images/designerWeddingBlouse.jpeg"
    },
    {
      id: 6,
      name: "Classic Traditional Blouse",
      category: "Traditional",
      description: "A beautiful design for traditional occasions.",
      image: "/Images/ClassicTraditionalBlouse.jpeg"
    },
    {
      id: 7,
      name: "Wedding Blouse",
      category: "Bridal",
      description: "A beautiful design for traditional occasions.",
      image: "/Images/BridalBlouse.jpeg"
    },
    {
      id: 8,
      name: "Wedding Blouse",
      category: "Bridal",
      description: "Beautiful blouse for weddings.",
      image: "/Images/BridalBlouse2.jpeg"
    },
    {
      id: 9,
      name: "Simple Cotton Blouse",
      category: "Simple",
      description: "Comfortable and elegant everyday blouse.",
      image: "/Images/CottonBlouse1.jpeg"
    },
    {
      id: 10,
      name: "Simple Cotton Blouse",
      category: "Simple",
      description: "Comfortable and elegant everyday blouse.",
      image: "/Images/CottonBlouse2.jpeg"
    },
    {
      id: 11,
      name: "Simple Cotton Blouse",
      category: "Simple",
      description: "Comfortable and elegant everyday blouse.",
      image: "/Images/CottonBlouse3.jpeg"
    },
    {
      id: 13,
      name: "Simple Cotton Blouse",
      category: "Simple",
      description: "Comfortable and elegant everyday blouse.",
      image: "/Images/CottonBlouse4.jpeg"
    }
  ];

  const categories = [
    "All",
    "Bridal",
    "Traditional",
    "Party Wear",
    "Simple"
  ];

  const filteredBlouses =
    category === "All"
      ? blouseDesigns
      : blouseDesigns.filter(
          (blouse) => blouse.category === category
        );

  const whatsappNumber = "918263874680";

  return (
    <section className="blouse-gallery" id="blouse-gallery">

      <div className="gallery-heading">
        <p>OUR EXCLUSIVE COLLECTION</p>
        <h2>Beautiful Blouse Designs</h2>
        <span>
          Choose your favourite design and get it
          customized at VastraKala.
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

      {/* Blouse Cards */}

      <div className="blouse-grid">

        {filteredBlouses.map((blouse) => (

          <div className="blouse-card" key={blouse.id}>

            <img
              src={blouse.image}
              alt={blouse.name}
            />

            <div className="blouse-info">

              <p className="blouse-category">
                {blouse.category}
              </p>

              <h3>{blouse.name}</h3>

              <p>{blouse.description}</p>

              <button
                className="details-btn"
                onClick={() => setSelectedBlouse(blouse)}
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

      {selectedBlouse && (
        <div className="modal-overlay">

          <div className="blouse-modal">

            <button
              className="close-btn"
              onClick={() => setSelectedBlouse(null)}
            >
              ×
            </button>

            <img
              src={selectedBlouse.image}
              alt={selectedBlouse.name}
            />

            <h2>{selectedBlouse.name}</h2>

            <p>{selectedBlouse.description}</p>

            <p>
              Category: {selectedBlouse.category}
            </p>

            <button
              className="details-btn"
              onClick={() => setSelectedBlouse(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default BlouseGallery;
