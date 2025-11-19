import gallery from "../../public/assets/pixel-art/gallery.json";

export default function PixelArt() {
  interface ArtObj {
    title: string,
    filename: string,
    date: string,
    program: string,
    comments: string
  }

	return (
		<div className="pixelart">
      {/* <div className="textbox">
        <div className="title">Pixel Art</div>
        <ul className="list">
          <li className="item">
            Avian August
          </li>
        </ul>
      </div>
			<div className="textbox description">
				<div className="title">Avian August</div>
				<div className="body">
					<p>
						I love birds! This was a fun challenge for myself: every
						day in the month of August, I drew a new bird.
					</p>
					<p>
						I didn't limit the number of colors I used for each
						bird, but the size of each image is 64x64 pixels.
					</p>
					<p>
						Each bird of the day was my "featured bird of the day"
						from my birdwatching app, Merlin (from Cornell
						University)
					</p>
					<p>
						I love how I can see how much I improved over the course
						of a month of drawing.
					</p>
				</div>
			</div> */}
			<div className="gallery">
        {gallery.map((art: ArtObj) => (
          <div className="artwork">
            <img src={"./assets/pixel-art/images/" + art.filename} alt="" />
            <div className="details">
              <h4 className="title">{art.title}</h4>
              <p className="date">{art.date}</p>
              <p className="program">{art.program}</p>
              {/* {art.comments != "" && (
                <p className="comments">{art.comments}</p>
              )} */}
            </div>
          </div>
        ))}
      </div>
		</div>
	);
}
