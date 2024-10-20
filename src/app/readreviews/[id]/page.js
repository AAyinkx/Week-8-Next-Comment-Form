import { db } from "@/Utils/dbConnection";
import Image from "next/image";
import styles from "../../IndividualReview.module.css";
import defaultImage from "@/../../public/image-not-available.png";
import { dateISOtoLocal } from "@/Utils/dateFormat";
import { StarNumber } from "@/Utils/starCount";
import CommentForm from "@/Components/CommentForm";
export default async function IndividualReview({ params }) {
  const review = await db.query(
    `SELECT * FROM book_reviews WHERE id=${params.id}`
  );
  const wrangledReview = review.rows;
  console.log("This is the data " + wrangledReview[0].title);

  const comments =
    await db.query(`SELECT comments.id, comments.username, comments.comment FROM comments
JOIN reviews_comments ON reviews_comments.comment_id = comments.id
JOIN book_reviews ON book_reviews.id = reviews_comments.review_id WHERE reviews_comments.review_id = ${params.id}`);
  const wrangledComments = comments.rows;

  return (
    <>
      <div className={styles.reviewContainer}>
        {wrangledReview.reverse().map((review) => (
          <div key={review.id} className={styles.review}>
            <div className={styles.bookCover}>
              <Image
                src={defaultImage}
                alt={`A book review of ${review.title}`}
                width={200}
                height={350}
              />
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
      <CommentForm id={params.id} />

      <div className={styles.commentContainer}>
        {wrangledComments.reverse().map((comment) => (
          <div key={comment.id}>
            <h2 className={styles.commentUsername}>{comment.username}</h2>
            <p className={styles.comment}>{comment.comment}</p>
          </div>
        ))}
      </div>
      <a className={styles.link} href={`/readreviews`}>
        Return to main reviews
      </a>
    </>
  );
}
