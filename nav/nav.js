import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './nav.css';

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">رؤية</div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="اكتب اسم كتاب للبحث" />
          <button type="button">بحث</button>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'show-mobile' : ''}`}>
          {/* Use Link component for navigation */}
          <li><Link to="/">الصفحة الرئيسية</Link></li>
          <li><Link to="/products">الكتب</Link></li>
          {/* <li><Link to="/cart">عربة التسوق</Link></li> */}
          {/* <li><Link to="/category">الاقسام</Link></li> */}
          <li><Link to="/profile">الصفحة الشخصية</Link></li> 
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Unicode for the menu icon (three horizontal lines) */}
        </div>
      </nav>
    </div>
  );
};
