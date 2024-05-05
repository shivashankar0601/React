import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { isObject, isNull } from "lodash";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import NotFound from "./components/not-found/not-found";

library.add(
    ...Object.keys(icons)
        .filter((icon) => isObject(icons[icon]) && !isNull(icons[icon]))
        .map((icon) => icons[icon])
);

function App() {
    const menuItems = [
        {
            id: 1,
            name: "Home",
            url: "/",
            icon: "fa-house",
        },
        {
            id: 2,
            name: "Clients",
            url: "/clients",
            icon: "fa-users",
        },
        {
            id: 3,
            name: "Testimonials",
            url: "testimonials",
            // icon: "fa-comments",
            icon: "fa-pen-nib",
        },
        {
            id: 4,
            name: "About",
            url: "about",
            icon: "fa-address-card",
        },
        {
            id: 5,
            name: "Careers",
            url: "careers",
            icon: "fa-users",
        },
    ];
    return (
        <Router>
            <div className="app">
                <div className="header">
                    <Header />
                </div>
                <div className="content-wrapper">
                    <aside className="sidebar bg-dark">
                        <Sidebar menuItems={menuItems} />
                    </aside>
                    <main className="main-content">
                        <Routes>
                            <Route path="/" exact element={Home} />
                            <Route path="/blog" element={Blog} />
                            <Route path="/about" element={About} />
                            <Route path="/contact" element={Contact} />
                            <Route path="/" exact element={NotFound} />
                        </Routes>
                    </main>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
