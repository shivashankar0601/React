import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/ud-styles.css";
import StarRating from "../../utils/star-rating";

const Carousel = ({ testimonials }) => {
    var settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        speed: 1000,
    };
    return (
        <Slider {...settings}>
            {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                    <div className="card mb-3 m-2 p-3">
                        <div className="ud-testimonial-ratings pr-2 py-2">
                            <StarRating rating={testimonial.rating} />
                        </div>
                        <div className="ud-testimonial-content">
                            <p>“{testimonial.content}”</p>
                        </div>
                        <div className="ud-testimonial-info">
                            <div className="ud-testimonial-image">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="card-img-top rounded-circle"
                                />
                            </div>
                            <div className="ud-testimonial-meta">
                                <h4>{testimonial.author}</h4>
                                <p>{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
