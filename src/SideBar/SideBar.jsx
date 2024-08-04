import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import PostCarAd from '../PostAd/PostCarAd';
import PostBikeAd from '../PostAd/PostBikeAd';
import PostMobileAd from '../PostAd/PostMobileAd'; // Import other form components
import './SideBar.css'; // Import the CSS file

const SideBar = ({ navigateToHome }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [backButtonClicked, setBackButtonClicked] = useState(false);

    const categories = [
        { name: 'Cars & Bikes', icon: 'bx bxs-car', subcategories: ['Bikes & Scooters', 'Cars', 'Commercial Vehicles', 'Spare Parts - Accessories', 'Other Vehicles'] },
        { name: 'Mobiles & Tablets', icon: 'bx bxs-mobile', subcategories: ['Mobiles', 'Tablets'] },
        { name: 'Electronics & Appliances', icon: 'bx bxs-plug', subcategories: ['Home Appliances', 'Kitchen Appliances', 'Others'] },
        { name: 'Home & Lifestyle', icon: 'bx bxs-sofa', subcategories: ['Furniture', 'Home Decor', 'Gardening', 'Kitchenware'] },
        { name: "If you can't find your category, Click here", icon: 'bx bx-search', subcategories: [] },
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null);
        setBackButtonClicked(false);
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    const handleBackButtonClick = () => {
        if (!backButtonClicked) {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
            setBackButtonClicked(true);
        } else {
            navigateToHome('/');
        }
    };

    const renderForm = () => {
        if (selectedCategory === 'Cars & Bikes') {
            if (selectedSubcategory === 'Cars') {
                return <PostCarAd />;
            } else if (selectedSubcategory === 'Bikes & Scooters') {
                return <PostBikeAd />;
            } else if (selectedSubcategory === 'Commercial Vehicles') {
                return <PostBikeAd />;
            }
        } else if (selectedCategory === 'Mobiles & Tablets') {
            if (selectedSubcategory === 'Mobiles') {
                return <PostMobileAd />;
            }
        } else if (selectedCategory === 'Electronics & Appliances') {
            if (selectedSubcategory === 'Home Appliances') {
                return <PostElectronicsAd />;
            }
        }
        return <div className="form-placeholder"><p>Select the appropriate subcategory to post your ad.</p></div>;
    };

    return (
        <div className="sidebar-container">
            <header className="header">
                <div>AZ</div>
                <button className="back-button" onClick={handleBackButtonClick}>Back</button>
            </header>
            <div className="content">
                <div className="sidebar">
                    <ul className="category-list">
                        {categories.map((category, index) => (
                            <li key={index} className={`category-item ${selectedCategory === category.name ? 'selected' : ''}`} onClick={() => handleCategoryClick(category.name)}>
                                <i className={category.icon}></i> {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main-content">
                    <h1>Post Ad</h1>
                    {selectedCategory && !selectedSubcategory ? (
                        <div className="subcategory-list-container">
                            <h2>Select a subcategory</h2>
                            <ul className="subcategory-list">
                                {categories.find(category => category.name === selectedCategory).subcategories.map((subcategory, index) => (
                                    <li key={index} className="subcategory-item" onClick={() => handleSubcategoryClick(subcategory)}>{subcategory}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        renderForm()
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
