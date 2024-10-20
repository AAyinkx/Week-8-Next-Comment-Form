"use client";

import "./DeleteButton.css";
export default function DeleteButton({ commentId, handleDelete }) {
  return (
    <>
      <div id="delete-container">
        <button
          className="deleteButton"
          onClick={() => {
            handleDelete(commentId);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </>
  );
}
