import "./ThumbButton.css";
export default function ThumbButton(props) {
  return (
    <>
      <div id="thumb-container">
        <button>
          <i className="fa-regular fa-thumbs-up"></i>
        </button>
        <div>{props.likeCount}</div>
      </div>
    </>
  );
}
