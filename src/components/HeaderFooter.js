import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  AppBackground,
  FooterCopyright,
  HeaderColorBar,
  HeaderLogo,
} from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

export default function HeaderFooter(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBackground>
      <HeaderColorBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLogo>HappyCards</HeaderLogo>
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
      <div style={{ padding: 40 }}>
        <Outlet />
      </div>
      <FooterCopyright>&copy; 2022 Andrew Pethoud</FooterCopyright>
    </AppBackground>
  );
}
