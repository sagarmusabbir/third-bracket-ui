import Link from "next/link";
import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import Image from "next/image";

export interface CardProps {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  href: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  href,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`
        block group
        rounded-lg 
        border
        border-slate-200 
        
        shadow-sm 
        transition-all 
        duration-200
        hover:border-slate-300
        hover:shadow-md border-dashed
        dark:border-slate-700 
        
        dark:hover:border-slate-600
        ${className}
      `}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <div className="p-4 flex item-center justify-between text-slate-900 dark:text-slate-100">
            <h6>{title}</h6>
            <RiExternalLinkFill />

            {description && (
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            )}
          </div>
          {/* <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          /> */}
          <Image
            src={image.src}
            alt={image.alt}
            width={320}
            height={180}
            className="object-cover  group-hover:scale-105 transition-transform duration-200 w-full h-auto"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </Link>
  );
};

export default Card;