import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <span className="header__inner">
        <div className="logo">
          <a href="/">Lara Bärtschi</a>
        </div>
        <div className="header__navigation">
          <a href="/production">Broadcast Production</a>
        </div>
      </span>
    </header>
  );
}

export default Header;