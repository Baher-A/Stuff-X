import Image from "next/image";
import Link from "next/link";
import React from "react";
import MeetingImage from "../../../public/Metting.jpg";
import styles from "./page.module.css";
const About = () => {
  return (
    <div className="flex-1 flex flex-col gap-10  container mx-auto">
      <div className="relative  ">
        <Image
          src={MeetingImage}
          alt="Meeting Image With Team"
          className={styles.MainImage}
        />
        <div className="absolute bottom-2 left-2 bg-[#53c28b] px-4 py-2 flex  flex-col gap-1 rounded-md">
          <h1 className="text-2xl text-[#EDEDED]">Digital StoryTeller </h1>
          <h2 className="text-[#EDEDED]">
            Hand crafting aware wining digital exprience
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-2">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl text-[#EDEDED]">Who Are we ?</h1>
          <p className="text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            mollitia, dolor sunt natus voluptatem, asperiores optio nesciunt
            similique,
            <br />
            <br />
            vel possimus nemo dignissimos officiis repellat doloribus. Corporis
            laborum maiores dicta veniam ipsam iusto praesentium nulla expedita.
            Voluptatum adipisci nihil qui quas ipsum animi expedita illum.
            Dolore molestias ipsa atque nihil excepturi nisi.
            <br />
            <br />
            Similique illum sequi voluptate consequuntur eligendi fugit, omnis,
            repudiandae neque odit accusantium reprehenderit harum. Vel mollitia
            illo reiciendis, ratione veritatis nisi fuga blanditiis sapiente?
            Atque illum, magnam saepe vitae,
            <br /> numquam corrupti placeat suscipit iste doloribus eos sed in?
            <br />
            <br />
            Officiis adipisci tenetur repudiandae molestiae ex culpa atque
            dignissimos dolor unde!
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl text-[#EDEDED]">What We Do ?</h1>
          <p className="text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            mollitia, dolor sunt natus voluptatem, asperiores optio nesciunt
            similique,
            <br />
            <br />
            vel possimus nemo dignissimos officiis repellat doloribus. Corporis
            laborum maiores dicta veniam ipsam iusto praesentium nulla expedita.
            Voluptatum adipisci nihil qui quas ipsum animi expedita illum.
            Dolore molestias ipsa atque nihil excepturi nisi.
            <br />
            <br />
            -Creative Design
            <br />
            <br />
            -Dynamic WebSite
            <br />
            <br />
            -Fast And Handy Mobile App
          </p>
          <Link
            href={"/blog"}
            className="bg-primary hover:bg-primary-hover text-Text-primary font-bold  px-6 py-2 rounded-2xl w-fit cursor-pointer accent-[#1F2937]"
          >
            See Our Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
