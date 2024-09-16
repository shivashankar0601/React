import React from "react";
import Carousel from "../utils/carousel/carousel";
import "./testimonials.css";
import author from "../../../src/assets/images/testimonials/author-01.png";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            content:
                "LN Sols transformed our web presence with their outstanding web development skills. Their team understood our needs perfectly and delivered a top-notch website that has significantly boosted our online engagement.",
            author: "Jane Doe",
            position: "CEO, Tech Innovators Inc.",
            image: author,
            rating: 3.9,
        },
        {
            id: 2,
            content:
                "The cloud solutions provided by LN Sols were a game-changer for our infrastructure. Their expertise in cloud development allowed us to scale effortlessly and optimize our resources.",
            author: "John Smith",
            position: "CTO, Global Enterprises Ltd.",
            image: author,
            rating: 4.2,
        },
        {
            id: 3,
            content:
                "LN Sols mobile application development team delivered an app that exceeded our expectations. The user experience is smooth, and the performance is top-notch, driving up our user engagement.",
            author: "Alice Johnson",
            position: "Marketing Director, AppMasters Co.",
            image: author,
            rating: 4.9,
        },
        {
            id: 4,
            content:
                "We were impressed with LN Sols analytics services. Their comprehensive data insights helped us make informed decisions and significantly improved our marketing strategies.",
            author: "Bob Brown",
            position: "Founder, Data Driven Solutions",
            image: author,
            rating: 5,
        },
        {
            id: 5,
            content:
                "LN Sols consistently delivers high-quality solutions across all their services. Their dedication to excellence in web development, cloud solutions, mobile apps, and analytics has been instrumental to our success.",
            author: "Sara Lee",
            position: "COO, Future Tech Innovations",
            image: author,
            rating: 5,
        },
        // {
        //     id: 6,
        //     content:
        //         "Working with LN Sols on our e-commerce platform was a seamless experience. Their web development team built a highly functional and aesthetically pleasing site that has greatly increased our sales.",
        //     author: "Mark Wilson",
        //     position: "E-commerce Manager, ShopEase Inc.",
        //     image: author,
        //     rating: 5,
        // },
        // {
        //     id: 7,
        //     content:
        //         "LN Sols cloud migration services were top-notch. Their team guided us through the entire process, ensuring minimal downtime and optimizing our cloud environment for better performance and cost savings.",
        //     author: "Emily Davis",
        //     position: "IT Director, SecureNet Corp.",
        //     image: author,
        //     rating: 5,
        // },
        // {
        //     id: 8,
        //     content:
        //         "The custom mobile app developed by LN Sols has been a tremendous asset to our business. Their attention to detail and focus on user experience resulted in an app that our customers love and frequently use.",
        //     author: "David Lee",
        //     position: "Product Manager, Mobile Solutions Ltd.",
        //     image: author,
        //     rating: 5,
        // },
        // {
        //     id: 9,
        //     content:
        //         "The analytics dashboard provided by LN Sols has revolutionized the way we track and interpret our data. The actionable insights have allowed us to optimize our operations and marketing strategies effectively.",
        //     author: "Olivia Martinez",
        //     position: "Head of Analytics, Insightful Data Co.",
        //     image: author,
        //     rating: 5,
        // },
        // {
        //     id: 10,
        //     content:
        //         "LN Sols web development team was instrumental in the launch of our new platform. Their innovative approach and dedication to quality ensured a successful deployment and a high-performing website.",
        //     author: "Tom Harris",
        //     position: "CTO, Digital Horizons Ltd.",
        //     image: author,
        //     rating: 5,
        // },
        {
            id: 11,
            content:
                "LN Sols’ web development team created a robust and user-friendly website for us, which has enhanced our online visibility and customer engagement significantly. Highly recommended!",
            author: "Anjali Mehta",
            position: "Founder & CEO, GreenTech Solutions",
            image: author,
            rating: 4.4,
        },
        {
            id: 12,
            content:
                "Their cloud development services have streamlined our operations and reduced our costs. The team at LN Sols was knowledgeable and professional throughout the entire process.",
            author: "Ravi Kumar",
            position: "Chief Operations Officer, CloudReach Pvt. Ltd.",
            image: author,
            rating: 5,
        },
        {
            id: 13,
            content:
                "LN Sols developed a highly intuitive mobile app for us that has greatly improved our customer interactions and satisfaction. Their expertise in mobile application development is impressive.",
            author: "Priya Sharma",
            position: "Marketing Head, NextGen Apps",
            image: author,
            rating: 4.6,
        },
        {
            id: 14,
            content:
                "The analytics solutions provided by LN Sols have given us deep insights into our business performance. Their teams ability to turn data into actionable strategies is invaluable.",
            author: "Arjun Patel",
            position: "Director of Analytics, DataEdge Analytics",
            image: author,
            rating: 4.7,
        },
        {
            id: 15,
            content:
                "LN Sols has been instrumental in optimizing our web platform. Their teams dedication to understanding our requirements and delivering tailored solutions has exceeded our expectations.",
            author: "Neha Desai",
            position: "Product Lead, WebWizards Ltd.",
            image: author,
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="ln-testimonials m-5">
            {/* ====== Testimonials Start ====== */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ln-section-title">
                            <h2>Testimonials</h2>
                            <span>What our Clients Says</span>
                            <p>
                                Hear directly from our clients about how LN Sols
                                has transformed their businesses with innovative
                                web development, cloud services, mobile apps,
                                and analytics. Discover how we’ve exceeded their
                                expectations and driven their success.
                            </p>
                        </div>
                    </div>
                </div>

                <Carousel testimonials={testimonials} />
            </div>
            {/* ====== Testimonials End ====== */}
        </section>
    );
};

export default Testimonials;
