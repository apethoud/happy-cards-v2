import styled from "styled-components";

// Global

export const AppBackground = styled.div`
  background-color: #fff;
`;

export const Text = styled.div`
  font-size: 16px;
  color: #000;
`;

export const HeaderText = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

export const Button = styled.button`
  border-radius: 6px;
  margin-right: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  ${(props) =>
    props.primary
      ? `
        border: 2px solid darkturquoise;
        background-color: darkturquoise;
        color: #fff;
        `
      : `
        border: 2px solid #ddd;
        background-color: #ddd;
        color: #333;
        `}
`;

export const TableFilterButton = styled(Button)`
  ${(props) =>
    props.selected
      ? `
        border: 2px solid darkslateblue;
        background-color: darkslateblue;
        color: #fff;
        `
      : `
        border: 2px solid #ddd;
        background-color: #ddd;
        color: #333;
        `}
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
`;

// HeaderFooter

export const HeaderColorBar = styled.div`
  height: 4px;
  background-color: darkturquoise;
`;

export const HeaderLogo = styled.div`
  margin: 12px;
  padding: 10px;
  font-family: "Grandstander", cursive;
  font-size: 24px;
  font-weight: bold;
`;

export const FooterCopyright = styled.div`
  margin: 8px;
  text-align: center;
`;

// Home

export const HomeHeroHeaderText = styled.div`
  margin: 32px;
  background-color: darkturquoise;
  font-size: 32px;
  font-weight: 700;
  color: #000;
`;

export const HomeHeroSubheadText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

// HighlightCard

export const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 8px #c8c5dc;
  border: 1px solid #9a94bf;
  border-radius: 10px;
  width: 15vw;
  padding: 20px;
`;

export const HighlightCardIcon = styled.div`
  color: darkslateblue;
`;

// Modal

export const ModalTitleBar = styled.div`
  padding: 16px;
  border-bottom: 4px solid darkturquoise;
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const ModalCloseButtonWrapper = styled.div`
  padding: 4px;
  cursor: pointer;
`;

export const ModalTableRow = styled.div`
  padding: 16px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

// Card Preview

export const CardPreviewWrapper = styled.div`
  margin: 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #eee;
  width: 600px;
  box-shadow: 0px 2px 4px #aaa;
`;

export const CardPreviewText = styled.div`
  margin: 48px 0px;
  padding: 8px 0px;
  font-size: 24px;
  font-weight: 700;
`;

export const CardPreviewPlaceholderText = styled(CardPreviewText)`
  border-radius: 8px;
  padding: 8px;
  background-color: #ddd;
  color: #444;
`;
