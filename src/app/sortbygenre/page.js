import { db } from "@/Utils/dbConnection";
import { dateISOtoLocal } from "@/Utils/dateFormat";
import Image from "next/image";
import defaultImage from "@/../public/image-not-available.png";
import styles from "../SortByGenre.module.css";
import { StarNumber } from "@/Utils/starCount";

export default async function ReadReviews() {
  const genres = await db.query(`SELECT * FROM genres_of_books`);
  const wrangledGenres = genres.rows;

  return (
    <>
      <h1 className={styles.readReviewsTitle}>
        <i class="fa-solid fa-magnifying-glass"></i> Sort by genre
      </h1>
      <div className={styles.genreContainer}>
        {wrangledGenres.map((genre) => (
          <div className={styles.genre} key={genre.id}>
            <a href={`/sortbygenre/${genre.id}`}>{genre.genre_name}</a>
          </div>
        ))}
      </div>
    </>
  );
}
