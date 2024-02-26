import React from "react";
// import MyCar from "./mycar";
import Sidebar from "../sidebar/sidebar";
const Body = () => {
	const menuItems = [
		{
			id: 1,
			name: "Home",
			url: "/",
		},
		{
			id: 2,
			name: "Clients",
			url: "/clients",
		},
		{
			id: 3,
			name: "Testimonials",
			url: "testimonials",
		},
		{
			id: 4,
			name: "About",
			url: "about",
		},
		{
			id: 5,
			name: "Careers",
			url: "careers",
		},
	];
	return (
		<div className="body">
			<div className="sidebar">
				<Sidebar menuItems={menuItems} />
			</div>
			<div className="main-content"></div>
		</div>
	);
};

export default Body;
