import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <span>Quotie</span>
          <img src="images/quotie.png" className="logo" alt="" />
        </h1>
      </header>
    )
  }
};

export default Header;