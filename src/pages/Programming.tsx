export default function Programming() {
	return (
		<div className="programming">
			<div className="textbox">
				<div className="title">Portfolio</div>
				<div className="body">
					<div className="item">
						<img
							src="src/assets/dev-portfolio/everybody-math.png"
							className="photo em"
						/>
						<div className="text">
							<div className="header">Everybody Math</div>
							<a className="link" href="https://everybodymath.com/" target="blank">
								https://everybodymath.com/
							</a>
							<p className="description">
								I worked with a local company called Everybody
								Math as a part of a four person team for my
								senior software engineering capstone at BYU. I
								created a unique game for the site, complete
								with many different svg assets and animations. I
								made improvements to existing components on the
								site.
							</p>
						</div>
					</div>
					<div className="item">
						<img
							src="src/assets/dev-portfolio/myday.gif"
							className="photo md"
						/>
						<div className="text">
							<div className="header">MyDay</div>
							<a className="link" href="https://github.com/bertandfrogs/MyDay" target="blank">
								https://github.com/bertandfrogs/MyDay
							</a>
							<p className="description">
								I created a web application from scratch using
								React TS that lets users view and update their
								calendar (integrated with Google Calendar),
								to-do list, and track their habits and goals. It
								was originally a part of a group project which I
								further built upon as a personal project.
							</p>
						</div>
					</div>
          <div className="item">
            <img
							src="src/assets/dev-portfolio/ChatGPT.png"
							className="photo ai"
						/>
            <div className="text">
              <div className="header">AI SQL Project</div>
              <a href="https://github.com/bertandfrogs/byu-cs-452-class-content/blob/main/aisql/results.md" target="blank" className="link">results.md</a>
              <div className="description">
                Last year, I created a project for my databases class at BYU (CS 452) that integrated chatGPT with a SQLite database. The purpose was to experiment with natural language prompts
              </div>
            </div>
          </div>
				</div>
			</div>
		</div>
	);
}
