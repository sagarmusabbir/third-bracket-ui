"use client";

import Button from "@/components/Button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <main className="p-4 md:p-6 lg:p-8 max-w-screen-xl mx-auto min-h-screen font-sans bg-white dark:bg-gray-950 ">
      <button
        onClick={toggleTheme}
        className="flex justify-center items-center m-auto text-lg w-fit dark:bg-gray-800/50 bg-gray-800 hover:bg-gray-800 transition-color duration-200 ease-in-out py-3 px-10 rounded-lg text-gray-50 font-semibold "
      >
        Toggle Theme
      </button>

      <section className="mb-8  p-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Varients
        </h1>
        <div className="flex flex-wrap gap-2">
          <Button variant="solid" size="md" color="light" href="#">
            My Button
          </Button>
          <Button variant="solid" size="md" color="dark" href="#">
            My Button
          </Button>
          <Button variant="outline" size="md" color="light" href="#">
            My Button
          </Button>
          <Button variant="outline" size="md" color="dark" href="#">
            My Button
          </Button>
        </div>
      </section>

      <section className="mb-8 p-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Sizes
        </h1>
        <div className="flex flex-wrap gap-2  items-start">
          <Button variant="solid" size="sm" color="light" href="#">
            My Button
          </Button>

          <Button variant="outline" size="md" color="light" href="#">
            My Button
          </Button>
          <Button variant="solid" size="lg" color="light" href="#">
            My Button
          </Button>
          <Button variant="outline" size="xl" color="light" href="#">
            My Button
          </Button>
        </div>
      </section>
    </main>
  );
}
