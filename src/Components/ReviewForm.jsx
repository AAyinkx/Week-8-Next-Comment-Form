import { db } from "@/Utils/dbConnection";
import "./ReviewForm.css";
import { revalidatePath } from "next/cache";
//make sure redirect is from next/navigation
import { redirect } from "next/navigation";
export default async function ReviewForm() {
  //!Console tests
  // console.log("This is the " + parseInt(genreID.rows[0].id));
  // console.log(typeof genreID.rows[0].id);
  // console.log(parseInt(JSON.stringify(reviewID.rows[0].id)) + 1);
  async function handleSubmit(formValues) {
    "use server";
    let bgColour = { default: "#d5b48b" };
    const formData = {
      username: formValues.get("username"),
      title: formValues.get("title"),
      author: formValues.get("author"),
      genre: formValues.get("genre"),
      rating: formValues.get("rating"),
      review: formValues.get("review"),
      src: formValues.get("src"),
      date: formValues.get("date"),
    };
    console.log(formData);
    await db.query(
      `INSERT INTO book_reviews (username, title, author, genre, rating, review, src, date)
          VALUES ($1, $2, $3, $4, $5, $6, $7,$8);
          `,
      [
        formData.username,
        formData.title,
        formData.author,
        formData.genre,
        formData.rating,
        formData.review,
        formData.src,
        formData.date,
      ]
    );
    const genreID = await db.query(
      `SELECT id FROM genres_of_books WHERE genre_name=$1`,
      [formData.genre]
    );
    //!Populating junction
    //Gets the id of the last item in the table (the one that was just added)
    const reviewID =
      await db.query(`SELECT id FROM book_reviews ORDER BY id DESC
  LIMIT 1;`);
    console.log(`This is what you're looking for 
      ${parseInt(JSON.stringify(reviewID.rows[0].id))}
      ${genreID.rows[0].id}`);
    let reviewInsert = parseInt(JSON.stringify(reviewID.rows[0].id));
    let genreInsert = genreID.rows[0].id;
    await db.query(
      `INSERT INTO reviews_genres (review_id, genre_id) VALUES ($1, $2)`,
      [reviewInsert, genreInsert]
    );
    //Refreshing the data on the reviews page
    revalidatePath("/readreviews");
    redirect("/readreviews");
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
            <label htmlFor="genre">Book genre:</label>
          </div>

          <select name="genre" required>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Literary Fiction">Literary Fiction</option>
            <option value="Adventure">Adventure</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Magical Realism">Magical Realism</option>
            <option value="Crime">Crime</option>
            <option value="Contemporary">Contemporary</option>
            <option value="Paranormal">Paranormal</option>
            <option value="Young Adult (YA)">Young Adult (YA)</option>

            <option value="Biography">Biography</option>
            <option value="Memoir">Memoir</option>
            <option value="Self-Help">Self-Help</option>
            <option value="History">History</option>
            <option value="Science">Science</option>
            <option value="True Crime">True Crime</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Psychology">Psychology</option>
            <option value="Travel">Travel</option>
            <option value="Essay Collections">Essay Collections</option>
            <option value="Cookbooks">Cookbooks</option>
            <option value="Business">Business</option>
            <option value="Health & Wellness">Health & Wellness</option>
            <option value="Spirituality & Religion">
              Spirituality & Religion
            </option>
            <option value="Politics & Current Affairs">
              Politics & Current Affairs
            </option>
          </select>
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
