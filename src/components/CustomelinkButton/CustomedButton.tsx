import Link from "next/link";
import React from "react";

const CustomedButton = () => {
  return (
    <div>
      {" "}
      <Link
        href={"/blog"}
        className="bg-[#53c28b] text-[#EEE]  px-6 py-2 rounded-2xl w-fit cursor-pointer"
      >
        See Our Works
      </Link>
    </div>
  );
};

export default CustomedButton;
