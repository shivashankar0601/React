import "./collapsible-section.css";

const CollapsibleSection = ({ heading, content }) => {
    const toggle = (e) => {
        // Get the current accordion element
        const accordion = e.currentTarget.closest(".accordion");

        if (accordion) {
            // Find the immediate children with the class "accordion-collapse"
            const collapseElement = accordion.querySelector(
                ".accordion-collapse"
            );

            // Toggle the "collapse" class
            if (collapseElement) {
                collapseElement.classList.toggle("collapse");
            }
        }
    };

    // return (
    //     <div className="ln-single-faq wow fadeInUp" data-wow-delay=".1s">
    //         <div
    //             className="accordion"
    //             onMouseOver={toggle}
    //             onMouseLeave={toggle}
    //         >
    //             <button className="ln-faq-btn collapsed" onClick={toggle}>
    //                 <span className="icon flex-shrink-0">
    //                     <i className="lni lni-chevron-down" />
    //                 </span>
    //                 <span>{heading}</span>
    //             </button>
    //             <div id="collapseOne" className="accordion-collapse collapse">
    //                 {content.map((paragraph, i) => (
    //                     <div key={i} className="ln-faq-body">
    //                         {paragraph}
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="ln-collapsible-card wow fadeInUp" data-wow-delay=".25s">
            <h2 className="ln-collapsible-heading">{heading}</h2>
            <div className="ln-collapsible-content">
                {content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default CollapsibleSection;
