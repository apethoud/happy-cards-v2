import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  AppBackground,
  FooterCopyright,
  HeaderColorBar,
  HeaderLogo,
  HeaderNavLink,
} from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function HeaderFooter(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { loggedInUser } = useContext(UserContext);

  function styleByActiveStatus(isActive) {
    return isActive
      ? { fontWeight: 700, textDecoration: "none" }
      : { fontWeight: 400, textDecoration: "none" };
  }

  return (
    <AppBackground>
      <HeaderColorBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLogo>HappyCards</HeaderLogo>
        <div className="Flex">
          <div className="Flex">
            <NavLink
              style={({ isActive }) => styleByActiveStatus(isActive)}
              to="/"
            >
              <HeaderNavLink>Home</HeaderNavLink>
            </NavLink>
            <NavLink
              style={({ isActive }) => styleByActiveStatus(isActive)}
              to="/card-builder"
            >
              <HeaderNavLink>Card Builder</HeaderNavLink>
            </NavLink>
            <NavLink
              style={({ isActive }) => styleByActiveStatus(isActive)}
              to="/login"
            >
              <HeaderNavLink>Login</HeaderNavLink>
            </NavLink>
            {loggedInUser && (
              <NavLink
                style={({ isActive }) => styleByActiveStatus(isActive)}
                to={`/profile/${loggedInUser.id}`}
              >
                <HeaderNavLink>Profile</HeaderNavLink>
              </NavLink>
            )}
          </div>
          <div
            onClick={toggleTheme}
            style={{ marginTop: 15, marginRight: 20, cursor: "pointer" }}
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faSun : faMoon}
              size="2x"
            />
          </div>
        </div>
      </div>
      <div style={{ padding: 40 }}>
        <Outlet />
      </div>
      <FooterCopyright>&copy; 2022 Andrew Pethoud</FooterCopyright>
    </AppBackground>
  );
}
