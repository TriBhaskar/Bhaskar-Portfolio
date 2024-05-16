import bgImg from "../assets/bgmountain.svg";
import Content from "./Content";
import Profile from "./Profile";
export default function Layout() {
  return (
    <>
      <section
        className="min-h-screen bg-[#0f1624] bg-cover bg-center bg-no-repeat bg-blend-color-dodge"
        // style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="mx-auto min-h-screen backdrop-blur-md max-w-screen-xl px-6 py-12 md: px-12 md: py-20 lg: px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Profile />
            <Content />
          </div>
        </div>
      </section>
    </>
  );
}
