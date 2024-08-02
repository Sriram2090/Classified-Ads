import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import PostCarAd from '../PostAd/PostCarAd';
import PostBikeAd from '../PostAd/PostBikeAd';
import PostMobileAd from '../PostAd/PostMobileAd'; // Import other form components


const SideBar = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

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
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    const renderForm = () => {
        if (selectedCategory === 'Cars & Bikes') {
            if (selectedSubcategory === 'Cars') {
                return <PostCarAd />;
            } else if (selectedSubcategory === 'Bikes & Scooters') {
                return <PostBikeAd />;
            } else if(selectedSubcatgory==='Comercial Vehicles')
            {
                return <PostBikeAd/>
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
        return <div style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9' }}><p>Select the appropriate subcategory to post your ad.</p></div>;
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <div style={{ width: '25%', backgroundColor: '#f7f7f7', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                    {categories.map((category, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', margin: '15px 0', fontSize: '18px', backgroundColor: selectedCategory === category.name ? '#b0e57c' : 'transparent', cursor: 'pointer', padding: '10px', borderRadius: '4px' }} onClick={() => handleCategoryClick(category.name)}>
                            <i className={category.icon} style={{ fontSize: '24px', marginRight: '10px', color: '#000' }}></i> {category.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ width: '75%', padding: '20px' }}>
                <h1>Post Ad</h1>
                {selectedCategory && !selectedSubcategory ? (
                    <div style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9' }}>
                        <h2>Select a subcategory</h2>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {categories.find(category => category.name === selectedCategory).subcategories.map((subcategory, index) => (
                                <li key={index} style={{ margin: '10px 0', fontSize: '16px', color: '#007bff', cursor: 'pointer' }} onClick={() => handleSubcategoryClick(subcategory)}>{subcategory}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    renderForm()
                )}
            </div>
        </div>
    );
};

export default SideBar;
