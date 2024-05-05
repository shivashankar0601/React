import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css"; // Import the CSS file for styling

const Sidebar = ({ menuItems }) => {
    const [expanded, setExpanded] = useState(true);
    const [activeItem, setActiveItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleActive = (item) => {
        setActiveItem(item.id === activeItem ? null : item.id);
    };

    return (
        <div className={`${expanded ? "expanded" : "collapsed"}`}>
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`nav-item ${
                            item.id === activeItem ? "active" : ""
                        }`}
                        onClick={() => toggleActive(item)}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="menu-item">
                            <a
                                href="#"
                                className="nav-link text-white p-3"
                                aria-current="page"
                            >
                                <FontAwesomeIcon icon={item.icon} />
                                {expanded || hoveredItem === item.id ? (
                                    <span className="label">{item.name}</span>
                                ) : null}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
            <div
                className="toggle-button"
                onClick={() => setExpanded(!expanded)}
            >
                <FontAwesomeIcon
                    icon={expanded ? "chevron-left" : "chevron-right"}
                />
            </div>
        </div>
    );
};

export default Sidebar;
