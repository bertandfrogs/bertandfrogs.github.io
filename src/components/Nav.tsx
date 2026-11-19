import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	// close the mobile menu whenever the route changes
	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	// close the mobile menu with the Escape key
	useEffect(() => {
		if (!menuOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [menuOpen]);

	return (
		<nav className={"nav" + (menuOpen ? " nav--open" : "")}>
			<div className="logo">
				<img
					className="logo_img"
					src="./assets/self-portrait.png"
					alt=""
				></img>
				<div className="logo_text">
					<NavLink className="link" to="/">
						Sarah Smalley
					</NavLink>
				</div>
			</div>
			<button
				className="nav_toggle"
				type="button"
				aria-label={menuOpen ? "Close menu" : "Open menu"}
				aria-expanded={menuOpen}
				aria-controls="nav-links"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<i className={"bi " + (menuOpen ? "bi-x-lg" : "bi-list")}></i>
			</button>
			<div className="nav_links" id="nav-links">
				{/* <NavLink className="link" to="/about">
					About
				</NavLink> */}
				<NavLink className="link" to="/programming">
					Programming
				</NavLink>
				{/* <NavLink className="link" to="/av-tech">
					AV Tech
				</NavLink>
				<NavLink className="link" to="/origami">
					Origami
				</NavLink> */}
				<NavLink className="link" to="/pixel-art">
					Pixel Art
				</NavLink>
				<NavLink className="link" to="/contact">
					Contact
				</NavLink>
			</div>
		</nav>
	);
}
