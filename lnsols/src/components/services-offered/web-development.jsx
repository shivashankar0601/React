import React from "react";
import aboutImage from "../../assets/images/about/about-image.svg";
import Testimonials from "../common/testimonials";
import Contact from "../common/contact";

const WebDevelopment = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Lakshmi Narasimha Solutions Pvt Ltd</title>
            {/* Primary Meta Tags */}
            <meta
                name="title"
                content="Play - Free Open Source HTML Bootstrap Template by UIdeck"
            />
            <meta
                name="description"
                content="Play - Free Open Source HTML Bootstrap Template by UIdeck Team"
            />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://uideck.com/play/" />
            <meta
                property="og:title"
                content="Play - Free Open Source HTML Bootstrap Template by UIdeck"
            />
            <meta
                property="og:description"
                content="Play - Free Open Source HTML Bootstrap Template by UIdeck Team"
            />
            <meta
                property="og:image"
                content="https://uideck.com/wp-content/uploads/2021/09/play-meta-bs.jpg"
            />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://uideck.com/play/" />
            <meta
                property="twitter:title"
                content="Play - Free Open Source HTML Bootstrap Template by UIdeck"
            />
            <meta
                property="twitter:description"
                content="Play - Free Open Source HTML Bootstrap Template by UIdeck Team"
            />
            <meta
                property="twitter:image"
                content="https://uideck.com/wp-content/uploads/2021/09/play-meta-bs.jpg"
            />
            {/*====== Favicon Icon ======*/}
            <link
                rel="shortcut icon"
                href="../../assets/images/favicon.svg"
                type="image/svg"
            />
            <section className="ud-hero" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="ud-hero-content wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h1 className="ud-hero-title">
                                    Unlock Your Potential
                                </h1>
                                <p className="ud-hero-desc">
                                    Transform your digital footprint with Our
                                    Expert Web Development Services. Explore
                                    boundless opportunities as we craft bespoke
                                    solutions to propel your online presence to
                                    unprecedented heights. Harnessing the latest
                                    in technology, our comprehensive web
                                    development services are meticulously
                                    tailored to suit your distinct business
                                    requirements. Experience the power of
                                    innovation as we redefine excellence in the
                                    digital realm. Unlock the full potential of
                                    your online venture with our cutting-edge
                                    expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Hero End ====== */}

            <section id="about" className="ud-about">
                <div className="container">
                    <div
                        className="ud-about-wrapper wow fadeInUp"
                        data-wow-delay=".2s"
                    >
                        <div className="ud-about-content-wrapper">
                            <div className="ud-about-content">
                                <span className="tag">About Us</span>
                                <h2>
                                    Brilliant Toolkit to Build Nextgen Website
                                    Faster.
                                </h2>
                                <p>
                                    The main ‘thrust’ is to focus on educating
                                    attendees on how to best protect highly
                                    vulnerable business applications with
                                    interactive panel discussions and
                                    roundtables led by subject matter experts.
                                </p>
                                <p>
                                    The main ‘thrust’ is to focus on educating
                                    attendees on how to best protect highly
                                    vulnerable business applications with
                                    interactive panel.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="ud-main-btn"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="ud-about-image">
                            <img src={aboutImage} alt="about-image" />
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <Contact />

            {/* ====== Back To Top Start ====== */}
            <a href="javascript:void(0)" className="back-to-top">
                <i className="lni lni-chevron-up"> </i>
            </a>
            {/* ====== Back To Top End ====== */}
        </div>
    );
};

export default WebDevelopment;