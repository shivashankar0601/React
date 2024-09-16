import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { isObject, isNull } from "lodash";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import About from "./components/about/about";
import ContactUs from "./components/contact/contact-us";
import NotFound from "./components/not-found/not-found";
import { Component } from "react";
// import WOW from "wowjs";
// import logoTwo from "./assets/images/logo/logo-2.svg";
// import logo from "./assets/images/logo/logo.svg";
import MobileApps from "./components/services-offered/mobile-apps";
import WebDevelopment from "./components/services-offered/web-development";
import CloudServices from "./components/services-offered/cloud";
import DataAnalytics from "./components/services-offered/data-analytics";

library.add(
    ...Object.keys(icons)
        .filter((icon) => isObject(icons[icon]) && !isNull(icons[icon]))
        .map((icon) => icons[icon])
);

class App extends Component {
    // const menuItems = [
    //     {
    //         id: 1,
    //         name: "Home",
    //         url: "/",
    //         icon: "fa-house",
    //     },
    //     {
    //         id: 2,
    //         name: "Clients",
    //         url: "/clients",
    //         icon: "fa-users",
    //     },
    //     {
    //         id: 3,
    //         name: "Testimonials",
    //         url: "testimonials",
    //         // icon: "fa-comments",
    //         icon: "fa-pen-nib",
    //     },
    //     {
    //         id: 4,
    //         name: "About",
    //         url: "about",
    //         icon: "fa-address-card",
    //     },
    //     {
    //         id: 5,
    //         name: "Blog",
    //         url: "blog",
    //         icon: "fa-users",
    //     },
    //     {
    //         id: 6,
    //         name: "Careers",
    //         url: "careers",
    //         icon: "fa-users",
    //     },
    // ];

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll(event) {
        const ud_header = document.querySelector(".ln-header");
        const sticky = ud_header.offsetTop;
        // const logoImage = document.querySelector(".navbar-brand img");
        const logo = document.querySelector(".brand-logo");

        if (window.pageYOffset > sticky) {
            ud_header.classList.add("sticky");
        } else {
            ud_header.classList.remove("sticky");
        }
        // === logo change
        // if (ud_header.classList.contains("sticky")) {
        //     logoImage.src = logoTwo;
        // } else {
        //     logoImage.src = logo;
        // }

        if (ud_header.classList.contains("sticky")) {
            logo.classList.add("heading-color");
        } else {
            logo.classList.remove("heading-color");
        }

        // show or hide the back-top-top button
        const backToTop = document.querySelector(".back-to-top");
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="content-wrapper">
                        <main className="main-content">
                            <Routes>
                                <Route path="/" exact element={<Home />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/contact"
                                    element={<ContactUs />}
                                />
                                <Route
                                    path="/mobile-apps"
                                    element={<MobileApps />}
                                />
                                <Route
                                    path="/web-development"
                                    element={<WebDevelopment />}
                                />

                                <Route
                                    path="/data-analytics"
                                    element={<DataAnalytics />}
                                />

                                <Route
                                    path="/cloud"
                                    element={<CloudServices />}
                                />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
