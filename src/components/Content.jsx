export default function Content() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      {/* About me */}
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            praesentium eligendi reprehenderit quo, atque quis nemo asperiores
            laborum porro similique officiis tenetur deleniti excepturi facere
            ab! Cumque molestiae iure laborum neque odio sint fugiat rem non ea
            harum quaerat at quia suscipit soluta mollitia, velit nihil repellat
            corporis impedit esse unde inventore nostrum aperiam porro. Fuga
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            praesentium eligendi reprehenderit quo, atque quis nemo asperiores
            laborum porro similique officiis tenetur deleniti excepturi facere
            ab! Cumque molestiae iure laborum neque odio sint fugiat rem non ea
            harum quaerat at quia suscipit soluta mollitia, velit nihil repellat
            corporis impedit esse unde inventore nostrum aperiam porro. Fuga
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ab!
            Cumque molestiae iure laborum neque odio sint fugiat rem non ea
            harum quaerat at quia suscipit soluta mollitia, velit nihil repellat
            corporis impedit esse unde inventore nostrum aperiam porro. Fuga
          </p>
        </div>
      </section>
      {/* Work experience */}
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2024 to Present"
                >
                  2024 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    Junior Software Engineer
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Build and maintain critical components used to construct
                    Klaviyo’s frontend, across the whole product. Work closely
                    with cross-functional teams, including developers,
                    designers, and product managers, to implement and advocate
                    for best practices in web accessibility.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Storybook
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
