import Link from "next/link";
import emptyShelf from "../../public/empty-Bookshelf.png";
import Image from "next/image";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div id="not-found">
      <h2>Uh-Oh! There are no books in this library yet 😔</h2>
      <Link className="links" href="/">
        <i className="fa-solid fa-house"></i> Back Home
      </Link>
      <br />
      <Image
        alt="empty bookshelf"
        id="empty-bookshelf"
        src={emptyShelf}
      ></Image>
    </div>
  );
}
