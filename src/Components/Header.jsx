import { Ribeye, Ribeye_Marrow } from "next/font/google";

export default function Header(props) {
  return (
    <>
      <h1 className={`${props.header} ${"font-normal text-6xl text-black"}`}>
        The Book Nook
      </h1>
    </>
  );
}
