import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact" className="ln-contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="ln-contact-content-wrapper">
                            <div className="ln-contact-title">
                                <span>CONTACT US</span>
                                <h2>
                                    Let’s talk <br />
                                    We love to hear from you!
                                </h2>
                            </div>
                            <div className="ln-contact-info-wrapper">
                                <div className="ln-single-info">
                                    <div className="ln-info-icon">
                                        <i className="lni lni-map-marker" />
                                    </div>
                                    <div className="ln-info-meta">
                                        <h5>Our Location</h5>
                                        <p>Hyderabad, Telangana, India.</p>
                                    </div>
                                </div>
                                <div className="ln-single-info">
                                    <div className="ln-info-icon">
                                        <i className="lni lni-envelope" />
                                    </div>
                                    <div className="ln-info-meta">
                                        <h5>How Can We Help?</h5>
                                        <p>
                                            <a
                                                className="ln-info-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="mailto:lnsolspvtltd@gmail.com?subject=Inquiry&body=Hello, I would like more information about your services."
                                            >
                                                lnsolspvtltd@gmail.com
                                            </a>
                                        </p>
                                        {/* <p>contact@lnsols.com</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div
                            className="ln-contact-form-wrapper wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <h3 className="ln-contact-form-title">
                                Reach Out to Us
                            </h3>
                            <form className="ln-contact-form">
                                <div className="ln-form-group">
                                    <label htmlFor="fullName">Full Name*</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Adam Gelius"
                                        // placeholder="Samhitha G"
                                    />
                                </div>
                                <div className="ln-form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@yourmail.com"
                                    />
                                </div>
                                <div className="ln-form-group">
                                    <label htmlFor="phone">Phone*</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="+1 125 521 1552"
                                    />
                                </div>
                                <div className="ln-form-group">
                                    <label htmlFor="message">Message*</label>
                                    <textarea
                                        name="message"
                                        rows={1}
                                        placeholder="type your message here"
                                    />
                                </div>
                                <div className="ln-form-group mb-0">
                                    <button
                                        type="submit"
                                        className="ln-main-btn"
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
    );
};

export default Contact;
