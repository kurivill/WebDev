import { Link } from "react-router-dom";

function Navbar({ setIsAuthenticated, isAuthenticated }) {
  const handleClick = () => {
    // remove user from storage
    sessionStorageStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <nav>
      {isAuthenticated && (
        <div>
          <span>Welcome</span>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Link to="/login">Login</Link>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
