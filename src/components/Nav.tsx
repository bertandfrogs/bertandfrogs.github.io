import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav">
			<div className="logo">
				<img
					className="logo_img"
					src="./src/assets/self-portrait.png"
				></img>
				<div className="logo_text">
					<NavLink className="link" to="/">
						Sarah Smalley
					</NavLink>
				</div>
			</div>
			<div className="nav_links">
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