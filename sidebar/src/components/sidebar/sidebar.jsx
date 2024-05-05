import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css"; // Import the CSS file for styling

const Sidebar = ({ menuItems }) => {
    const [expanded, setExpanded] = useState(true);
    const [activeItem, setActiveItem] = useState(1);

    const toggleActive = (item) => {
        setActiveItem(item.id);
    };

    return (
        <div className={`sidebar ${expanded ? "expanded" : "collapsed"}`}>
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`nav-item ${
                            item.id === activeItem ? "active" : ""
                        }`}
                        onClick={() => toggleActive(item)}
                    >
                        <div className="menu-item">
                            <a
                                href="#"
                                className="nav-link text-white"
                                aria-current="page"
                            >
                                <FontAwesomeIcon icon={item.icon} />
                                <span
                                    className={`label ${
                                        !expanded ? "d-none" : ""
                                    }`}
                                >
                                    {item.name}
                                </span>
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
