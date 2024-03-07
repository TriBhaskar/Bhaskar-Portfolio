import { Outlet } from "react-router-dom";
import Header from "./Header";
import Herosection from "./Herosection";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <main>
        <Herosection />
      </main>
    </>
  );
}
