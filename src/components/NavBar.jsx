import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">David Davis</h1>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}
