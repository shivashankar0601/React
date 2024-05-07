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
import Contact from "./components/contact/contact";
import NotFound from "./components/not-found/not-found";
import WOW from "wowjs";
import { Component } from "react";

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
        // new WOW().init();
        window.addEventListener("scroll", this.handleScroll);
        document.querySelector(".back-to-top").onclick = () => {
            this.scrollTo(document.documentElement);
        };
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

    // componentWillUnmount {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },

    handleScroll(event) {
        const ud_header = document.querySelector(".ud-header");
        const sticky = ud_header.offsetTop;
        const logo = document.querySelector(".navbar-brand img");

        if (window.pageYOffset > sticky) {
            ud_header.classList.add("sticky");
        } else {
            ud_header.classList.remove("sticky");
        }
        // === logo change
        if (ud_header.classList.contains("sticky")) {
            logo.src = "./assets/images/logo/logo-2.svg";
        } else {
            logo.src = "./assets/images/logo/logo.svg";
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
                                <Route path="/contact" element={<Contact />} />
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
