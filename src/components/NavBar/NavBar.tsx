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
    <div className=" flex justify-between lg:justify-evenly  items-center lg:container mx-auto sm:p-2 bg-navbar-surface md:bg-transparent rounded-xl  ">
      <Link
        href={"/"}
        className={`text-3xl font-bold py-4 px-2 cursor-pointer text-primary focus:text-primary-hover focus:outline-hidden ${LimelightFont.className}`}
      >
        Stuff <strong className="text-accent-hover">-</strong> X
      </Link>

      <div className="flex gap-5 items-center   ">
        <div className="hidden lg:flex gap-5 ">
          {NavBar_Links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.Url}
                aria-label={link.Name}
                className={`py-4 px-2 hover:text-primary-hover focus:text-primary-hover focus:outline-hidden font-bold    transition-colors duration-1000`}
              >
                {link.Name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-5 lg:block">
          <SignedIn>
            <div className="pt-2 lg:pt-0">
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="cursor-pointer text-primary font-bold hover:text-primary-hover focus:text-primary-hover focus:outline-hidden p-2 ">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <div className="lg:hidden block">
            <Navigation_Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
