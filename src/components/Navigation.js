import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/Home">
        Home
      </Link>
    </div>
  );
};

export default Navigation;
