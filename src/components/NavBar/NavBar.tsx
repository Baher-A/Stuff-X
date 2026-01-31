import Link from "next/link";
import React from "react";
import { Limelight } from "next/font/google";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Navigation_Menu from "../Navigation_Drawer/Navigation_Menu";
import { NavBar_Links } from "@/Data/NavBarLinks";
const LimelightFont = Limelight({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
  return (
    <div className=" flex justify-between lg:justify-evenly  items-center lg:container mx-auto sm:p-2 bg-[#1E1E1A] md:bg-transparent rounded-xl  ">
      <Link
        href={"/"}
        className={`text-3xl font-bold py-4 px-2 cursor-pointer text-[#2FBF84] ${LimelightFont.className}`}
      >
        Stuff <strong className="text-accent-hover">-</strong> X
      </Link>

      <div className="lg:flex gap-5 items-center hidden ">
        {NavBar_Links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.Url}
              aria-label={link.Name}
              className={`py-4 px-2 hover:text-primary-hover  font-bold    transition-colors duration-1000`}
            >
              {link.Name}
            </Link>
          );
        })}

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="cursor-pointer text-primary font-bold hover:text-primary-hover p-2 ">
              Sing in
            </button>
          </SignInButton>
        </SignedOut>
      </div>

      {/* In Small Devicies  */}

      <div className="lg:hidden flex items-center gap-5  ">
        <div>
          <SignedIn>
            <div className="pt-2">
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="cursor-pointer text-primary font-bold hover:text-primary-hover p-2 ">
                Sing in
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        <Navigation_Menu NavBar_Links={NavBar_Links} />
      </div>
    </div>
  );
};

export default NavBar;
