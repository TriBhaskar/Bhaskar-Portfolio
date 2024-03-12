import { NavLink } from "react-router-dom";

export default function Header({ children }) {
  return (
    <header className="m-0 p-8 flex justify-center items-center">
      <div id="header-title" className="flex items-center gap-6">
        <nav>
          <ul className="">
            <li>
              <NavLink
                to="/"
                //   className={({ isActive }) =>
                //     isActive ? classes.active : undefined
                //   }
                //   end
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <nav>{children}</nav>
    </header>
  );
}
