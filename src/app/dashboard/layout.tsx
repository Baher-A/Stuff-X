import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ".././globals.css";

import Side_Bar_Comp from "@/components/Side_Bar/Side_Bar_Comp";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Only Admin Role Can Make Any Action in This Page",
};
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="mt-15 z-2 ">
      <Side_Bar_Comp />
      <main className="container mx-auto  ">
        <SidebarTrigger className="cursor-pointer mt-10 md:mt-0 " />
        {children}
      </main>
    </SidebarProvider>
  );
}
