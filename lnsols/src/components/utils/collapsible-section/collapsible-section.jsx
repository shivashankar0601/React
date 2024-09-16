import "./collapsible-section.css";

const CollapsibleSection = ({ section }) => {
    return (
        <div class="collapsible-card">
            <h2 class="collapsible-heading">{section.heading}</h2>
            <div class="collapsible-content">
                {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default CollapsibleSection;
