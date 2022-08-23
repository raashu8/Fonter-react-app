import React from "react";
// import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <div>
      {" "}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              href="%PUBLIC_URL%/logg.png"
              alt=""
              className="img-new" 
              width="30"
              height="24"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" s href="/home">
                  {props.title}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.subtit}
                </a>
              </li>
            </ul>
          </div>
            <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" aria-checked="false" onClick={props.toglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode=== 'light' ? 'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">{props.new12}</label>
</div>
        </div>
      </nav>

    </div>
  );
}

// // PROP TYPES SETTING 

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtit: PropTypes.number,
// };

// // PROP DEFAULT TYPES SETTING 

// Navbar.defaultProps = {
//   title: 'SOOME',
//   subtit: 323232,
// };
