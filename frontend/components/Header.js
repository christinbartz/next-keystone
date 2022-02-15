import React from "react";

import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>Magazin</h1>
      <p className={headerStyles.description}>Lorem Ipsum</p>
    </div>
  );
};

export default Header;
