import React from 'react';
import Image from 'next/image';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h3>Konecty Store</h3>
      </div>
    </nav>
  );
};

export default Navbar;
