/* eslint-disable react/no-unescaped-entities */
import projImg from "../assets/Waiau.png";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
export default function Content() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24 text-slate-400">
      {/* About me */}
      <About />
      {/* Work experience */}
      <Experience />
      {/* Projects */}
      <Project />
      <section
        id="wrtiting"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Blog posts"
      >
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <img
                  alt="Telescope"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                  style={{ color: "transparent" }}
                  src={projImg}
                />
                <div className="z-10 col-span-6">
                  <p className="-mt-1 text-sm font-semibold leading-6">2024</p>
                  <h3 className="-mt-1">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-color1 focus-visible:text-color1  group/link text-base"
                      // href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Developing an app for astrology readings and
                        compatibility insights.
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          Loosely designed in
          <a
            href="https://www.figma.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Figma (opens in a new tab)"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            Visual Studio Code
          </a>{" "}
          by yours truly. Built with{" "}
          <a
            href="https://nextjs.org/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Next.js (opens in a new tab)"
          >
            Next.js
          </a>{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tailwind CSS (opens in a new tab)"
          >
            Tailwind CSS
          </a>
          , deployed with
          <a
            href="https://vercel.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Vercel (opens in a new tab)"
          >
            Vercel
          </a>
          . All text is set in the{" "}
          <a
            href="https://rsms.me/inter/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Inter (opens in a new tab)"
          >
            Inter
          </a>{" "}
          typeface.
        </p>
      </footer> */}
    </main>
  );
}
