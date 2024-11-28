// components/ui/Card.tsx
import Link from "next/link";
import { AnimatedGrid } from "../ui/AnimatedGrid";
import { CardProps } from "@/lib/types";
import { RiExternalLinkFill } from "react-icons/ri";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ header, skeleton, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="relative group rounded-xl overflow-hidden border-dashed bg-slate-50/50 dark:bg-gray-950/30 backdrop-blur-2xl border border-slate-400/20 dark:border-gray-600/40 transition-all duration-300 hover:bg-slate-200/50 dark:hover:bg-gray-800/30 "
    >
      {/* Grid Pattern Container */}
      <div className="absolute inset-0 ">
        <AnimatedGrid />
        {/* Gradient Overlay - Fades out the grid pattern */}
        <div
          className="absolute inset-0 bg-gradient-to-b 
         dark:from-gray-950/30
         from-slate-50/50
           
          
          via-slate-50
          to-slate-50
         
          dark:via-gray-950 
          dark:to-gray-950 
          transition-opacity duration-300"
        />
      </div>

      {/* Card Content */}

      <div className="relative z-10  flex flex-col ">
        {/* Card Header */}
        <div className="  p-4     rounded-t-xl flex items-center justify-between  ">
          <h6>{header}</h6>
          <RiExternalLinkFill />
        </div>
        {/* Card Body - SVG Icon */}
        <div className="row-span-4    w-full aspect-video relative  group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 rounded-b-2xl ">
          <Image
            src={skeleton.src}
            alt={skeleton.alt}
            fill
            className="object-cover  group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
