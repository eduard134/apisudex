// pages/index.js

import React from 'react';

const HomePage = () => {
  return (
    <div className="relative flex items-center mt-1 ">
      <label className="language-switcher">
      <input type="checkbox"/>
              <span className="slider round"></span>
              <span className="select-fr">FR</span>
              <span className="select-en">EN</span>
      </label>
    </div>
  );
};

export default HomePage;
