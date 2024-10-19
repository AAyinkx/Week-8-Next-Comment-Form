import { db } from "@/Utils/dbConnection";
import { dateISOtoLocal } from "@/Utils/dateFormat";
import Image from "next/image";
import defaultImage from "@/../public/image-not-available.png";
import "../ReadReviews.module.css";
export default async function ReadReviews() {
  const reviews = await db.query(`SELECT * FROM book_reviews`);
  console.log(reviews);
  const wrangledReviews = reviews.rows;

  function StarNumber(number) {
    switch (number) {
      case 2:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
      case 3:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
      case 4:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
      case 5:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </>
        );

      default:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
    }
  }
  return (
    <>
      <h1 id="read-reviews-title">
        <i className="fa-solid fa-book-bookmark"></i> Reviews
      </h1>
      <div id="review-container">
        {wrangledReviews.reverse().map((review) => (
          <div key={review.id} className="review">
            <div className="book-cover">
              <Image
                src={defaultImage}
                alt={`A book review of ${review.title}`}
                width={200}
                height={350}
              />
            </div>
            <div className="main-review">
              <div className="date">
                {dateISOtoLocal(JSON.stringify(review.date))}
              </div>
              {console.log(JSON.stringify(review.date))}

              <div className="username">{review.username}</div>
              <div className="title-author">
                {review.title}, <em>{review.author}</em>
              </div>
              <div className="rating-stars">{StarNumber(review.rating)}</div>
              <div className="book-review">{review.review}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
