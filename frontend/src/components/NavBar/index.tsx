import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from '../../util/auth';
import { useContext, useEffect } from 'react';
import { removeAuthData } from '../../util/storage';
import history from '../../util/history';
import { AuthContext } from '../../AuthContext';

const NavBar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md bg-warning main-nav">
      <div className="container-fluid nav-container">
        <Link to="/movies">
          <h1>MovieFlix</h1>
        </Link>
        <div className="logout-container">
          {authContextData.authenticated && (
            <a href="#logout" onClick={handleLogoutClick}>
              Sair
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
