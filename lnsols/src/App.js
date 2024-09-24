import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "@fortawesome/free-solid-svg-icons";
import Loading from "components/utils/loading/loading";
import { isNull, isObject } from "lodash";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import WOW from "wowjs";
// import logoTwo from "./assets/images/logo/logo-2.svg";
// import logo from "./assets/images/logo/logo.svg";

import routes from "components/routing/routes";

import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

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
        new WOW.WOW({
            live: false,
        }).init();

        window.addEventListener("scroll", this.handleScroll);
        let backToTop = document.querySelector(".back-to-top");
        if (backToTop) {
            backToTop.onclick = () => {
                this.scrollTo(document.documentElement);
            };
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

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

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    /* Start of utility methods */

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
        // if (backToTop != null)
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    }

    /* End of utility methods */

    render() {
        return (
            <Router>
                <div className="app">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="content-wrapper">
                        <main className="main-content">
                            <Suspense fallback={<Loading />}>
                                <Routes>
                                    {routes.map((route) => (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            element={route.element}
                                        />
                                    ))}
                                </Routes>
                            </Suspense>
                        </main>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                    {/* ====== Back To Top Start ====== */}
                    <a href="javascript:void(0)" className="back-to-top">
                        <i className="lni lni-chevron-up"> </i>
                    </a>
                    {/* ====== Back To Top End ====== */}
                </div>
            </Router>
        );
    }
}

export default App;
