import heroBgImg from "../assets/Waiau.png";
import { Link } from "react-router-dom";

// Herosection component
export default function Herosection() {
  return (
    // Hero section container
    <section
      className="content-section"
      id="overview-section"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    >
      <h2>
        adding header <br />
        or <strong>find a new passion</strong>
      </h2>
      <p>Anyone can organize and join events on React Event!</p>
      <p>
        {/* Link to create a new event */}
        <Link to="/events/new" className="button">
          Create your first event
        </Link>
      </p>
    </section>
  );
}
