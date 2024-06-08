import React, { Component } from "react";
import "./header.css";
// import logo from "./../../assets/logo.jpg";
import logo from "../../assets/images/logo/logo.svg";
import WOW from "wowjs";

// Header component
class Header extends Component {
    scrollTo(element, to = 0, duration = 500) {
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += increment;

            const val = this.easeInOutQuad(
                currentTime,
                start,
                change,
                duration
            );

            element.scrollTop = val;

            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    }

    componentDidMount() {
        new WOW.WOW({
            live: false,
        }).init();

        let backToTop = document.querySelector(".back-to-top");
        if (backToTop) {
            backToTop.onclick = () => {
                this.scrollTo(document.documentElement);
            };
        }

        let navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");

        document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
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
                elem.querySelector(".ud-submenu").classList.toggle("show");
            });
        });
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    // NavbarBrand component
    NavbarBrand = () => (
        <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
        </a>
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
                <li className="nav-item">
                    <a className="ud-menu-scroll" href="#home">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="ud-menu-scroll" href="#services">
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="ud-menu-scroll" href="#about">
                        About
                    </a>
                </li>
                {/* <li className="nav-item">
            <a className="ud-menu-scroll" href="#team">
                Team
            </a>
        </li> */}
                <li className="nav-item">
                    <a className="ud-menu-scroll" href="#contact">
                        Contact
                    </a>
                </li>
                {/* <li className="nav-item nav-item-has-children">
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
        </li> */}
            </ul>
        </div>
    );

    // NavbarButtons component
    // NavbarButtons = () => (
    //     <div className="navbar-btn d-none d-sm-inline-block">
    //         <a href="login.html" className="ud-main-btn ud-login-btn">
    //             Sign In
    //         </a>
    //         <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
    //             Sign Up
    //         </a>
    //     </div>
    // );

    render() {
        return (
            <header className="ud-header">
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
