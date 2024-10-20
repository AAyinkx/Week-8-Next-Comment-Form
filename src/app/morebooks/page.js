import bookData from "@/lib/bookData.json";
import Link from "next/link";
import styles from "../MoreBooks.module.css";
export default function MoreBooks({ searchParams }) {
  if (searchParams.sort === "asc-title") {
    bookData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (searchParams.sort === "desc-title") {
    bookData.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    bookData;
  }
  if (searchParams.sort === "asc-author") {
    bookData.sort((a, b) => a.author.localeCompare(b.author));
  } else if (searchParams.sort === "desc-author") {
    bookData.sort((a, b) => b.author.localeCompare(a.author));
  } else {
    bookData;
  }
  return (
    <>
      <h1 className={styles.moreBooksTitle}>
        <i className="fa-solid fa-book-open"></i> More Books
      </h1>
      <h2 className={styles.sort}>
        SORT BY <b>Title Name</b>
      </h2>
      <Link className={styles.sortTags} href={`/morebooks?sort=asc-title`}>
        <i className="fa-solid fa-sort-up"></i> Sort ASC
      </Link>
      <Link className={styles.sortTags} href={`/morebooks?sort=desc-title`}>
        <i className="fa-solid fa-sort-down"></i> Sort DESC
      </Link>
      <h2 className={styles.sort}>
        SORT BY <b>Author Name</b>
      </h2>
      <Link className={styles.sortTags} href={`/morebooks?sort=asc-author`}>
        <i className="fa-solid fa-sort-up"></i> Sort ASC
      </Link>
      <Link className={styles.sortTags} href={`/morebooks?sort=desc-author`}>
        <i className="fa-solid fa-sort-down"></i> Sort DESC
      </Link>
      {bookData.map((book) => (
        <h3 className="text-3xl" key={book.id}>
          {book.title}, <em>{book.author}</em>
        </h3>
      ))}
    </>
  );
}
