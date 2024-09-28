import About from "components/about/about";
import Contact from "components/common/contact";
import Testimonials from "components/testimonials/testimonials";
import FireParticles from "components/utils/fire-particles";
import { Component } from "react";
import WOW from "wowjs";
import "./home.css";

class Home extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false,
        }).init();
        // const navigate = useNavigate();
    }
    render() {
        // const navigate = this.props.navigation.navigate;
        // const { navigation } = this.props;
        // console.log(navigation);
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
                <meta
                    property="twitter:url"
                    content="https://uideck.com/play/"
                />
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

                <div className="ln-home-particles">
                    {/* <FireParticles height="710px" /> */}
                    <FireParticles height="500px" />
                </div>
                <section className="ln-hero" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="ln-hero-content wow fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <h1 className="ln-hero-title">
                                        Empowering your business with our
                                        tailored tech solutions
                                    </h1>
                                    {/* <p className="ln-hero-subtitle wow fadeInUp">
                                        Unlock the future with LN Sols’
                                        cutting-edge expertise in web and mobile
                                        applications, cloud services, and data
                                        analytics—transforming your ideas into
                                        innovative solutions for the digital
                                        world.
                                    </p> */}
                                    <p
                                        className="ln-hero-desc wow fadeInUp text-left"
                                        data-wow-delay=".45s"
                                    >
                                        Unlock the future with LN Sols
                                        cutting-edge expertise in web and mobile
                                        applications, cloud services, and data
                                        analytics — transforming your ideas into
                                        innovative solutions for the digital
                                        world.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div
                                    className="ln-hero-content wow fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="ln-about-image">
                                        <img
                                            src={successImage}
                                            alt="success-image"
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* ====== Hero End ====== */}
                {/* ====== Features Start ====== */}
                <section id="services" className="ln-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ln-section-title">
                                    {/* <span>Services</span> */}
                                    <h2>Our Service Offerings</h2>
                                    <p>
                                        Explore a comprehensive array of
                                        cutting-edge solutions tailored to meet
                                        your digital needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                                <div
                                    className="ln-single-feature wow fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="ln-feature-icon">
                                        <i className="lni lni-gift" />
                                    </div>
                                    <div className="ln-feature-content">
                                        <h3 className="ln-feature-title">
                                            Web Services
                                        </h3>
                                        <p className="ln-feature-desc">
                                            Unleash Your Digital Potential:
                                            Elevate Your Online Presence with
                                            Our Expert Web Development Services
                                            Discover limitless possibilities
                                            with our comprehensive web
                                            development services tailored to
                                            meet your unique business needs.
                                            {/* From dynamic websites to robust
                                            e-commerce platforms, our team of
                                            skilled developers crafts
                                            cutting-edge solutions that elevate
                                            your online presence and drive
                                            tangible results. Whether you're a
                                            startup seeking a captivating
                                            digital debut or an enterprise
                                            aiming to streamline operations, we
                                            deliver intuitive, scalable, and
                                            visually stunning web experiences
                                            that resonate with your audience.
                                            Partner with us to unlock the full
                                            potential of your online venture and
                                            embark on a journey of digital
                                            excellence. */}
                                        </p>
                                        <a
                                            href="web-development"
                                            className="ln-feature-link"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                                <div
                                    className="ln-single-feature wow fadeInUp"
                                    data-wow-delay=".15s"
                                >
                                    <div className="ln-feature-icon">
                                        <i className="lni lni-move" />
                                    </div>
                                    <div className="ln-feature-content">
                                        <h3 className="ln-feature-title">
                                            Cloud Services
                                        </h3>
                                        <p className="ln-feature-desc">
                                            Transform Your Business with Our
                                            Cloud Service Solutions: Seamlessly
                                            Scale, Secure, and Innovate in the
                                            Digital Sphere. From Cloud Migration
                                            to Custom Solutions, We're Your
                                            Trusted Partner for Next-Generation
                                            Success.
                                        </p>
                                        <a
                                            href="cloud"
                                            className="ln-feature-link"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                                <div
                                    className="ln-single-feature wow fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="ln-feature-icon">
                                        <i className="lni lni-layout" />
                                    </div>
                                    <div className="ln-feature-content">
                                        <h3 className="ln-feature-title">
                                            Data Analytics
                                        </h3>
                                        <p className="ln-feature-desc">
                                            Elevate Your Business Insights with
                                            Our Data Analytics Services: Uncover
                                            Hidden Trends, Optimize Operations,
                                            and Make Informed Decisions. From
                                            Advanced Data Visualization to
                                            Predictive Modeling, Our Expert Team
                                            Tailors Solutions to Drive Your
                                            Success in the Data-Driven Era.
                                        </p>
                                        <a
                                            href="data-analytics"
                                            className="ln-feature-link"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                                <div
                                    className="ln-single-feature wow fadeInUp"
                                    data-wow-delay=".25s"
                                >
                                    <div className="ln-feature-icon">
                                        <i className="lni lni-layers" />
                                    </div>
                                    <div className="ln-feature-content">
                                        <h3 className="ln-feature-title">
                                            Mobile Apps
                                        </h3>
                                        <p className="ln-feature-desc">
                                            Empower Your Business with Our
                                            Mobile App Development Services:
                                            Craft Engaging, High-Performance
                                            Apps That Captivate Audiences and
                                            Drive Growth. From Concept to
                                            Launch, We're Your Partner in
                                            Delivering Seamless User Experiences
                                            Across iOS, Android, and Beyond.
                                            Let's Build Your Next Mobile Success
                                            Story Together.
                                        </p>
                                        <a
                                            href="/mobile-apps"
                                            className="ln-feature-link"
                                            // onClick={navigate("/mobile-apps")}
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
                <section id="about" className="ln-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ln-section-title">
                                    <h2>About US</h2>
                                    <p>
                                        Learn how we are redefining the
                                        landscape of digital innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <About />
                    </div>
                </section>
                {/* ====== About End ====== */}
                {/* ====== Pricing Start ====== */}
                {/* <section id="pricing" className="ln-pricing">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ln-section-title mx-auto text-center">
                                    <span>Pricing</span>
                                    <h2>Our Pricing Plans</h2>
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div
                                    className="ln-single-pricing first-item wow fadeInUp"
                                    data-wow-delay=".15s"
                                >
                                    <div className="ln-pricing-header">
                                        <h3>STARTING FROM</h3>
                                        <h4>$ 19.99/mo</h4>
                                    </div>
                                    <div className="ln-pricing-body">
                                        <ul>
                                            <li>5 User</li>
                                            <li>All UI components</li>
                                            <li>Lifetime access</li>
                                            <li>Free updates</li>
                                            <li>Use on 1 (one) project</li>
                                            <li>4 Months support</li>
                                        </ul>
                                    </div>
                                    <div className="ln-pricing-footer">
                                        <a
                                            href="javascript:void(0)"
                                            className="ln-main-btn ln-border-btn"
                                        >
                                            Purchase Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div
                                    className="ln-single-pricing active wow fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <span className="ln-popular-tag">
                                        POPULAR
                                    </span>
                                    <div className="ln-pricing-header">
                                        <h3>STARTING FROM</h3>
                                        <h4>$ 30.99/mo</h4>
                                    </div>
                                    <div className="ln-pricing-body">
                                        <ul>
                                            <li>5 User</li>
                                            <li>All UI components</li>
                                            <li>Lifetime access</li>
                                            <li>Free updates</li>
                                            <li>Use on 1 (one) project</li>
                                            <li>4 Months support</li>
                                        </ul>
                                    </div>
                                    <div className="ln-pricing-footer">
                                        <a
                                            href="javascript:void(0)"
                                            className="ln-main-btn ln-white-btn"
                                        >
                                            Purchase Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div
                                    className="ln-single-pricing last-item wow fadeInUp"
                                    data-wow-delay=".15s"
                                >
                                    <div className="ln-pricing-header">
                                        <h3>STARTING FROM</h3>
                                        <h4>$ 70.99/mo</h4>
                                    </div>
                                    <div className="ln-pricing-body">
                                        <ul>
                                            <li>5 User</li>
                                            <li>All UI components</li>
                                            <li>Lifetime access</li>
                                            <li>Free updates</li>
                                            <li>Use on 1 (one) project</li>
                                            <li>4 Months support</li>
                                        </ul>
                                    </div>
                                    <div className="ln-pricing-footer">
                                        <a
                                            href="javascript:void(0)"
                                            className="ln-main-btn ln-border-btn"
                                        >
                                            Purchase Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* ====== Pricing End ====== */}
                {/* ====== FAQ Start ====== */}
                {/* <section id="faq" className="ln-faq">
                    <div className="shape">
                        <img
                            src="../../assets/images/faq/shape.svg"
                            alt="shape"
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ln-section-title text-center mx-auto">
                                    <span>FAQ</span>
                                    <h2>Any Questions? Answered</h2>
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="ln-single-faq wow fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="accordion">
                                        <button
                                            className="ln-faq-btn collapsed"
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
                                            <div className="ln-faq-body">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ln-single-faq wow fadeInUp"
                                    data-wow-delay=".15s"
                                >
                                    <div className="accordion">
                                        <button
                                            className="ln-faq-btn collapsed"
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
                                            <div className="ln-faq-body">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ln-single-faq wow fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="accordion">
                                        <button
                                            className="ln-faq-btn collapsed"
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
                                            <div className="ln-faq-body">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="ln-single-faq wow fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="accordion">
                                        <button
                                            className="ln-faq-btn collapsed"
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
                                            <div className="ln-faq-body">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ln-single-faq wow fadeInUp"
                                    data-wow-delay=".15s"
                                >
                                    <div className="accordion">
                                        <button
                                            className="ln-faq-btn collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                        >
                                            <span className="icon flex-shrink-0">
                                                <i className="lni lni-chevron-down" />
                                            </span>
                                            <span>
                                                Do you have plan releasing Play
                                                Pro?
                                            </span>
                                        </button>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                        >
                                            <div className="ln-faq-body">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ln-single-faq wow fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="accordion">
                                        <button
                                            className="ln-faq-btn collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                        >
                                            <span className="icon flex-shrink-0">
                                                <i className="lni lni-chevron-down" />
                                            </span>
                                            <span>
                                                Where and how to host this
                                                template?
                                            </span>
                                        </button>
                                        <div
                                            id="collapseSix"
                                            className="accordion-collapse collapse"
                                        >
                                            <div className="ln-faq-body">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* ====== FAQ End ====== */}
                <Testimonials />

                <Contact />
            </div>
        );
    }
}

export default Home;
