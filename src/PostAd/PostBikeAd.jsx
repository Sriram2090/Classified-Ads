import React, { useState } from 'react';
import './PostAd.css';

const PostBikeAd = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    type: '', 
    kmDriven: '',
    noOfOwners: '',
    color: '',
    registrationNumber: '',
    adTitle: '',
    description: '',
    price: '',
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bike Ad Form data:', formData);
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <h2>Post Your Bike Ad</h2>
          <div className="form-group">
            <label>Brand</label>
            <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Model</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input type="number" name="year" value={formData.year} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>KM Driven</label>
            <input type="number" name="kmDriven" value={formData.kmDriven} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>No. of Owners</label>
            <select name="noOfOwners" value={formData.noOfOwners} onChange={handleChange} required>
              <option value="">Select Number of Owners</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="4+">4+</option>
            </select>
          </div>
          <div className="form-group">
            <label>Color</label>
            <input type="text" name="color" value={formData.color} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Registration Number</label>
            <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Ad Title</label>
            <input type="text" name="adTitle" value={formData.adTitle} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="form-group file-input">
            <label>Upload Photos</label>
            <input type="file" name="photos" onChange={handleFileChange} multiple />
          </div>
          <button type="submit">Post Ad</button>
        </form>
      </main>
    </div>
  );
};

export default PostBikeAd;
