import { db } from "@/Utils/dbConnection";
import { dateISOtoLocal } from "@/Utils/dateFormat";
import Image from "next/image";
import defaultImage from "@/../public/image-not-available.png";
import styles from "../ReadReview.module.css";
import { StarNumber } from "@/Utils/starCount";
import ThumbButton from "@/Components/ThumbButton";
import { revalidatePath } from "next/cache";
//make sure redirect is from next/navigation
import { redirect } from "next/navigation";
export const metadata = {
  title: "Read Reviews",
  description: "Read Reviews Posted by other people",
};
export default async function ReadReviews({ params }) {
  const reviews = await db.query(`SELECT * FROM book_reviews ORDER BY id;`);

  console.log(reviews);
  const wrangledReviews = reviews.rows;

  return (
    <>
      <h1 className={styles.readReviewsTitle}>
        <i className="fa-solid fa-book-bookmark"></i> Reviews
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
                Read more about {review.title} reviewed by &apos;
                <em>{review.username}</em>&apos;
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
      </div>
    </>
  );
}
