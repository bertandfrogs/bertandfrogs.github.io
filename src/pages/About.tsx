export default function About() {
	return (
		<div className="about">
			<div className="textbox">
				{/* <div className="title">About Me</div> */}
				<div className="bio">
					<img
						src="./src/assets/nice-selfie.jpg"
						alt="photo of Sarah"
					/>
					<div className="body">
						<p>
							Hey, nice to meet you, I'm Sarah!
              </p>
              <p> 
              I recently graduated from BYU with a bachelor's degree in
							Computer Science.
						</p>
						<div className="interests">
							<p>Some of my favorite things include:</p>
							<ul>
								<li>Birds</li>
								<li>Video Games</li>
								<li>Music</li>
								<li>Technology</li>
								<li>Art</li>
							</ul>
						</div>
						<p>
							I grew up in Utah and currently live in Lehi with my
							husband Spencer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
