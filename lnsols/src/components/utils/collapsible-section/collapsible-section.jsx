import "./collapsible-section.css";

const CollapsibleSection = ({ heading, content }) => {
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
