import { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
// import logo from "./../../assets/logo.jpg";
// import logo from "../../assets/images/logo/logo.svg";

// Header component
class Header extends Component {
    componentDidMount() {
        let navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");

        document.querySelectorAll(".ln-menu-scroll").forEach((e) =>
            e.addEventListener("click", () => {
                navbarToggler.classList.remove("active");
                navbarCollapse.classList.remove("show");
            })
        );
        navbarToggler.addEventListener("click", function () {
            navbarToggler.classList.toggle("active");
            navbarCollapse.classList.toggle("show");
        });

        const submenuButton = document.querySelectorAll(
            ".nav-item-has-children"
        );
        submenuButton.forEach((elem) => {
            elem.querySelector("a").addEventListener("click", () => {
                elem.querySelector(".ln-submenu").classList.toggle("show");
            });
        });
    }

    // NavbarBrand component
    NavbarBrand = () => (
        <Link className="navbar-brand brand-logo" to="/">
            {/* <img src={logo} alt="Logo" /> */}
            LN Sols
            <div className="brand-logo-tag-name">
                Empowering future solutions
            </div>
        </Link>
    );

    // NavbarToggler component
    NavbarToggler = () => (
        <button className="navbar-toggler">
            <span className="toggler-icon"> </span>
            <span className="toggler-icon"> </span>
            <span className="toggler-icon"> </span>
        </button>
    );

    // NavMenu component
    NavMenu = () => (
        <div className="w-100">
            <ul id="nav" className=" trapezoid navbar-nav float-end">
                <li className="nav-item mx-3">
                    <a className="ln-menu-scroll" href="#home">
                        Home
                    </a>
                </li>
                <li className="nav-item mx-3">
                    <a className="ln-menu-scroll" href="#services">
                        Services
                    </a>
                </li>
                <li className="nav-item mx-3">
                    <a className="ln-menu-scroll" href="#about">
                        About
                    </a>
                </li>
                {/* <li className="nav-item">
            <a className="ln-menu-scroll" href="#team">
                Team
            </a>
        </li> */}
                <li className="nav-item mx-3">
                    <a className="ln-menu-scroll" href="#contact">
                        Contact
                    </a>
                </li>
                {/* <li className="nav-item nav-item-has-children">
            <a href="javascript:void(0)"> Pages </a>
            <ul className="ln-submenu">
                <li className="ln-submenu-item">
                    <a href="about.html" className="ln-submenu-link">
                        About Page
                    </a>
                </li>
                <li className="ln-submenu-item">
                    <a href="pricing.html" className="ln-submenu-link">
                        Pricing Page
                    </a>
                </li>
                <li className="ln-submenu-item">
                    <a href="contact.html" className="ln-submenu-link">
                        Contact Page
                    </a>
                </li>
                <li className="ln-submenu-item">
                    <a href="blog.html" className="ln-submenu-link">
                        Blog Grid Page
                    </a>
                </li>
                <li className="ln-submenu-item">
                    <a href="blog-details.html" className="ln-submenu-link">
                        Blog Details Page
                    </a>
                </li>
                <li className="ln-submenu-item">
                    <a href="login.html" className="ln-submenu-link">
                        Sign In Page
                    </a>
                </li>
                <li className="ln-submenu-item">
                    <a href="404.html" className="ln-submenu-link">
                        404 Page
                    </a>
                </li>
            </ul>
        </li> */}
            </ul>
        </div>
    );

    // NavbarButtons component
    // NavbarButtons = () => (
    //     <div className="navbar-btn d-none d-sm-inline-block">
    //         <a href="login.html" className="ln-main-btn ln-login-btn">
    //             Sign In
    //         </a>
    //         <a className="ln-main-btn ln-white-btn" href="javascript:void(0)">
    //             Sign Up
    //         </a>
    //     </div>
    // );

    render() {
        return (
            <header className="ln-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                {this.NavbarBrand()}
                                {this.NavbarToggler()}
                                <div className="navbar-collapse">
                                    {this.NavMenu()}
                                </div>
                                {/* {NavbarButtons()} */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
