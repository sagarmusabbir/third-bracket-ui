// app/ui/Footer.tsx
import React from "react";
import Link from "next/link";

import Image from "next/image";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { FooterProps } from "./types";

export const Footer: React.FC<FooterProps> = ({
  brandLogo,
  links,

  className = "",
}) => {
  return (
    <footer
      className={`border-t border-dashed border-slate-400/20 dark:border-gray-600/40 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
            {/* Company Info Section - Takes 4 columns */}
            <div className="md:col-span-4 space-y-3">
              {/* Brand Section */}
              <Link href={brandLogo.href}>
                <Image
                  src={brandLogo.src}
                  alt={brandLogo.alt}
                  width={40}
                  height={40}
                  className="h-6 w-auto dark:invert opacity-80 hover:opacity-100 ease-in-out duration-300 transition-opacity"
                />
              </Link>

              {/* Company Description */}

              <p>
                340 Dickenson Road, M130NG, Manchester, UK
                <br />
                hi@thirdbracket.co.uk
                <br />
                +44 7425 694261
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {/* Add your social media icons/links here */}
                {/* Example: */}
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIN</span>
                  <RiLinkedinFill className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <RiFacebookFill className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Github</span>
                  <RiGithubFill className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Github</span>
                  <RiWhatsappFill className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Navigation Sections */}
            {links.map((section) => (
              <div key={section.path} className="md:col-span-2">
                <h6>{section.label}</h6>
                <ul className="mt-4 space-y-3">
                  {section.children?.map((link) => (
                    <li key={link.id}>
                      <Link href={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-dashed border-slate-400/20 dark:border-gray-600/40 py-8">
          <p className="text-center ">
            © {new Date().getFullYear()} Thirdbracket UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
