import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbark-dark bg-dark">
      <a href={"/tutorials"} className="navbar-brand">
        jagokode
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/tutorials"} className="nav-link">
            Tutorials
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add-tutorial"} className="nav-link">
            Add Tutorial
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Header;
