import BackgroundAnimation from "./BackgroundAnimation";
import Navbar from "./Navbar";
import Social from "./Social";

export default function Profile() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl ">
          <a href="">Bhaskar Panthri</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium text-[#8d8dff] tracking-tight text- sm:text-xl">
          Junior Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Backend Engineer with React Flair: Building robust systems & exploring
          UIs. Explore my projects!
        </p>
        <Navbar />
        <div>
          <BackgroundAnimation />
        </div>
      </div>
      <Social />
    </header>
  );
}
