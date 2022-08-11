import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-warning main-nav">
      <div className="container-fluid nav-container">
        <Link to="/">
          <h1>MovieFlix</h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
