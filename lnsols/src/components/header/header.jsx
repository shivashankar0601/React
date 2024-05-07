import React from "react";
import "./header.css";
// import logo from "./../../assets/logo.jpg";
import logo from "../../assets/images/logo/logo.svg";

// NavbarBrand component
const NavbarBrand = () => (
    <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" />
    </a>
);

// NavbarToggler component
const NavbarToggler = () => (
    <button className="navbar-toggler">
        <span className="toggler-icon"> </span>
        <span className="toggler-icon"> </span>
        <span className="toggler-icon"> </span>
    </button>
);

// NavMenu component
const NavMenu = () => (
    <ul id="nav" className="navbar-nav mx-auto">
        <li className="nav-item">
            <a className="ud-menu-scroll" href="/">
                Home
            </a>
        </li>
        <li className="nav-item">
            <a className="ud-menu-scroll" href="/about">
                About
            </a>
        </li>
        <li className="nav-item">
            <a className="ud-menu-scroll" href="#pricing">
                Pricing
            </a>
        </li>
        <li className="nav-item">
            <a className="ud-menu-scroll" href="#team">
                Team
            </a>
        </li>
        <li className="nav-item">
            <a className="ud-menu-scroll" href="#contact">
                Contact
            </a>
        </li>
        <li className="nav-item nav-item-has-children">
            <a href="javascript:void(0)"> Pages </a>
            <ul className="ud-submenu">
                <li className="ud-submenu-item">
                    <a href="about.html" className="ud-submenu-link">
                        About Page
                    </a>
                </li>
                <li className="ud-submenu-item">
                    <a href="pricing.html" className="ud-submenu-link">
                        Pricing Page
                    </a>
                </li>
                <li className="ud-submenu-item">
                    <a href="contact.html" className="ud-submenu-link">
                        Contact Page
                    </a>
                </li>
                <li className="ud-submenu-item">
                    <a href="blog.html" className="ud-submenu-link">
                        Blog Grid Page
                    </a>
                </li>
                <li className="ud-submenu-item">
                    <a href="blog-details.html" className="ud-submenu-link">
                        Blog Details Page
                    </a>
                </li>
                <li className="ud-submenu-item">
                    <a href="login.html" className="ud-submenu-link">
                        Sign In Page
                    </a>
                </li>
                <li className="ud-submenu-item">
                    <a href="404.html" className="ud-submenu-link">
                        404 Page
                    </a>
                </li>
            </ul>
        </li>
    </ul>
);

// NavbarButtons component
const NavbarButtons = () => (
    <div className="navbar-btn d-none d-sm-inline-block">
        <a href="login.html" className="ud-main-btn ud-login-btn">
            Sign In
        </a>
        <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
            Sign Up
        </a>
    </div>
);

// Header component
const Header = () => (
    <header className="ud-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <NavbarBrand />
                        <NavbarToggler />
                        <div className="navbar-collapse">
                            <NavMenu />
                        </div>
                        <NavbarButtons />
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
