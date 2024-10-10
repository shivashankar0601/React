import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="ln-footer wow fadeInUp" data-wow-delay=".15s">
            <div className="ln-footer-widgets">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xl-3 col-lg-4 col-md-6"> */}
                        <div className="col">
                            <div className="ln-widget">
                                <Link className="ln-footer-logo" to="/">
                                    {/* <img src={logo} alt="Logo" /> */}
                                    LN Sols
                                    <div className="brand-logo-tag-name">
                                        Empowering future solutions
                                    </div>
                                </Link>
                                <p className="ln-widget-desc">
                                    We transform your Business with our
                                    customized tech solutions.
                                </p>
                                <ul className="ln-widget-socials">
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
                        {/* <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6"> */}
                        <div className="col">
                            <div className="ln-widget">
                                <h5 className="ln-widget-title">About Us</h5>
                                <ul className="ln-widget-links">
                                    <li>
                                        <a href="javascript:void(0)">Home</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">About</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6"> */}
                        <div className="col">
                            <div className="ln-widget">
                                <h5 className="ln-widget-title">
                                    Services offered
                                </h5>
                                <ul className="ln-widget-links">
                                    <li>
                                        <a href="javascript:void(0)">
                                            Web development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            Cloud services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            Mobile app development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            Data analytics
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <div className="ln-widget">
                                <h5 className="ln-widget-title">
                                    Our Products
                                </h5>
                                <ul className="ln-widget-links">
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
                            <div className="ln-widget">
                                <h5 className="ln-widget-title">Partners</h5>
                                <ul className="ln-widget-brands">
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
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="ln-footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="ln-footer-bottom-left">
                                <li>
                                    <a href="/privacy-policy">Privacy policy</a>
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
                            <p className="ln-footer-bottom-right">
                                © 2024{" "}
                                <a href="https://lnsols.com" rel="nofollow">
                                    LN Sols
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
