// // ThemeToggle.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { RiMoonFill, RiSunFill } from "react-icons/ri";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     }
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const toggleTheme = () => {
//     if (theme === "light") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setTheme("light");
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center justify-center  rounded-md hover:bg-slate-50 p-2 dark:hover:bg-gray-900 transition-colors duration-300 order-first md:order-last"
//       aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
//     >
//       {theme === "light" ? (
//         <RiMoonFill className="w-4 h-4 fill-gray-500" />
//       ) : (
//         <RiSunFill className="w-4 h-4  fill-slate-400" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;
