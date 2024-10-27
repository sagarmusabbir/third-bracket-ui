import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="p-4 md:p-6 lg:p-8  mx-auto min-h-screen font-sans  bg-white dark:bg-gray-950">
      {/* <div className="flex items-center justify-center sticky top-0 z-50  px-4 py-2 backdrop-blur-md bg-opacity-20 w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white items-center ">
          Third Bracket UI
        </h1>
        <button
          onClick={toggleTheme}
          className="flex justify-center items-center m-auto  w-fit dark:bg-gray-800/50 bg-gray-800 hover:bg-gray-800 transition-color duration-200 ease-in-out px-4 py-1.5 text-xs rounded-md text-gray-50 font-semibold  "
        >
          Toggle Theme
        </button>
      </div> */}
      <section className="mb-8  p-4 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Colors
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* <!-- Primary --> */}
          <div className="p-4 text-white bg-gray-900">Primary (Light)</div>
          <div className="p-4 text-gray-900 bg-slate-100">Primary (Dark)</div>

          {/* <!-- Secondary --> */}
          <div className="p-4 bg-gray-700 text-slate-100">
            Secondary (Light)
          </div>
          <div className="p-4 bg-slate-300 text-gray-900">Secondary (Dark)</div>

          {/* <!-- Background --> */}
          <div className="p-4 bg-slate-100 text-gray-900">
            Background (Light)
          </div>
          <div className="p-4 bg-gray-900 text-slate-100">
            Background (Dark)
          </div>

          {/* <!-- Foreground --> */}
          <div className="p-4 bg-slate-300 text-gray-900">
            Foreground (Light)
          </div>
          <div className="p-4 bg-gray-700 text-slate-100">
            Foreground (Dark)
          </div>

          {/* <!-- Accent --> */}
          <div className="p-4 bg-emerald-500 text-white">Accent (Light)</div>
          <div className="p-4 bg-emerald-300 text-gray-900">Accent (Dark)</div>
        </div>
      </section>
      <section className="mb-8  p-4 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Typography
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            This is Heading One: H1
          </h1>
          <h2 className="text-2xl md:text-3xl xl:text-4xl  font-bold tracking-tight text-gray-900 dark:text-white">
            This is Heading Two: H2
          </h2>
          <h3 className="text-xl md:text-2xl xl:text-3xl  font-semibold tracking-tight text-gray-900 dark:text-white">
            This is Heading Three: H3
          </h3>
          <h4 className="text-lg md:text-xl xl:text-2xl  font-semibold tracking-tight text-gray-900 dark:text-white">
            This is Heading Four: H4
          </h4>
          <h5 className="text-base md:text-lg xl:text-xl  font-semibold tracking-tight text-gray-900 dark:text-white">
            This is Heading Five: H5
          </h5>
          <h6 className="text-base md:text-lg xl:text-xl  font-medium tracking-tight text-gray-900 dark:text-white">
            This is Heading Six: H6
          </h6>
          <div >
            <p className="text-base leading-relaxed text-gray-900 dark:text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      <section className="p-4 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Buttons
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Varients
        </h3>
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

      <section className=" p-4 ">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Sizes
        </h3>
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
