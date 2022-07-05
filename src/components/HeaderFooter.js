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

export default function HeaderFooter(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBackground>
      <HeaderColorBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLogo>HappyCards</HeaderLogo>
        <div onClick={toggleTheme} style={{ marginTop: 15, marginRight: 20 }}>
          <FontAwesomeIcon
            icon={theme === "light" ? faSun : faMoon}
            size="2x"
          />
        </div>
      </div>
      <div style={{ padding: 40 }}>{props.children}</div>
      <FooterCopyright>&copy; 2022 Andrew Pethoud</FooterCopyright>
    </AppBackground>
  );
}
