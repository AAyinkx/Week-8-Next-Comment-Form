import Image from "next/image";
import bookshelf2 from "@/../public/bookshelf2.png";
import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.homeTitle}>
        <i className="fa-solid fa-house"></i> Home
      </h1>
      <div className={styles.mainTextContainer}>
        <h2 className={styles.introText}>
          Think about that book sitting on your shelf. It&apos;s more than just
          a collection of words waiting for you—inside those pages, an entire
          world is waiting to be discovered. A world where the characters
          you&apos;ve yet to meet are living their lives, facing challenges, or
          uncovering secrets. Imagine this: the moment you open the book, time
          will stand still, and you&apos;ll step into a new reality. Whether
          it&apos;s adventure, wisdom, or escape you&apos;re craving, this book
          is the key to unlocking something unexpected. The last page you turn
          might just change the way you see everything. So, what are you waiting
          for? Dive in, because the story is incomplete without you.
        </h2>
      </div>

      <Image
        className={styles.mainBookshelf}
        src={bookshelf2}
        alt="Bookshelf filled with books and other nick nacks"
        width={300}
        height={300}
      ></Image>
    </div>
  );
}
