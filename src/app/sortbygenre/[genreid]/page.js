import { db } from "@/Utils/dbConnection";
import { dateISOtoLocal } from "@/Utils/dateFormat";
import Image from "next/image";
import defaultImage from "@/../public/image-not-available.png";
import styles from "../../ReadReview.module.css";
import { StarNumber } from "@/Utils/starCount";
import Empty from "@/Components/Empty";
export default async function GenreID({ params }) {
  const genre = await db.query(
    `SELECT id, genre_name FROM genres_of_books WHERE id=${params.genreid}`
  );
  const wrangledGenre = genre.rows[0].id;
  console.log("This is the data you seek ", wrangledGenre);
  const reviews = await db.query(
    `SELECT book_reviews.id, book_reviews.username, book_reviews.title, book_reviews.author, book_reviews.rating, book_reviews.review,  book_reviews.date FROM book_reviews
JOIN reviews_genres ON reviews_genres.review_id = book_reviews.id
JOIN genres_of_books ON genres_of_books.id = reviews_genres.genre_id WHERE reviews_genres.genre_id = $1`,
    [wrangledGenre]
  );
  console.log(reviews.rowCount);
  const wrangledReviews = reviews.rows;
  return (
    <>
      <h1 className={styles.readReviewsTitle}>
        <i className="fa-solid fa-book"></i> {genre.rows[0].genre_name}
      </h1>
      <div className={styles.reviewContainer}>
        {wrangledReviews.reverse().map((review) => (
          <div key={review.id} className={styles.review}>
            <div className={styles.bookCover}>
              <Image
                src={defaultImage}
                alt={`A book review of ${review.title}`}
                width={200}
                height={350}
              />
              <a className={styles.readMore} href={`/readreviews/${review.id}`}>
                Read more about {review.title} reviewed by {review.username}
              </a>
            </div>
            <div className={styles.mainReview}>
              <div className={styles.date}>
                {dateISOtoLocal(JSON.stringify(review.date))}
              </div>

              <div className={styles.username}>{review.username}</div>
              <div className={styles.titleAuthor}>
                {review.title}, <em>{review.author}</em>
              </div>
              <div className={styles.ratingStars}>
                {StarNumber(review.rating)}
              </div>
              <div className={styles.bookReview}>{review.review}</div>
            </div>
          </div>
        ))}
        <Empty rows={reviews.rowCount} />
      </div>
    </>
  );
}
