import "./loading.css";

const Loading = () => {
    return (
        <div className="loading-overlay d-flex justify-content-center align-items-center">
            <div className="text-center d-inline-flex">
                <svg
                    className="loading-symbol"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                >
                    <circle className="loading-circle" cx="50" cy="50" r="45" />
                </svg>
                <div className="loading-text">
                    Loading, Please wait{" "}
                    <span className="loading-dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
