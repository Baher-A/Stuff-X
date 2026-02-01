import React from "react";
import Contact_with_us_image from "../../../public/contact with us .png";
import styles from "./page.module.css";
import Image from "next/image";
import SubmitNotification from "@/components/NotificationComp/SubmitNotification";
const tex = "Let's Keep in Touch";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Send Requests For webSite Manager",
};
const Contact = () => {
  return (
    <div className="flex-1 flex flex-col  gap-10  items-center justify-center relative container mx-auto ">
      <h1 className="text-6xl text-center text-Text-primary">{tex}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 items-center justify-center ">
        <div className="flex justify-center lg:p-10">
          <Image
            src={Contact_with_us_image}
            alt="Contact with us "
            className={`${styles.ContactImage} lg:w-[80%] `}
          />
        </div>
        <SubmitNotification />
      </div>
    </div>
  );
};

export default Contact;
