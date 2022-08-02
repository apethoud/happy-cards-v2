import { ModalTitle, ModalTitleBar } from "./StyledComponents";

export default function ProfileCard({ title, children }) {
  return (
    <div style={{ margin: "16px 0", border: "1px solid black" }}>
      <ModalTitleBar>
        <ModalTitle>{title}</ModalTitle>
      </ModalTitleBar>
      <div>{children}</div>
    </div>
  );
}
