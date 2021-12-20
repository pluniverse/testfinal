import React from "react";
import "./Navbar.css";
import navbarLogo from "assets/images/navbar-logo.png";
import hamburger from "assets/images/hamburger.png";
import cross from "assets/images/cross.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { showConnectBtn , connect, isConnected } = props
  const [show, setShow] = React.useState(false);
  const sidebarRef = React.useRef();

  React.useEffect(() => {
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="navbar" ref={sidebarRef}>
      <Link to="/" className="navbar-logo">
        <img src={navbarLogo} alt="..." />
      </Link>
      <div className="hamburger">
        <img src={hamburger} onClick={() => setShow(!show)} alt="..." />
      </div>
      <div className={`navbar-wrapper ${show ? "show" : ""} `}>
        <img
          src={cross}
          alt="..."
          className="cross-icon"
          onClick={() => setShow(false)}
        />
        <div className="navbar-links">
          <Link
            to="/"
            className="navbar-link fs-20px uppercase white weight-8 lh-1"
          >
            Home
          </Link>
          <Link
            to="/foundersbadge"
            className="navbar-link fs-20px uppercase white weight-8 lh-1"
          >
            Founders Badge
          </Link>
          <a
            href="https://whitepaper.pluniverse.io/pluniverse-whitepaper/"
            target="_blank"
            className="navbar-link fs-20px uppercase white weight-8 lh-1"
            rel="noreferrer"
          >
            whitepaper
          </a>
        </div>

        <div className="navbar-right">
          {showConnectBtn === "true" ? (
            <button onClick={() => connect()} className="navbar-btn fs-16px white weight-7 lh-1 pointer">
              { isConnected ? "Connected" : "Connect Wallet"}
            </button>
          ) : null}
        </div>

      </div>
    </div>
  );
}

export default Navbar;
