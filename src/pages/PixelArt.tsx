import { useState } from "react";
import gallery from "../../public/assets/pixel-art/gallery.json";

export default function PixelArt() {
	interface ArtObj {
		title: string;
		filename: string;
		date: string;
		program: string;
		comments: string;
		featured: boolean;
		category: string;
	}

	const [sortDescending, setSortDescending] = useState(true)

	const sortedGallery = gallery.sort((art1, art2) => {
		return sortDescending ? Date.parse(art2.date) - Date.parse(art1.date) : Date.parse(art1.date) - Date.parse(art2.date)
	})

	const images = sortedGallery.map((art: ArtObj) => (
		<div className="artwork">
			<img src={"./assets/pixel-art/images/" + art.filename} alt="" />
			<div className="details">
				<h4 className="title">{art.title}</h4>
				<p className="date">{art.date}</p>
				<p className="program">{art.program}</p>
			</div>
		</div>
	));

	return (
		<div className="pixelart">
			<div className="button" onClick={() => setSortDescending(!sortDescending)}>{sortDescending ? (<i className="bi bi-sort-down">Newest First</i>) : (<i className="bi bi-sort-up">Oldest First</i>)}</div>
			<div className="gallery">{images}</div>
		</div>
	);
}
