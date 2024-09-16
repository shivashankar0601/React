import CollapsibleSection from "components/utils/collapsible-section/collapsible-section";
import React from "react";

const About = (props) => {
    const sections = [
        {
            heading: "Welcome to LN Sols!",
            content: [
                "At LN Sols, we are passionate about driving digital transformation through innovative software solutions. As a dynamic startup founded just six months ago, our mission is to empower businesses by delivering top-tier web and mobile applications, cutting-edge cloud services, and insightful data analytics. Our vision is to become a trusted partner in the technology space, known for our commitment to excellence and customer satisfaction.",
            ],
        },
        {
            heading: "What We Do",
            content: [
                "We specialize in crafting tailored software solutions to meet the unique needs of businesses. From developing robust web and mobile applications to providing scalable cloud services and comprehensive data analytics, our goal is to help you harness the full potential of technology. At LN Sols, we are dedicated to creating solutions that not only meet but exceed your expectations.",
            ],
        },
        {
            heading: "Why Choose Us?",
            content: [
                "We understand that maintaining and evolving technology is key to business success. That’s why we offer an exclusive promotion: enjoy 3-6 months of free maintenance services when you partner with us. Our dedicated team ensures that your solutions remain at peak performance, giving you peace of mind as you focus on what matters most—growing your business.",
            ],
        },
        {
            heading: "Our Culture",
            content: [
                "At LN Sols, we believe in a friendly and inclusive culture that encourages creativity and collaboration. We strive to create an environment where ideas can flourish, and every team member feels empowered to contribute their best. Our open and approachable atmosphere ensures that we work together seamlessly to achieve shared goals and deliver exceptional results.",
            ],
        },
        {
            heading: "Join Us on Our Journey",
            content: [
                "As a startup, we are excited about the future and the opportunities that lie ahead. We are committed to building long-lasting relationships with our clients and growing alongside them. Whether you need a cutting-edge application, reliable cloud services, or actionable insights through data analytics, LN Sols is here to help you succeed.",
                "Thank you for considering LN Sols. We look forward to the possibility of working together and making a positive impact on your business.",
            ],
        },
    ];

    return (
        <div className="mt-4">
            {sections.forEach((section) => (
                <CollapsibleSection section />
            ))}
        </div>
    );
};

export default About;
