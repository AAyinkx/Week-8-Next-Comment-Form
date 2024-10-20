import Link from "next/link";
import emptyShelf from "../../public/empty-Bookshelf.png";
import Image from "next/image";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div id="not-found">
      <h2>Uh-Oh! There are no books in this library</h2>
      <Link href="/">
        <i className="fa-solid fa-house"></i> Back Home
      </Link>
      <Link href="/sortbygenre">
        <i class="fa-solid fa-magnifying-glass"></i> Back to Genres
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
