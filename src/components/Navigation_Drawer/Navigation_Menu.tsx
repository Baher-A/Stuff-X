import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Inter } from "next/font/google";
const InterFont = Inter({
  subsets: ["latin"],
  weight: "400",
});
const Navigation_Menu = ({
  NavBar_Links,
}: {
  NavBar_Links: { id: number; Name: string; Url: string; Icon: typeof Menu }[];
}) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Menu size={35} />
      </DrawerTrigger>

      <DrawerContent className="py-4 px-4 space-y-3">
        <DrawerHeader className="px-1 py-0">
          <DrawerTitle>NavBar:</DrawerTitle>
          <DrawerDescription className="hidden">
            This action cannot be undone.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col justify-end gap-3  ">
          {NavBar_Links.map((link) => (
            <Link
              key={link.id}
              href={link.Url}
              className={`py-2 font-bold ${InterFont.className} hover:text-primary-hover transition-colors duration-300 inline-flex gap-3`}
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
