
import React, { useState } from "react";
import "./Enquiry.css";

function Enquiry() {
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    service: "",
    design: "",
    preferredDate: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSuccessMessage(
      "Thank you! Your enquiry has been submitted successfully."
    );

    setFormData({
      customerName: "",
      mobile: "",
      service: "",
      design: "",
      preferredDate: "",
      message: "",
    });
  }

  return (
    <div className="enquiry-page">
      <div className="enquiry-container">
        <h1>Book Your Enquiry</h1>

        <p>
          Tell us what you are looking for.
          We will help you create your perfect outfit.
        </p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            required
          />

          <label>Select Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Choose a service</option>
            <option value="Blouse Stitching">Blouse Stitching</option>
            <option value="Dress Stitching">Dress Stitching</option>
            <option value="Saree Fall and Pico">Saree Fall and Pico</option>
            <option value="Alterations">Alterations</option>
            <option value="Custom Designs">Custom Designs</option>
          </select>

          <label>Select Design</label>
          <select
            name="design"
            value={formData.design}
            onChange={handleChange}
            required
          >
            <option value="">Choose a design</option>
            <option value="Traditional">Traditional</option>
            <option value="Modern">Modern</option>
            <option value="Designer">Designer</option>
            <option value="Bridal">Bridal</option>
            <option value="Custom Design">Custom Design</option>
          </select>

          <label>Preferred Date</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your requirements here..."
            rows="4"
          />

          <button type="submit" className="enquiry-submit-btn">
            Submit Enquiry
          </button>

          {successMessage && (
            <p className="success-message">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Enquiry;
