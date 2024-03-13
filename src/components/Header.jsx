import { NavLink } from "react-router-dom";

export default function Header({ children }) {
  return (
    <header className="m-0 p-8 flex justify-center items-center">
      <div id="header-title" className="flex items-center gap-6">
        <div>
          <NavLink to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/event-website-logo-img.png"
              alt="website logo"
            />
          </NavLink>
        </div>
        <div></div>
      </div>
      <nav>{children}</nav>
    </header>
  );
}
