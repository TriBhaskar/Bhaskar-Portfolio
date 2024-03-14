import { Outlet } from "react-router-dom";
import Header from "./Header";
import Herosection from "./Herosection";
import heroBgImg from "../assets/Waiau.png";

export default function Layout() {
  return (
    <>
      <section
        className="w-screen h-3/4 bg-cover bg-center bg-no-repeat bg-blend-color-dodge"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <Header></Header>
        <Herosection />
      </section>
      <Outlet></Outlet>
    </>
  );
}
