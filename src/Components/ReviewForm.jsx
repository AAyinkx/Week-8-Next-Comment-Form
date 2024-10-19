import { db } from "@/Utils/dbConnection";
import "./ReviewForm.css";
import { revalidatePath } from "next/cache";
//make sure redirect is from next/navigation
import { redirect } from "next/navigation";
export default function ReviewForm() {
  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      username: formValues.get("username"),
      title: formValues.get("title"),
      author: formValues.get("author"),
      rating: formValues.get("rating"),
      review: formValues.get("review"),
      src: formValues.get("src"),
      date: formValues.get("date"),
    };
    console.log(formData);
    await db.query(
      `INSERT INTO book_reviews (username, title, author, rating, review, src, date)
          VALUES ($1, $2, $3, $4, $5, $6, $7);
          `,
      [
        formData.username,
        formData.title,
        formData.author,
        formData.rating,
        formData.review,
        formData.src,
        formData.date,
      ]
    );
    //Refreshing the data on the reviews page
    revalidatePath("/readreviews");
  }
  return (
    <div id="form-container">
      <form id="the-form" action={handleSubmit}>
        <div className="form-section">
          <div className="title">
            <label htmlFor="username">Username</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Write your username"
              required
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="What book would you like to review?"
              required
            />
          </div>
        </div>

        <div className="form-section">
          <div className="title">
            <label htmlFor="author">Author Name</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="author"
              name="author"
              placeholder="What is the name of the Author?"
              required
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="rating">Rating</label>
          </div>
          <div className="input">
            <input
              type="number"
              min="1"
              max="5"
              id="rating"
              name="rating"
              placeholder="What would you rate the book out of 5 stars?"
              required
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="review">Your Review of the book</label>
          </div>
          <div className="input">
            <textarea
              id="review"
              name="review"
              placeholder="What did you think of the book?"
              required
            ></textarea>
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="src">Book Cover</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="src"
              name="src"
              placeholder="If you like, upload an image source for the cover of your book"
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="date">Date of Book Completion</label>
          </div>
          <div className="input">
            <input
              type="date"
              id="date"
              name="date"
              placeholder="What day did you finish reading your book?"
              required
            />
          </div>
        </div>
        <div className="form-section" id="submit">
          <button id="submit-button" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
