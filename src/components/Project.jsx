/* eslint-disable react/no-unescaped-entities */
import projImg from "../assets/Waiau.png";
import Images from "../assets/Images";
export default function Project() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-color1 focus-visible:text-color1  group/link text-base"
                    // href=""
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Build a Spotify Connected App (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Event Management
                      <span className="inline-block">
                        App
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
                <p className="mt-2 text-sm leading-normal">
                  Built a user-friendly event management app to streamline your
                  schedule. Effortlessly create, edit, and sort events based on
                  your needs. The intuitive interface, powered by React, keeps
                  you organized while the robust Node.js backend ensures
                  everything runs smoothly.
                </p>
              </div>
              <img
                alt="Build a Spotify Connected App Newline course marketing card"
                loading="lazy"
                // width="200"
                // height="58"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                // srcSet="../assets/Waiau.png&amp;w=256&amp;q=75 1x, ../assets/Waiau.png&amp;w=640&amp;q=75 2x"
                src={Images.events1}
              ></img>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-color1 focus-visible:text-color1  group/link text-base"
                    // href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Build a Spotify Connected App (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      MobiPharama
                      <span className="inline-block">
                        App
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
                <p className="mt-2 text-sm leading-normal">
                  Built MobiPharama, a one-stop shop for all your medical needs.
                  Order ayurveda, babycare, skincare, and more, delivered
                  straight to your door. Our user-friendly app (Flutter)
                  integrates seamlessly with Firebase (backend & Firestore
                  database) for a smooth and secure experience. Login, register,
                  and pay online - it's that easy!
                </p>
              </div>
              <img
                alt="Build a Spotify Connected App Newline course marketing card"
                loading="lazy"
                // width="200"
                // height="58"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                // srcSet="../assets/Waiau.png&amp;w=256&amp;q=75 1x, ../assets/Waiau.png&amp;w=640&amp;q=75 2x"
                src={Images.mobiPharama1}
              ></img>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-color1 focus-visible:text-color1 group/link text-base"
                    // href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Build a Spotify Connected App (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Shikafood
                      <span className="inline-block">
                        App
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
                <p className="mt-2 text-sm leading-normal">
                  Skip the menus, savor the food! Shikafood delivers with a
                  user-friendly React web app. Browse menus, find hidden gems,
                  and order your favorites - all with a sleek, intuitive
                  interface. Shikafood: food delivery, simplified.
                </p>
              </div>
              <img
                alt="Build a Spotify Connected App Newline course marketing card"
                loading="lazy"
                width="200"
                height="48"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                // srcSet="../assets/Waiau.png&amp;w=256&amp;q=75 1x, ../assets/Waiau.png&amp;w=640&amp;q=75 2x"
                src={Images.shikafood}
              ></img>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-color1 focus-visible:text-color1 group/link text-base"
                    // href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Build a Spotify Connected App (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Epharma Store
                      <span className="inline-block">
                        App
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
                <p className="mt-2 text-sm leading-normal">
                  Epharma delivers! This Django web app (SQLite database)
                  simplifies medical shopping. Browse categories, order
                  supplies, and manage your account - all with Django's built-in
                  security and user features.
                </p>
              </div>
              <img
                alt="Build a Spotify Connected App Newline course marketing card"
                loading="lazy"
                width="200"
                height="48"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                // srcSet="../assets/Waiau.png&amp;w=256&amp;q=75 1x, ../assets/Waiau.png&amp;w=640&amp;q=75 2x"
                src={Images.ePharma}
              ></img>
            </div>
          </li>
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline leading-tight text-slate-200 hover:text-color1 focus-visible:text-color1 font-semibold group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Project
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
        </div>
      </div>
    </section>
  );
}
