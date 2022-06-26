import { AppBackground } from "./StyledComponents";

export default function HeaderFooter(props) {
  return (
    <AppBackground>
      <div className="HeaderColorBar" />
      <div style={{ padding: 10 }}>
        <div className="Logo">HappyCards</div>
      </div>
      <div style={{ padding: 40 }}>{props.children}</div>
      <div className="Copyright">&copy; 2022 Andrew Pethoud</div>
    </AppBackground>
  );
}
