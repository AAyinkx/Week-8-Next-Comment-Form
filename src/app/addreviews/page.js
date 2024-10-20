import ReviewForm from "@/Components/ReviewForm";
export const metadata = {
  title: "Add Reviews",
  description: "Add a book review and contribut to my library",
};
export default function AddReviews() {
  return (
    <>
      <h1 className="text-red-900 text-4xl pt-4 pb-4">
        <i className="fa-solid fa-pencil fa-flip-horizontal"></i> Add Review
      </h1>
      <ReviewForm />
    </>
  );
}
