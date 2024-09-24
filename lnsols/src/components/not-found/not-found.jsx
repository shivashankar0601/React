import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate("/"); // Redirect to home page
        }, 5000); // Redirect after 5 seconds

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    navigate("/"); // Redirect to home page
                    return 0;
                }
                return prev - 1;
            });
        }, 1000); // Decrease countdown every second

        return () => {
            clearTimeout(redirect); // Cleanup timer on unmount
            clearInterval(timer); // Cleanup on unmount
        };
    }, [navigate]);

    return (
        <div className="page-not-found d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-white">Oops! Page Not Found</h1>
            <p className="text-white mt-5">
                Redirecting to the home page in {countdown} seconds...
            </p>
        </div>
    );
};
export default NotFound;
