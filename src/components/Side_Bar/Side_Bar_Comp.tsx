import React from "react";
import "@/app/globals.css";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FilePlusCorner, Home, Mails, Settings } from "lucide-react";
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import Link from "next/link";

const Side_Bar_Page_Links = [
  {
    name: "Home",
    href: "/dashboard",
    Icons: Home,
  },
  {
    name: " Blogs",
    href: "/dashboard/blogs",
    Icons: FilePlusCorner,
  },

  {
    name: "Requests",
    href: "/dashboard/clients-requests",
    Icons: Mails,
  },
  { name: "Settings", href: "/dashboard/settings", Icons: Settings },
];

const Side_Bar_Comp = () => {
  return (
    <Sidebar className=" max-w-50 border-accent-foreground rounded-2xl pt-[7%] lg:pt-0  ">
      <SidebarContent>
        <SidebarGroup className="space-y-5 ">
          <SidebarGroupLabel>Admin Dash Board</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-5">
              {Side_Bar_Page_Links.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton size={"lg"} className=" py-5" asChild>
                    <Link href={item.href}>
                      <item.Icons className="stroke-2 text-primary " />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Side_Bar_Comp;
