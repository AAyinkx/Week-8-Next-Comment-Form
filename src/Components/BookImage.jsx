"use client";
import Image from "next/image";
import defaultImage from "@/../public/image-not-available.png";
import { useState } from "react";
export default function BookImage(props) {
  const [src, setSrc] = useState(defaultImage);

  return (
    <>
      <Image
        alt={`Book cover of ${props.title} `}
        src={src}
        onError={(e) => {
          setSrc(props.default);
        }}
        height={350}
        width={200}
      ></Image>
    </>
  );
}
