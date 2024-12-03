// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   RiFacebookFill,
//   RiGithubFill,
//   RiLinkedinFill,
//   RiWhatsappFill,
// } from "react-icons/ri";
// import { FooterProps } from "./types";

// export const Footer: React.FC<FooterProps> = ({
//   brand,
//   links,
//   className = "",
// }) => {
//   return (
//     <footer className={`bg-white dark:bg-gray-900 ${className}`}>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
//             {/* Brand Column */}
//             <div className="md:col-span-2 lg:col-span-6">
//               <Link href={brand.href}>
//                 <Image
//                   src={brand.src}
//                   alt={brand.alt}
//                   width={150}
//                   height={40}
//                   className="h-10 w-auto"
//                 />
//               </Link>
//               <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
//                 {brand.info.description}
//               </p>
//               <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
//                 {brand.info.address && <p>{brand.info.address}</p>}
//                 {brand.info.phone && <p>Phone: {brand.info.phone}</p>}
//                 {brand.info.email && <p>Email: {brand.info.email}</p>}
//               </div>
//               {/* Social Links */}
//               <div className="mt-6 flex space-x-4">
//                 {brand.social.linkedin && (
//                   <Link
//                     href={brand.social.linkedin}
//                     className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="sr-only">LinkedIn</span>
//                     <RiLinkedinFill className="h-5 w-5" />
//                   </Link>
//                 )}
//                 {brand.social.facebook && (
//                   <Link
//                     href={brand.social.facebook}
//                     className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="sr-only">Facebook</span>
//                     <RiFacebookFill className="h-5 w-5" />
//                   </Link>
//                 )}
//                 {brand.social.github && (
//                   <Link
//                     href={brand.social.github}
//                     className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="sr-only">GitHub</span>
//                     <RiGithubFill className="h-5 w-5" />
//                   </Link>
//                 )}
//                 {brand.social.whatsapp && (
//                   <Link
//                     href={brand.social.whatsapp}
//                     className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="sr-only">WhatsApp</span>
//                     <RiWhatsappFill className="h-5 w-5" />
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* Navigation Links */}
//             {links.map((section) => (
//               <div key={section.id} className="md:col-span-1 lg:col-span-2">
//                 <h6 className="text-sm font-semibold text-gray-900 dark:text-white">
//                   {section.label}
//                 </h6>
//                 {section.children && (
//                   <ul className="mt-4 space-y-3">
//                     {section.children.map((link) => (
//                       <li key={link.id}>
//                         <Link
//                           href={link.path}
//                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
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

//         {/* Copyright Section */}
//         <div className="border-t border-gray-200 dark:border-gray-700 py-8">
//           <p className="text-center text-sm text-gray-500 dark:text-gray-400">
//             © {new Date().getFullYear()} {brand.info.companyName}. All rights
//             reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

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
export const Footer: React.FC<FooterProps> = ({
  brand,
  links,
  className = "",
}) => {
  return (
    <footer className={`bg-white dark:bg-black   ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 border-t border-dashed border-gray-200 dark:border-gray-800">
        {/* Main Content Section */}
        <div className="pb-12 lg:pb-16 ">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 ">
            {/* Brand Column - Takes 1/3 width on large screens */}
            <div className="lg:w-1/3 max-w-md">
              <Link href={brand.href}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={150}
                  height={40}
                  className="h-8 w-auto dark:invert"
                />
              </Link>
              <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
                {brand.info.description}
              </p>
              <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {brand.info.address && <p>{brand.info.address}</p>}
                {brand.info.phone && <p>Phone: {brand.info.phone}</p>}
                {brand.info.email && <p>Email: {brand.info.email}</p>}
              </div>
            </div>

            {/* Navigation Links - Takes 2/3 width on large screens */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
                {links.map((section) => (
                  <div key={section.id}>
                    <h6 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {section.label}
                    </h6>
                    {section.children && (
                      <ul className="mt-6 space-y-4">
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
          </div>
        </div>

        {/* Copyright Section with Social Icons */}
        <div className="border-t border-dashed border-gray-200 dark:border-gray-800">
          <div className="py-8 flex  justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} {brand.info.companyName}. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end space-x-4 mt-4 md:mt-0 px-2 rounded-lg border border-dashed border-gray-200 text-gray-600  dark:text-gray-400 dark:border-gray-800">
              {brand.social.linkedin && (
                <Link
                  href={brand.social.linkedin}
                  className="hover:text-gray-800 dark:hover:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <RiLinkedinLine className="h-4 w-4 fill-gray-400" />
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
                  <RiFacebookLine className="h-4 w-4" />
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
                  <RiGithubLine className="h-4 w-4" />
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
                  <RiWhatsappLine className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
