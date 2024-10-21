import { db } from "@/Utils/dbConnection";
import "./CommentForm.css";
import { revalidatePath } from "next/cache";
//make sure redirect is from next/navigation
import { redirect } from "next/navigation";

export default async function CommentForm(props) {
  //!Console tests
  // console.log("This is the " + parseInt(genreID.rows[0].id));
  // console.log(typeof genreID.rows[0].id);
  // console.log(parseInt(JSON.stringify(reviewID.rows[0].id)) + 1);

  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      username: formValues.get("username"),
      comment: formValues.get("comment"),
    };

    // console.log(formData);
    await db.query(
      `INSERT INTO comments (username, comment)
          VALUES ($1, $2);
          `,
      [formData.username, formData.comment]
    );
    const reviewID = props.id;
    //!Populating junction
    //Gets the id of the last item in the table (the one that was just added)
    const commentID = await db.query(`SELECT id FROM comments ORDER BY id DESC
  LIMIT 1;`);

    let commentInsert = parseInt(JSON.stringify(commentID.rows[0].id));
    let reviewInsert = reviewID;
    await db.query(
      `INSERT INTO reviews_comments (review_id, comment_id) VALUES ($1, $2)`,
      [reviewInsert, commentInsert]
    );

    //Refreshing the data on the reviews page
    revalidatePath(`/readreviews/${props.id}`);
    // formValues.reset();
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
            <label htmlFor="comment">Your Review of the book</label>
          </div>
          <div className="input">
            <textarea
              id="comment"
              name="comment"
              placeholder="What did you think of the book?"
              required
            ></textarea>
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
