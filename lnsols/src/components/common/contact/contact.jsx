import { ErrorModal, SuccessModal } from "components/utils/modals";
import { useState } from "react";
import { ContactService } from "services/contact-service";
import "./contact.css";
const Contact = () => {
    // State object to hold form values
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        if (name === "phoneNumber") {
            setPhoneError("");
        }
        // if (name === "email") {
        //     setEmailError("");
        // }
    };

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [phoneError, setPhoneError] = useState("");
    // const [emailError, setEmailError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validatePhoneNumber(formData.phoneNumber)) {
            setPhoneError("Please enter a valid phone number.");
            return;
        }

        // if (!validateEmail(formData.email)) {
        //     setEmailError("Please enter a valid email address.");
        //     return;
        // }

        try {
            const result = await ContactService(formData);
            // console.log(result);
            if (result.status == 200) {
                setShowSuccessModal(true);
            } else {
                setShowErrorModal(true);
            }
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                message: ""
            });
        } catch (error) {
            console.error(error);
        }
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
        return phoneRegex.test(phoneNumber);
    };

    // const validateEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    //     return emailRegex.test(email);
    // };

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
                                                href="mailto:contact@lnsols.com?subject=Inquiry&body=Hello, I would like more information about your services."
                                            >
                                                contact@lnsols.com
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
                            <form
                                className="ln-contact-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="ln-form-group">
                                    <label htmlFor="fullName">Full Name*</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Adam Gelius"
                                        // placeholder="Samhitha G"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="ln-form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@yourmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {/* {emailError && (
                                        <div className="text-danger">
                                            {emailError}
                                        </div>
                                    )} */}
                                </div>
                                <div className="ln-form-group">
                                    <label htmlFor="phoneNumber">Phone*</label>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="+1 125 521 1552"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    {phoneError && (
                                        <div className="text-danger">
                                            {phoneError}
                                        </div>
                                    )}
                                </div>
                                <div className="ln-form-group">
                                    <label htmlFor="message">Message*</label>
                                    <textarea
                                        name="message"
                                        rows={1}
                                        placeholder="type your message here"
                                        value={formData.message}
                                        onChange={handleChange}
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
            <SuccessModal
                show={showSuccessModal}
                handleClose={() => setShowSuccessModal(false)}
            />
            <ErrorModal
                show={showErrorModal}
                handleClose={() => setShowErrorModal(false)}
            />
        </section>
    );
};

export default Contact;
