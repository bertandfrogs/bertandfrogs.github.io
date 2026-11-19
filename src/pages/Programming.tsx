export default function Programming() {
  return (
    <div className="programming">
      <div className="textbox">
        <div className="title">Portfolio</div>
        <div className="body">
          <div className="item">
            <img
              src="./assets/dev-portfolio/everybody-math.png"
              className="photo em"
            />
            <div className="text">
              <div className="header">Everybody Math</div>
              <a
                className="link"
                href="https://everybodymath.com/"
                target="blank"
              >
                https://everybodymath.com/
              </a>
              <p className="description">
                I worked with a local company called Everybody Math as a part of
                a four person team for my senior software engineering capstone
                at BYU. I created a unique game for the site, complete with many
                different svg assets and animations. I made improvements to
                existing components on the site.
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="./assets/dev-portfolio/pixel-pint-home.png"
              alt=""
              className="photo md"
            />
            <div className="text">
              <div className="header">Pixel Pint</div>
              <a
                href="https://spencer-scw.github.io/pixel-pint/"
                className="link"
                target="blank"
              >
                https://spencer-scw.github.io/pixel-pint/
              </a>
              <p className="description">
                My husband Spencer and I built a minimalist, web-based pixel art
                drawing application designed for both mobile and desktop. It
                auto-saves drawings to your device's local storage. The features
                are simple, but as an artist, they're what I thought was most
                important for doodling on my phone.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="./assets/dev-portfolio/myday.gif" className="photo md" />
            <div className="text">
              <div className="header">MyDay</div>
              <a
                className="link"
                href="https://github.com/bertandfrogs/MyDay"
                target="blank"
              >
                https://github.com/bertandfrogs/MyDay
              </a>
              <p className="description">
                I created a web application from scratch using React TS that
                lets users view and update their calendar (integrated with
                Google Calendar), to-do list, and track their habits and goals.
                It was originally a part of a group project which I further
                built upon as a personal project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
