export default function NotFound() {
  return (
    <div className="not-found">
      <div className="textbox">
        <div className="title">Page Not Found</div>
        <p>
          <a href="/" className="link">
            Back to Home Page
          </a>
        </p>

        <img
          src="/assets/question_mark.jpg"
          alt="drawing of a confused toucan"
        />
      </div>
    </div>
  );
}
