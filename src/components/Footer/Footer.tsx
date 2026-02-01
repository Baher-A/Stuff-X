import React from "react";

import { SocialMediaIcons } from "../../Data/ScocialmediaIcons";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex lg:justify-evenly justify-between items-center ">
      <p className="px-2 py-4 md:text-sm opacity-50 text-xs">
        @All Copyright Saved in ExioOooOo
      </p>
      <div className="px-2 py-4 text-sm  flex gap-3">
        {SocialMediaIcons.map((Icons) => {
          return (
            <Link
              key={Icons.id}
              href={"/"}
              aria-label={Icons.name}
              className="w-7 h-7 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-hidden transition-all duration-500"
            >
              <Image
                src={Icons.imagge}
                alt={Icons.name}
                className="object-contain"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
