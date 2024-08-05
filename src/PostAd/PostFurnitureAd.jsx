import React, { useState } from 'react';
import './PostAd.css';

const PostFurnitureAd = () => {
  const [formData, setFormData] = useState({
    category: '',
    material: '',
    color: '',
    dimensions: '',
    condition: '',
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
    console.log('Furniture Ad Form data:', formData);
  };

  return (
    <div className='body2'>
      <main>
        <form onSubmit={handleSubmit}>
          <h2>Post Furniture Ad</h2>
          <div className="form-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Sofa">Sofa</option>
              <option value="Table">Table</option>
              <option value="Chair">Chair</option>
              <option value="Bed">Bed</option>
              <option value="Cabinet">Cabinet</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Material</label>
            <input type="text" name="material" value={formData.material} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input type="text" name="color" value={formData.color} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Dimensions</label>
            <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Condition</label>
            <select name="condition" value={formData.condition} onChange={handleChange} required>
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
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

export default PostFurnitureAd;
