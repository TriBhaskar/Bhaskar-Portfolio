/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 "
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Back in the last year of my undergraduate studies in computer science,
          I delved into the world of web development, learning HTML, CSS, basic
          JavaScript, jQuery, and PHP while working on my final semester
          project. Fast-forward to my third semester of my Masters program
          (MCA), I developed an e-commerce mobile app within 15 days, marking my
          first significant project. Shortly after, I secured my first full-time
          job as a Junior Software Engineer at Giesecke & Devrient.
        </p>
        <p className="mb-4">
          During the last semester of my masters, I gained practical experience
          as a Flutter Developer Intern at Mirror Infotech for three months.
          This opportunity paved the way for my role at Giesecke & Devrient. My
          main focus now is to expand my technological expertise, develop more
          software and applications, and transition into a full-stack developer.
          Recently, I learned React and have a solid foundation in Node.js,
          Java, Spring, and Spring Boot, which I leverage to create full-stack
          applications.
        </p>
        <p>
          What I enjoy most is problem-solving and developing new features.
          Although I havent released any notable side projects yet, I'm
          currently working on one that I’m excited about. Outside of work, I
          indulge in digital art, a passion of mine, and enjoy playing PC games
          and reading when I find the time.
        </p>
      </div>
    </section>
  );
}
