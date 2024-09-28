import { useEffect } from "react";

export const SuccessModal = ({ show, handleClose }) => {
    useEffect(() => {
        let timer;
        if (show) {
            timer = setTimeout(() => {
                handleClose();
            }, 10000); // Auto-close after 10 seconds
        }
        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [show, handleClose]);

    return (
        <div
            className={`modal ${show ? "show" : ""}`}
            tabIndex="-1"
            style={{ display: show ? "block" : "none" }}
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Submission Successful</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>Your message has been sent successfully!</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="ln-main-btn"
                            onClick={handleClose}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ErrorModal = ({ show, handleClose }) => (
    <div
        className={`modal ${show ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: show ? "block" : "none" }}
        role="dialog"
    >
        <div className="modal-dialog" role="document">
            <div className="modal-content error-modal">
                <div className="modal-header">
                    <h5 className="modal-title">Error</h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={handleClose}
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <p>
                        There was an error submitting your request, Please try
                        again later.
                    </p>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
        <style jsx>{`
            .error-modal {
                border: 1px solid #dc3545;
                background-color: #f8d7da;
            }
            .error-modal .modal-header {
                background-color: #f5c6cb;
            }
            .error-modal .modal-title {
                color: #721c24;
            }
            .error-modal .modal-body {
                color: #721c24;
            }
        `}</style>
    </div>
);
