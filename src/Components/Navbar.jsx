"use client";

import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [dropdownClass, setDropdownClass] = useState("false");

  function dropFunction() {
    setDropdownClass(!dropdownClass);
  }
  return (
    <>
      <div className="nav">
        <div className="navbar">
          <Link href="/">
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <Link href="/readreviews">
            <i className="fa-solid fa-book-bookmark"></i> Reviews
          </Link>
          <Link href="/addreviews">
            <i className="fa-solid fa-pencil fa-flip-horizontal"></i> Add Review
          </Link>
          <Link href="/morebooks">
            <i className="fa-solid fa-book-open"></i> More Books
          </Link>
        </div>
        <div className="dropdown">
          <i className="fa fa-bars" id="dropbtn" onClick={dropFunction}></i>
          <div
            className={
              dropdownClass ? "dropdown-content" : "show dropdown-content"
            }
            id="myDropdown"
          >
            <Link href="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link href="/readreviews">
              <i className="fa-solid fa-book-bookmark"></i> Reviews
            </Link>
            <Link href="/addreviews">
              <i className="fa-solid fa-pencil fa-flip-horizontal"></i> Add
              Review
            </Link>
            <Link href="/morebooks">
              <i className="fa-solid fa-book-open"></i> More Books
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
