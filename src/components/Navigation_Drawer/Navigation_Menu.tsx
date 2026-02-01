"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NavBar_Links } from "@/Data/NavBarLinks";

import Link from "next/link";
import { Inter } from "next/font/google";

import { Menu } from "lucide-react";
const InterFont = Inter({
  subsets: ["latin"],
  weight: "400",
});
const Navigation_Menu = () => {
  return (
    <Drawer direction="right">
      {/* <NavBar_Menu /> */}
      <DrawerTrigger className="lg:hidden" asChild>
        <Menu size={35} />
      </DrawerTrigger>

      <DrawerContent className="py-4 px-4 space-y-3 lg:hidden">
        <DrawerHeader className="px-1 py-0">
          <DrawerTitle className="text-Text-primary text-center">
            NavBar:
          </DrawerTitle>
          <DrawerDescription className="hidden">
            This action cannot be undone.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col justify-evenly  gap-3  ">
          {NavBar_Links.map((link) => (
            <Link
              key={link.id}
              href={link.Url}
              className={`py-5 font-bold ${InterFont.className} hover:text-primary-hover transition-colors duration-300 inline-flex gap-3 `}
            >
              <link.Icon className="text-accent" />
              {link.Name}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Navigation_Menu;
