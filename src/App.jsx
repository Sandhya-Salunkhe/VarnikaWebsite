import React from "react";
import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import sareeImage from "./assets/sareeImage.png";
import kurtiImage from "./assets/kurtiImage.png";

import BlouseDesigns from "./Pages/BlouseDesigns";

import "./App.css";

import EthnicDesigns from "./Components/EthnicGallery";

function Home() {

return (

<div className="website">

{/* Hero Section */}
<section className="hero" id="home">

<div className="hero-content">

<p className="subtitle">
WELCOME TO VARNIKAA
</p>

<h1>
Your Style, <br />
Our <span>Creativity.</span>
</h1>

<p>
Discover beautiful ethnic wear, elegant blouse
designs and perfectly customized outfits.
Designed with love, stitched with perfection.
</p>

<div className="hero-buttons">

<a href="#collections" className="primary-btn">
Fashion & Stitching
</a>

<a href="#services" className="secondary-btn">
Our Services
</a>

</div>

</div>

<div className="hero-image">

<img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900"
            alt="Indian ethnic fashion"
          />

</div>

</section>

{/* Categories Section */}
<section className="categories" id="collections">

<div className="section-heading">

<p>EXPLORE OUR COLLECTION</p>

<h2>Find Your Perfect Style</h2>

</div>

<div className="category-grid">

{/* Blouse Designs - Clickable Card */}

<Link
            to="/blouse-designs"
            className="category-card"
          >

<img
              src="/Images/design1.jpeg"
              alt="Blouse Designs"
            />

<h3>Blouse Designs</h3>

<p>
Beautiful customized blouse stitching.
</p>

</Link>

{/* Ethnic Wear */}

<div className="category-card">
<Link
            to="/ethnic-designs"
            className="category-card"
          ></Link>
<img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600"
              alt="Traditional clothing"
            />

<h3>Ethnic Wear</h3>

<p>
Elegant traditional outfits.
</p>

</div>

{/* Saree Collection */}

<div className="category-card">

<img
              src={sareeImage}
              alt="Sarees"
            />

<h3>Saree Collection</h3>

<p>
Explore beautiful saree styles.
</p>

</div>

{/* Kurti Collection */}

<div className="category-card">

<img
              src={kurtiImage}
              alt="Kurti collection"
            />

<h3>Kurti Collection</h3>

<p>
Stylish outfits for every occasion.
</p>

</div>

</div>

</section>

{/* Services Section */}
<section className="services" id="services">

<div className="section-heading">

<p>WHAT WE OFFER</p>

<h2>Our Tailoring Services</h2>

</div>

<div className="service-grid">

<div className="service-card">

<h3>Custom Stitching</h3>

<p>
Get your dream outfit stitched according to your measurements.
</p>

</div>

<div className="service-card">

<h3>Blouse Stitching</h3>

<p>
Choose your favourite blouse design and get a perfect fit.
</p>

</div>

<div className="service-card">

<h3>Alteration Services</h3>

<p>
Professional alterations for a comfortable and perfect fit.
</p>

</div>

<div className="service-card">

<h3>Ready-made Clothes</h3>

<p>
Shop beautiful and trendy women's clothing.
</p>

</div>

</div>

</section>

{/* About Section */}
<section className="about" id="about">

<div>

<p className="subtitle">
ABOUT VARNIKAA
</p>

<h2>Fashion Made With Love</h2>

<p>
At Varnikaa, we believe every woman deserves
to feel beautiful and confident. We offer
customized tailoring, unique blouse designs
and beautiful ethnic collections.
</p>

<a href="#contact" className="primary-btn">
Get In Touch
</a>

</div>

</section>

{/* Contact Section */}
<section className="contact" id="contact">

<p className="subtitle">
LET'S CONNECT
</p>

<h2>
Ready to Create Your Perfect Outfit?
</h2>

<p>
Contact us today for stitching enquiries and clothing orders.
</p>

<a
          href="https://wa.me/918263874680"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
Chat on WhatsApp
</a>

</section>

{/* Footer */}
<footer>

<h2>Varnikaa</h2>

<p>Elegance in Every Stitch.</p>

<p>© 2026 Varnikaa. All Rights Reserved.</p>

</footer>

</div>

);
}

// ===================================
// MAIN APP WITH ROUTING
// ===================================

function App() {

return (

<BrowserRouter>

{/* Navigation Bar */}
<Navbar />

{/* Page Navigation */}
<Routes>

{/* Homepage */}
<Route
path="/"
element={<Home />}
/>

{/* Blouse Designs Page */}
<Route
path="/blouse-designs"
element={<BlouseDesigns />}
/>

</Routes>

</BrowserRouter>

);

}

export default App;