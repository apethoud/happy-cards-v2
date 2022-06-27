import {
  AppBackground,
  FooterCopyright,
  HeaderColorBar,
  HeaderLogo,
} from "./StyledComponents";

export default function HeaderFooter(props) {
  return (
    <AppBackground>
      <HeaderColorBar />
      <HeaderLogo>HappyCards</HeaderLogo>
      <div style={{ padding: 40 }}>{props.children}</div>
      <FooterCopyright>&copy; 2022 Andrew Pethoud</FooterCopyright>
    </AppBackground>
  );
}
