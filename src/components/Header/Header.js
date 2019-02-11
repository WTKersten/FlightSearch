import React, { PureComponent } from "react";
import "./Header.scss";

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <h1>Flight search</h1>  
      </header>
    );
  }
}
export default Header;