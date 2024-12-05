"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { FooterProps } from "./types";

import { NewsLetterSubscribe } from "../../blocks/NewsLetterSubscribe";

export const Footer: React.FC<FooterProps> = ({
  brand,
  links,
  className = "",
}) => {
  return (
    <footer className={`    ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6   ">
        {/* Newsletter Section - Before the main footer content */}

        {/* Main Content Section */}
        <div className="py-16 border-t border-dashed   border-b border-slate-200 dark:border-gray-800">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 ">
            {/* Brand Column - Takes 1/3 width on large screens */}
            <div className="lg:w-1/4 space-y-4 max-w-md">
              <Link
                href={brand.href}
                className="group w-auto  transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-90  "
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={140}
                  height={24}
                  className=" dark:invert"
                ></Image>
              </Link>
              <p className=" text-base text-gray-600 dark:text-gray-400 max-w-xs">
                {brand.info.description}
              </p>
              <div className=" text-sm text-gray-600 dark:text-gray-400">
                {brand.info.address && <p>{brand.info.address}</p>}
                {brand.info.phone && <p>Phone: {brand.info.phone}</p>}
                {brand.info.email && <p>Email: {brand.info.email}</p>}
              </div>
            </div>

            {/* Navigation Links - Takes 2/3 width on large screens */}
            <div className="">
              <div className="grid grid-cols-2 lg:flex gap-8">
                {links.map((section) => (
                  <div key={section.id}>
                    <h6 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {section.label}
                    </h6>
                    {section.children && (
                      <ul className="mt-6 space-y-4 whitespace-nowrap">
                        {section.children.map((link) => (
                          <li key={link.id}>
                            <Link
                              href={link.path}
                              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/4 space-y-4">
              {/* <NewsLetterSubscribe /> */}
              <NewsLetterSubscribe
                endpoint="/api/newsletter/subscribe"
                onSuccess={(data) => {
                  console.log(`${data.email} subscribed successfully`);
                }}
                onError={(error) => {
                  console.error("Subscription failed:", error);
                }}
              />
            </div>
          </div>
        </div>

        {/* Copyright Section with Social Icons */}
        <div className="py-4 ">
          <div className=" flex  justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400  text-left">
              © {new Date().getFullYear()} {brand.info.companyName}.
            </p>

            {/* Social Links */}
            <div className="flex items-center  justify-between space-x-4 px-4   rounded-lg border border-dashed border-gray-200 text-gray-600  dark:text-gray-400 dark:border-gray-800">
              {brand.social.linkedin && (
                <Link
                  href={brand.social.linkedin}
                  className="hover:text-gray-800 dark:hover:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <RiLinkedinLine className="h-4 w-4 " />
                </Link>
              )}
              {brand.social.facebook && (
                <Link
                  href={brand.social.facebook}
                  className="hover:text-gray-800 dark:hover:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <RiFacebookLine className="h-4 w-4 " />
                </Link>
              )}
              {brand.social.github && (
                <Link
                  href={brand.social.github}
                  className="hover:text-gray-800 dark:hover:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <RiGithubLine className="h-4 w-4 " />
                </Link>
              )}
              {brand.social.whatsapp && (
                <Link
                  href={brand.social.whatsapp}
                  className="hover:text-gray-800 dark:hover:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <RiWhatsappLine className="h-4 w-4 " />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// // packages/core/src/components/Footer/Footer.tsx
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   RiFacebookLine,
//   RiGithubLine,
//   RiLinkedinLine,
//   RiWhatsappLine,
// } from "react-icons/ri";
// import { FooterProps } from "./types";
// import { NewsLetterSubscribe } from "../../blocks/NewsLetterSubscribe";

// export const Footer: React.FC<FooterProps> = ({
//   brand,
//   links,
//   className = "",
// }) => {
//   return (
//     <footer className={`bg-white dark:bg-black   ${className}`}>
//       <div className="py-12  container mx-auto px-4 max-w-7xl  sm:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
//           <div className="col-span-1 lg:col-span-2">
//             {/* Logo and brand section */}
//             {/* <NewsLetterSubscribe /> */}

//             <div>
//               <Link href={brand.href}>
//                 <Image
//                   src={brand.src}
//                   alt={brand.alt}
//                   width={150}
//                   height={40}
//                   className="h-8 w-auto dark:invert"
//                 />
//               </Link>
//               <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
//                 {brand.info.description}
//               </p>
//               <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
//                 {brand.info.address && <p>{brand.info.address}</p>}
//                 {brand.info.phone && <p>Phone: {brand.info.phone}</p>}
//                 {brand.info.email && <p>Email: {brand.info.email}</p>}
//               </div>
//             </div>
//           </div>
//           {/* //lg:flex-row flex flex-col */}
//           <div className="col-span-1 lg:col-span-2 lg:flex-row flex flex-col gap-12  ">
//             {links.map((section) => (
//               <div key={section.id} className="space-y-4">
//                 <h6 className="text-base   font-semibold      capitalize">
//                   {section.label}
//                 </h6>

//                 {section.children && (
//                   <ul className="space-y-4 whitespace-nowrap">
//                     {section.children.map((link) => (
//                       <li key={link.id}>
//                         <Link
//                           href={link.path}
//                           className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
//                         >
//                           {link.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className=" ">
//           <div className="py-8">
//             <NewsLetterSubscribe />
//           </div>
//           <div className="py-8 flex  justify-between">
//             <p className="text-sm text-gray-500 dark:text-gray-400  text-left">
//               © {new Date().getFullYear()} {brand.info.companyName}.
//             </p>

//             {/* Social Links */}
//             <div className="flex items-center  justify-between space-x-4 px-4   rounded-lg border border-dashed border-gray-200 text-gray-600  dark:text-gray-400 dark:border-gray-800">
//               {brand.social.linkedin && (
//                 <Link
//                   href={brand.social.linkedin}
//                   className="hover:text-gray-800 dark:hover:text-slate-200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <RiLinkedinLine className="h-4 w-4 " />
//                 </Link>
//               )}
//               {brand.social.facebook && (
//                 <Link
//                   href={brand.social.facebook}
//                   className="hover:text-gray-800 dark:hover:text-slate-200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                 >
//                   <RiFacebookLine className="h-4 w-4 " />
//                 </Link>
//               )}
//               {brand.social.github && (
//                 <Link
//                   href={brand.social.github}
//                   className="hover:text-gray-800 dark:hover:text-slate-200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="GitHub"
//                 >
//                   <RiGithubLine className="h-4 w-4 " />
//                 </Link>
//               )}
//               {brand.social.whatsapp && (
//                 <Link
//                   href={brand.social.whatsapp}
//                   className="hover:text-gray-800 dark:hover:text-slate-200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="WhatsApp"
//                 >
//                   <RiWhatsappLine className="h-4 w-4 " />
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
