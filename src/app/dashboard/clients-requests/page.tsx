import ContactRequests from "@/components/Contact_Requests/ContactRequests";
import { Get_All_Keep_In_Touch_Requests } from "@/lib/db";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Requests",
  description: "Manage User Requests",
};
const Stay_In_Touch_Requests = async () => {
  const Data = await Get_All_Keep_In_Touch_Requests();
  return (
    <div className=" mx-auto">
      <ContactRequests Data={Data} />
    </div>
  );
};

export default Stay_In_Touch_Requests;
