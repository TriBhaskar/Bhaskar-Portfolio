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
      ></section>
    </main>
  );
}
