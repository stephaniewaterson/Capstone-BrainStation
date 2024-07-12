import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar({ user, checkIsLoggedIn }) {
  // delete token from stroage then call check if logged in

  function handleClick() {
    sessionStorage.clear();
    checkIsLoggedIn();
  }

  return (
    <section className="nav">
      <ul className="nav__items">
        <div className="nav__left">
          <li>
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/chat">
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/blog">
              Choose Country
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/help">
              Help
            </NavLink>
          </li>
        </div>
        <div className="nav__right">
          {!user && (
            <>
              <li>
                <NavLink className="nav__link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to="/signup">
                  Register
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <p className="nav__id nav__link">Hello {user.name}</p>
              <li>
                <button className="nav__button nav__link" onClick={handleClick}>
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </section>
  );
}
