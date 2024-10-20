"use client";
import { redirect } from "next/navigation";
import "./ThumbButton.css";
import { useState } from "react";
export default function ThumbButton({ id, initial, handleClicks }) {
  const [likes, setLikes] = useState(initial);

  return (
    <>
      <div id="thumb-container">
        <button
          className="thumButton"
          onClick={() => {
            handleClicks();
            setLikes(1);
            redirect(`/readreviews/${id}`);
          }}
        >
          <i
            className={
              likes ? "fa-solid fa-thumbs-up green" : "fa-regular fa-thumbs-up"
            }
          ></i>
        </button>
        <div id="scale" className={`${likes ? "green" : null} ${"thumButton"}`}>
          {initial}
        </div>
      </div>
    </>
  );
}
