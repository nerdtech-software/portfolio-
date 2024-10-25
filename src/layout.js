// components/Layout.js
import React from 'react';
import Footer from './components/Footer';
import HomeNav from './components/HomeNav';

const Layout = ({ children }) => {
  return (
    <div>
      <HomeNav/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
