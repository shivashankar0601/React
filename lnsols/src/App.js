import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "@fortawesome/free-solid-svg-icons";
import routes from "components/routing/routes";
import Loading from "components/utils/loading/loading";
import { isNull, isObject } from "lodash";
import { Component, Suspense } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
// import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import WOW from "wowjs";
import "./App.css";
import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/header";

// import logoTwo from "./assets/images/logo/logo-2.svg";
// import logo from "./assets/images/logo/logo.svg";

library.add(
    ...Object.keys(icons)
        .filter((icon) => isObject(icons[icon]) && !isNull(icons[icon]))
        .map((icon) => icons[icon])
);

class App extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();

        window.addEventListener("scroll", this.handleScroll);

        // should not use set timeout, but for the time being i am using it
        setTimeout(() => {
            let backToTop = document.querySelector(".back-to-top");
            if (backToTop) {
                backToTop.onclick = () => {
                    this.scrollTo(document.documentElement);
                };
            }
        }, 500);
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

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    /* End of utility methods */

    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <div className="app">
                        <div className="header">
                            <Header />
                        </div>
                        <div className="content-wrapper">
                            <main className="main-content">
                                <Routes>
                                    {routes.map((route) => (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            element={route.element}
                                        />
                                    ))}
                                </Routes>
                            </main>
                        </div>
                        <div className="footer">
                            <Footer />
                        </div>
                        {/* Back To Top */}
                        <Link to="javascript:void(0)" className="back-to-top">
                            <i className="lni lni-chevron-up"> </i>
                        </Link>
                    </div>
                </Suspense>
            </BrowserRouter>
        );
    }
}

export default App;
