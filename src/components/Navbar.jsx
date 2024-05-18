import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    // const navLinks = document.querySelectorAll(".nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveItem(id);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max text-slate-400">
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeItem === "about" ? "active" : ""
            }`}
            href="#about"
            onClick={() => handleItemClick("about")}
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeItem === "experience" ? "active" : ""
            }`}
            href="#experience"
            onClick={() => handleItemClick("experience")}
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeItem === "projects" ? "active" : ""
            }`}
            href="#projects"
            onClick={() => handleItemClick("projects")}
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
