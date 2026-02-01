import { UserProfile } from "@clerk/nextjs";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Profile",
  description: "Manage User Settings",
};
const page = () => {
  return (
    <div className="flex justify-center items-center ">
      <UserProfile />
    </div>
  );
};

export default page;
