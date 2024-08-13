import React, { useState } from "react";
import "./PostAd.css";
import axios from "axios";

const PostMobileAd = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    condition: "",
    storage: "",
    color: "",
    adTitle: "",
    description: "",
    price: "",
    category: "",
    photos: "", // Make sure it's a string for the text input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/ads", formData);
    console.log("Mobile Ad Form data:", formData);  
  };

  return (
    <div className="body23">
      <main>
        <form className="form23" onSubmit={handleSubmit}>
          <h2>Post Ad</h2>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Cars">Cars</option>
              <option value="Bikes">Bikes</option>
              <option value="Furniture">Furniture</option>
              <option value="Books">Books</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
            >
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>
          <div className="form-group">
            <label>Storage</label>
            <input
              type="text"
              name="storage"
              value={formData.storage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ad Title</label>
            <input
              type="text"
              name="adTitle"
              value={formData.adTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Photo URLs</label>
            <input
              type="text"
              name="photos"
              value={formData.photos}
              onChange={handleChange}
              placeholder="Enter photo URLs, separated by commas"
            />
          </div>
          <button type="submit">Post Ad</button>
        </form>
      </main>
    </div>
  );
};

export default PostMobileAd;
