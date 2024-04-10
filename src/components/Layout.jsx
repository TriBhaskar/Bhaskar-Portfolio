import bgImg from "../assets/stacked-peaks-haikei.svg";
import Content from "./Content";
import Profile from "./Profile";
export default function Layout() {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-blend-color-dodge"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md: px-12 md: py-20 lg: px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4 backdrop-blur-3xl">
            <Profile />
            <Content />
          </div>
        </div>
      </section>
    </>
  );
}
