import { useState, React } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
	const [activeItem, setActiveItem] = useState(1);
	const [expanded, setExpanded] = useState(true);
	const toggleActive = (event, item) => {
		// event.target.parentElement.classList.toggle("active");
		setActiveItem(item.id);
	};

	return (
		<div
			className={"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark " + (expanded ? "expanded" : "")}
			style={{ width: "80px", height: "calc(100vh - 114px)" }}
			bis_skin_checked="1"
		>
			<span className="toggle-button" onClick={() => setExpanded(!expanded)}>
				{/* <i className="fa-solid fa-angle-left"></i> */}

				<svg viewBox="0 0 320 512" className="toggle-button-svg">
					{expanded ? (
						<path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
					) : (
						<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
					)}
				</svg>
			</span>
			<ul className="nav nav-pills flex-column mb-auto">
				{props.menuItems.map((item) => (
					<li key={item.id} className={"nav-item " + (item.id === activeItem ? "active" : "")} onClick={(event) => toggleActive(event, item)}>
						<a href="#" className="nav-link text-white p-3" aria-current="page">
							{/* <svg className="bi me-2" width="16" height="16">
								<use xlink:href="#people-circle"></use>
							</svg> */}
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
