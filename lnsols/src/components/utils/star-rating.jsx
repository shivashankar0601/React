import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
    // Round the rating to the nearest 0.5 and constrain it between 0 and 5
    const roundedRating = Math.round(rating * 2) / 2;

    // Generate the array of star elements based on the rounded rating
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;

        // Determine if the star should be full, half, or empty
        let icon;
        if (starValue <= roundedRating) {
            icon = faStar;
        } else if (starValue - 0.5 === roundedRating) {
            icon = faStarHalfAlt;
        } else {
            icon = faStarEmpty;
        }

        return (
            <FontAwesomeIcon
                key={index}
                icon={icon}
                style={{
                    color: "gold",
                    margin: "0 2px",
                }}
            />
        );
    });

    return <div>{stars}</div>;
};

export default StarRating;
