// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import PostAd from './PostAd';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/post-ad" element={<PostAd />} />
      </Routes>
    </Router>
  );
};

export default App;
