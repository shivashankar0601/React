import React from "react";
import "./header.css";
import logo from "./../../assets/logo.jpg";

const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="container-fluid mx-5">
                <a className="navbar-brand mx-5">
                    <div className="logo">
                        <span className="logo-name">LN sols</span>
                        <span className="logo-caption">
                            Empowering future solutions
                        </span>
                    </div>
                    {/* <img src={logo} alt="Logo" style={{ width: "100px" }} /> */}
                </a>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-secondary" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Header;
