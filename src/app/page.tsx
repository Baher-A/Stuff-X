import React from "react";
import MainImage from "../../public/ss.webp";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 flex-1 sm:items-center">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl MainText">
          Better Design <br />
          for your Digital <br /> Products
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          Turning Data into Reality. We bring together the best team from the
          global tech industry.
        </p>

        <Link
          href="/blog"
          className="bg-primary px-6 py-2 rounded-xl w-fit font-bold hover:bg-primary-hover"
        >
          See Our Works
        </Link>
      </div>

      <div className="relative w-full h-75 md:h-100 lg:h-125 ">
        <Image
          src={MainImage}
          alt="Our Team Main Image"
          fill
          className="object-contain  ContactImage2"
        />
      </div>
    </div>
  );
};

export default Home;
