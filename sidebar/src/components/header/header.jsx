import React from "react";

const Header = () => {
	return (
		<nav className="navbar fixed-top navbar-dark bg-dark">
			<div className="container-fluid mx-5">
				<a className="navbar-brand mx-5">Logo</a>
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-secondary" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

export default Header;
