import React from "react";
import aboutImage from "../../assets/images/about/about-image.svg";
import brand from "../../assets/images/hero/brand.svg";
import heroImage from "../../assets/images/hero/hero-image.svg";
import shape from "../../assets/images/hero/dotted-shape.svg";
import shapeTwo from "../../assets/images/hero/dotted-shape.svg";
// import  from ;
// import  from ;
// import  from ;

const Home = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Lakshmi Narasimha solutions pvt ltd</title>
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
            {/* ====== Header Start ====== */}

            {/* Header here */}

            {/* ====== Header End ====== */}
            {/* ====== Hero Start ====== */}
            <section className="ud-hero" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="ud-hero-content wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                {/* <h1 className="ud-hero-title">
                                    One-stop destination for cutting-edge
                                    digital solutions
                                </h1>
                                <p className="ud-hero-desc">
                                    Elevate your digital presence with our
                                    comprehensive suite of services: from
                                    stunning web design to advanced AI and
                                    robotics solutions, we've got you covered
                                    for all your tech needs. Welcome to
                                    innovation, welcome to LN Sols.
                                </p> */}

                                <h1 className="ud-hero-title">
                                    Unlock Your Potential
                                </h1>
                                <p className="ud-hero-desc">
                                    Empowering your journey to success, we blend
                                    visionary web development, transformative
                                    cloud services, and insightful data
                                    analytics. Step into a future of innovation
                                    and growth with
                                </p>

                                {/* <ul className="ud-hero-buttons">
                                    <li>
                                        <a
                                            href="https://links.uideck.com/play-bootstrap-download"
                                            rel="nofollow noopener"
                                            target="_blank"
                                            className="ud-main-btn ud-white-btn"
                                        >
                                            Download Now
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/uideck/play-bootstrap"
                                            rel="nofollow noopener"
                                            target="_blank"
                                            className="ud-main-btn ud-link-btn"
                                        >
                                            Learn More{" "}
                                            <i className="lni lni-arrow-right" />
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                            <div
                                className="ud-hero-brands-wrapper wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <img src={brand} alt="brand" />
                            </div>
                            <div
                                className="ud-hero-image wow fadeInUp"
                                data-wow-delay=".25s"
                            >
                                <img src={heroImage} alt="hero-image" />
                                <img
                                    src={shape}
                                    alt="shape"
                                    className="shape shape-1"
                                />
                                <img
                                    src={shapeTwo}
                                    alt="shape"
                                    className="shape shape-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Hero End ====== */}
            {/* ====== Features Start ====== */}
            <section id="features" className="ud-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-section-title">
                                <span>Features</span>
                                <h2>Main Features of Play</h2>
                                <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available but the majority have
                                    suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <div className="ud-feature-icon">
                                    <i className="lni lni-gift" />
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title">
                                        Free and Open-Source
                                    </h3>
                                    <p className="ud-feature-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and industry.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="ud-feature-link"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="ud-feature-icon">
                                    <i className="lni lni-move" />
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title">
                                        Multipurpose Template
                                    </h3>
                                    <p className="ud-feature-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and industry.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="ud-feature-link"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="ud-feature-icon">
                                    <i className="lni lni-layout" />
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title">
                                        High-quality Design
                                    </h3>
                                    <p className="ud-feature-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and industry.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="ud-feature-link"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-feature wow fadeInUp"
                                data-wow-delay=".25s"
                            >
                                <div className="ud-feature-icon">
                                    <i className="lni lni-layers" />
                                </div>
                                <div className="ud-feature-content">
                                    <h3 className="ud-feature-title">
                                        All Essential Elements
                                    </h3>
                                    <p className="ud-feature-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and industry.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="ud-feature-link"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Features End ====== */}
            {/* ====== About Start ====== */}
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
            {/* ====== About End ====== */}
            {/* ====== Pricing Start ====== */}
            <section id="pricing" className="ud-pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-section-title mx-auto text-center">
                                <span>Pricing</span>
                                <h2>Our Pricing Plans</h2>
                                <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available but the majority have
                                    suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div
                                className="ud-single-pricing first-item wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="ud-pricing-header">
                                    <h3>STARTING FROM</h3>
                                    <h4>$ 19.99/mo</h4>
                                </div>
                                <div className="ud-pricing-body">
                                    <ul>
                                        <li>5 User</li>
                                        <li>All UI components</li>
                                        <li>Lifetime access</li>
                                        <li>Free updates</li>
                                        <li>Use on 1 (one) project</li>
                                        <li>4 Months support</li>
                                    </ul>
                                </div>
                                <div className="ud-pricing-footer">
                                    <a
                                        href="javascript:void(0)"
                                        className="ud-main-btn ud-border-btn"
                                    >
                                        Purchase Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div
                                className="ud-single-pricing active wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <span className="ud-popular-tag">POPULAR</span>
                                <div className="ud-pricing-header">
                                    <h3>STARTING FROM</h3>
                                    <h4>$ 30.99/mo</h4>
                                </div>
                                <div className="ud-pricing-body">
                                    <ul>
                                        <li>5 User</li>
                                        <li>All UI components</li>
                                        <li>Lifetime access</li>
                                        <li>Free updates</li>
                                        <li>Use on 1 (one) project</li>
                                        <li>4 Months support</li>
                                    </ul>
                                </div>
                                <div className="ud-pricing-footer">
                                    <a
                                        href="javascript:void(0)"
                                        className="ud-main-btn ud-white-btn"
                                    >
                                        Purchase Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div
                                className="ud-single-pricing last-item wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="ud-pricing-header">
                                    <h3>STARTING FROM</h3>
                                    <h4>$ 70.99/mo</h4>
                                </div>
                                <div className="ud-pricing-body">
                                    <ul>
                                        <li>5 User</li>
                                        <li>All UI components</li>
                                        <li>Lifetime access</li>
                                        <li>Free updates</li>
                                        <li>Use on 1 (one) project</li>
                                        <li>4 Months support</li>
                                    </ul>
                                </div>
                                <div className="ud-pricing-footer">
                                    <a
                                        href="javascript:void(0)"
                                        className="ud-main-btn ud-border-btn"
                                    >
                                        Purchase Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Pricing End ====== */}
            {/* ====== FAQ Start ====== */}
            <section id="faq" className="ud-faq">
                <div className="shape">
                    <img src="../../assets/images/faq/shape.svg" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-section-title text-center mx-auto">
                                <span>FAQ</span>
                                <h2>Any Questions? Answered</h2>
                                <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available but the majority have
                                    suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="ud-single-faq wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <div className="accordion">
                                    <button
                                        className="ud-faq-btn collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                    >
                                        <span className="icon flex-shrink-0">
                                            <i className="lni lni-chevron-down" />
                                        </span>
                                        <span>How to use UIdeck?</span>
                                    </button>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="ud-faq-body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ud-single-faq wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="accordion">
                                    <button
                                        className="ud-faq-btn collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                    >
                                        <span className="icon flex-shrink-0">
                                            <i className="lni lni-chevron-down" />
                                        </span>
                                        <span>
                                            How to download icons from
                                            Lineicons?
                                        </span>
                                    </button>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="ud-faq-body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ud-single-faq wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="accordion">
                                    <button
                                        className="ud-faq-btn collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                    >
                                        <span className="icon flex-shrink-0">
                                            <i className="lni lni-chevron-down" />
                                        </span>
                                        <span>
                                            Is GrayGrids part of UIdeck?
                                        </span>
                                    </button>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="ud-faq-body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="ud-single-faq wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <div className="accordion">
                                    <button
                                        className="ud-faq-btn collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                    >
                                        <span className="icon flex-shrink-0">
                                            <i className="lni lni-chevron-down" />
                                        </span>
                                        <span>
                                            Can I use this template for
                                            commercial project?
                                        </span>
                                    </button>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="ud-faq-body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ud-single-faq wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="accordion">
                                    <button
                                        className="ud-faq-btn collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                    >
                                        <span className="icon flex-shrink-0">
                                            <i className="lni lni-chevron-down" />
                                        </span>
                                        <span>
                                            Do you have plan releasing Play Pro?
                                        </span>
                                    </button>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="ud-faq-body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ud-single-faq wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="accordion">
                                    <button
                                        className="ud-faq-btn collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                    >
                                        <span className="icon flex-shrink-0">
                                            <i className="lni lni-chevron-down" />
                                        </span>
                                        <span>
                                            Where and how to host this template?
                                        </span>
                                    </button>
                                    <div
                                        id="collapseSix"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="ud-faq-body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== FAQ End ====== */}
            {/* ====== Testimonials Start ====== */}
            <section id="testimonials" className="ud-testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-section-title mx-auto text-center">
                                <span>Testimonials</span>
                                <h2>What our Customers Says</h2>
                                <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available but the majority have
                                    suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="ud-single-testimonial wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <div className="ud-testimonial-ratings">
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                </div>
                                <div className="ud-testimonial-content">
                                    <p>
                                        “Our members are so impressed. It's
                                        intuitive. It's clean. It's distraction
                                        free. If you're building a community.
                                    </p>
                                </div>
                                <div className="ud-testimonial-info">
                                    <div className="ud-testimonial-image">
                                        <img
                                            src="../../assets/images/testimonials/author-01.png"
                                            alt="author"
                                        />
                                    </div>
                                    <div className="ud-testimonial-meta">
                                        <h4>Sabo Masties</h4>
                                        <p>Founder @UIdeck</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="ud-single-testimonial wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="ud-testimonial-ratings">
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                </div>
                                <div className="ud-testimonial-content">
                                    <p>
                                        “Our members are so impressed. It's
                                        intuitive. It's clean. It's distraction
                                        free. If you're building a community.
                                    </p>
                                </div>
                                <div className="ud-testimonial-info">
                                    <div className="ud-testimonial-image">
                                        <img
                                            src="../../assets/images/testimonials/author-02.png"
                                            alt="author"
                                        />
                                    </div>
                                    <div className="ud-testimonial-meta">
                                        <h4>Margin Gesmu</h4>
                                        <p>Founder @Lineicons</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="ud-single-testimonial wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="ud-testimonial-ratings">
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                    <i className="lni lni-star-filled" />
                                </div>
                                <div className="ud-testimonial-content">
                                    <p>
                                        “Our members are so impressed. It's
                                        intuitive. It's clean. It's distraction
                                        free. If you're building a community.
                                    </p>
                                </div>
                                <div className="ud-testimonial-info">
                                    <div className="ud-testimonial-image">
                                        <img
                                            src="../../assets/images/testimonials/author-03.png"
                                            alt="author"
                                        />
                                    </div>
                                    <div className="ud-testimonial-meta">
                                        <h4>William Smith</h4>
                                        <p>Founder @GrayGrids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="ud-brands wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="ud-title">
                                    <h6>Trusted and Used by</h6>
                                </div>
                                <div className="ud-brands-logo">
                                    <div className="ud-single-logo">
                                        <img
                                            src="../../assets/images/brands/ayroui.svg"
                                            alt="ayroui"
                                        />
                                    </div>
                                    <div className="ud-single-logo">
                                        <img
                                            src="../../assets/images/brands/uideck.svg"
                                            alt="uideck"
                                        />
                                    </div>
                                    <div className="ud-single-logo">
                                        <img
                                            src="../../assets/images/brands/graygrids.svg"
                                            alt="graygrids"
                                        />
                                    </div>
                                    <div className="ud-single-logo">
                                        <img
                                            src="../../assets/images/brands/lineicons.svg"
                                            alt="lineicons"
                                        />
                                    </div>
                                    <div className="ud-single-logo">
                                        <img
                                            src="../../assets/images/brands/ecommerce-html.svg"
                                            alt="ecommerce-html"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Testimonials End ====== */}
            {/* ====== Team Start ====== */}
            <section id="team" className="ud-team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-section-title mx-auto text-center">
                                <span>Our Team</span>
                                <h2>Meet The Team</h2>
                                <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available but the majority have
                                    suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-team wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <div className="ud-team-image-wrapper">
                                    <div className="ud-team-image">
                                        <img
                                            src="../../assets/images/team/team-01.png"
                                            alt="team"
                                        />
                                    </div>
                                    <img
                                        src="../../assets/images/team/dotted-shape.svg"
                                        alt="shape"
                                        className="shape shape-1"
                                    />
                                    <img
                                        src="../../assets/images/team/shape-2.svg"
                                        alt="shape"
                                        className="shape shape-2"
                                    />
                                </div>
                                <div className="ud-team-info">
                                    <h5>Adveen Desuza</h5>
                                    <h6>UI Designer</h6>
                                </div>
                                <ul className="ud-team-socials">
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-twitter-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-instagram-filled" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-team wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="ud-team-image-wrapper">
                                    <div className="ud-team-image">
                                        <img
                                            src="../../assets/images/team/team-02.png"
                                            alt="team"
                                        />
                                    </div>
                                    <img
                                        src="../../assets/images/team/dotted-shape.svg"
                                        alt="shape"
                                        className="shape shape-1"
                                    />
                                    <img
                                        src="../../assets/images/team/shape-2.svg"
                                        alt="shape"
                                        className="shape shape-2"
                                    />
                                </div>
                                <div className="ud-team-info">
                                    <h5>Jezmin uniya</h5>
                                    <h6>Product Designer</h6>
                                </div>
                                <ul className="ud-team-socials">
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-twitter-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-instagram-filled" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-team wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="ud-team-image-wrapper">
                                    <div className="ud-team-image">
                                        <img
                                            src="../../assets/images/team/team-03.png"
                                            alt="team"
                                        />
                                    </div>
                                    <img
                                        src="../../assets/images/team/dotted-shape.svg"
                                        alt="shape"
                                        className="shape shape-1"
                                    />
                                    <img
                                        src="../../assets/images/team/shape-2.svg"
                                        alt="shape"
                                        className="shape shape-2"
                                    />
                                </div>
                                <div className="ud-team-info">
                                    <h5>Andrieo Gloree</h5>
                                    <h6>App Developer</h6>
                                </div>
                                <ul className="ud-team-socials">
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-twitter-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-instagram-filled" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div
                                className="ud-single-team wow fadeInUp"
                                data-wow-delay=".25s"
                            >
                                <div className="ud-team-image-wrapper">
                                    <div className="ud-team-image">
                                        <img
                                            src="../../assets/images/team/team-04.png"
                                            alt="team"
                                        />
                                    </div>
                                    <img
                                        src="../../assets/images/team/dotted-shape.svg"
                                        alt="shape"
                                        className="shape shape-1"
                                    />
                                    <img
                                        src="../../assets/images/team/shape-2.svg"
                                        alt="shape"
                                        className="shape shape-2"
                                    />
                                </div>
                                <div className="ud-team-info">
                                    <h5>Jackie Sanders</h5>
                                    <h6>Content Writer</h6>
                                </div>
                                <ul className="ud-team-socials">
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-twitter-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/MusharofChy">
                                            <i className="lni lni-instagram-filled" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Team End ====== */}
            {/* ====== Contact Start ====== */}
            <section id="contact" className="ud-contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="ud-contact-content-wrapper">
                                <div className="ud-contact-title">
                                    <span>CONTACT US</span>
                                    <h2>
                                        Let’s talk about <br />
                                        Love to hear from you!
                                    </h2>
                                </div>
                                <div className="ud-contact-info-wrapper">
                                    <div className="ud-single-info">
                                        <div className="ud-info-icon">
                                            <i className="lni lni-map-marker" />
                                        </div>
                                        <div className="ud-info-meta">
                                            <h5>Our Location</h5>
                                            <p>
                                                401 Broadway, 24th Floor,
                                                Orchard Cloud View, London
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ud-single-info">
                                        <div className="ud-info-icon">
                                            <i className="lni lni-envelope" />
                                        </div>
                                        <div className="ud-info-meta">
                                            <h5>How Can We Help?</h5>
                                            <p>info@yourdomain.com</p>
                                            <p>contact@yourdomain.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div
                                className="ud-contact-form-wrapper wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h3 className="ud-contact-form-title">
                                    Send us a Message
                                </h3>
                                <form className="ud-contact-form">
                                    <div className="ud-form-group">
                                        <label htmlFor="fullName">
                                            Full Name*
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Adam Gelius"
                                        />
                                    </div>
                                    <div className="ud-form-group">
                                        <label htmlFor="email">Email*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="example@yourmail.com"
                                        />
                                    </div>
                                    <div className="ud-form-group">
                                        <label htmlFor="phone">Phone*</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="+885 1254 5211 552"
                                        />
                                    </div>
                                    <div className="ud-form-group">
                                        <label htmlFor="message">
                                            Message*
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={1}
                                            placeholder="type your message here"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="ud-form-group mb-0">
                                        <button
                                            type="submit"
                                            className="ud-main-btn"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Contact End ====== */}
            {/* ====== Footer Start ====== */}
            <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
                <div className="shape shape-1">
                    <img
                        src="../../assets/images/footer/shape-1.svg"
                        alt="shape"
                    />
                </div>
                <div className="shape shape-2">
                    <img
                        src="../../assets/images/footer/shape-2.svg"
                        alt="shape"
                    />
                </div>
                <div className="shape shape-3">
                    <img
                        src="../../assets/images/footer/shape-3.svg"
                        alt="shape"
                    />
                </div>
                <div className="ud-footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="ud-widget">
                                    <a
                                        href="index.html"
                                        className="ud-footer-logo"
                                    >
                                        <img
                                            src="../../assets/images/logo/logo.svg"
                                            alt="logo"
                                        />
                                    </a>
                                    <p className="ud-widget-desc">
                                        We create digital experiences for brands
                                        and companies by using technology.
                                    </p>
                                    <ul className="ud-widget-socials">
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-facebook-filled" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-twitter-filled" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-instagram-filled" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-linkedin-original" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">
                                        About Us
                                    </h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a href="javascript:void(0)">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Features
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Testimonial
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">
                                        Features
                                    </h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a href="javascript:void(0)">
                                                How it works
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Privacy policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Terms of service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Refund policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">
                                        Our Products
                                    </h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a
                                                href="https://lineicons.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Lineicons
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://ecommercehtml.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Ecommerce HTML
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://ayroui.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Ayro UI
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://graygrids.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Plain Admin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">
                                        Partners
                                    </h5>
                                    <ul className="ud-widget-brands">
                                        <li>
                                            <a
                                                href="https://ayroui.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                <img
                                                    src="../../assets/images/footer/brands/ayroui.svg"
                                                    alt="ayroui"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://ecommercehtml.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                <img
                                                    src="../../assets/images/footer/brands/ecommerce-html.svg"
                                                    alt="ecommerce-html"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://graygrids.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                <img
                                                    src="../../assets/images/footer/brands/graygrids.svg"
                                                    alt="graygrids"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://lineicons.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                <img
                                                    src="../../assets/images/footer/brands/lineicons.svg"
                                                    alt="lineicons"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://uideck.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                <img
                                                    src="../../assets/images/footer/brands/uideck.svg"
                                                    alt="uideck"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tailwindtemplates.co/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                <img
                                                    src="../../assets/images/footer/brands/tailwindtemplates.svg"
                                                    alt="tailwindtemplates"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ud-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="ud-footer-bottom-left">
                                    <li>
                                        <a href="javascript:void(0)">
                                            Privacy policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            Support policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            Terms of service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <p className="ud-footer-bottom-right">
                                    Designed and Developed by
                                    <a href="https://uideck.com" rel="nofollow">
                                        UIdeck
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ====== Footer End ====== */}
            {/* ====== Back To Top Start ====== */}
            <a href="javascript:void(0)" className="back-to-top">
                <i className="lni lni-chevron-up"> </i>
            </a>
            {/* ====== Back To Top End ====== */}
        </div>
    );
};

export default Home;
