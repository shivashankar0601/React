// import axios from "axios";
import EndPoints from "./end-points"; // Adjust the import path as necessary
export const ContactService = async ({
    fullName,
    email,
    phoneNumber,
    message,
}) => {
    let response;
    await fetch(EndPoints.contactAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ fullName, email, phoneNumber, message }),
    })
        .then((data) => {
            response = data;
        })
        .catch((error) => {
            response = error;
        });
    return response;
};
