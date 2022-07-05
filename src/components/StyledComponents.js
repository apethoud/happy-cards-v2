import styled from "styled-components";

const themes = {
  light: {
    bg: "#fff",
    border: "#ccc",
    shadow: "#c8c5dc",
    text: "#000",
    teal: "darkturquoise",
    primaryButton: {
      bg: "darkturquoise",
      text: "#fff",
    },
    secondaryButton: {
      bg: "#ddd",
      text: "#000",
    },
    purple: "darkslateblue",
    purpleLight: "#9a94bf",
  },
  dark: {
    bg: "#242327",
    border: "#bfbbd6",
    shadow: "#222222",
    text: "#eee",
    teal: "#007173",
    primaryButton: {
      bg: "#007173",
      text: "#eee",
    },
    secondaryButton: {
      bg: "#888",
      text: "#000",
    },
    purple: "#9853ff",
    purpleLight: "#9a94bf",
  },
};

// Global

export const AppBackground = styled.div`
  ${({ theme: { theme } }) => `
    background-color: ${themes[theme].bg};
    color: ${themes[theme].text};
  `}
`;

export const Text = styled.div`
  font-size: 16px;
  ${({ theme: { theme } }) => `
    color: ${themes[theme].text}
  `}
`;

export const HeaderText = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  ${({ theme: { theme } }) => `
    color: ${themes[theme].text};
  `}
`;

export const Button = styled.button`
  border-radius: 6px;
  margin-right: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  ${({ theme: { theme }, primary }) =>
    primary
      ? `
        border: 2px solid ${themes[theme].primaryButton.bg};
        background-color: ${themes[theme].primaryButton.bg};
        color: ${themes[theme].primaryButton.text};
        `
      : `
        border: 2px solid ${themes[theme].secondaryButton.bg};
        background-color: ${themes[theme].secondaryButton.bg};
        color: ${themes[theme].secondaryButton.text};
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
  ${({ theme: { theme } }) => `
    color: ${themes[theme].text};
  `}
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  ${({ theme: { theme } }) => `
    border: 1px solid ${themes[theme].border};
    background-color: ${themes[theme].bg};
    color: ${themes[theme].text};
  `}
`;

// HeaderFooter

export const HeaderColorBar = styled.div`
  height: 4px;
  ${({ theme: { theme } }) => `
    background-color: ${themes[theme].teal};
  `}
`;

export const HeaderLogo = styled.div`
  margin: 12px;
  padding: 10px;
  font-family: "Grandstander", cursive;
  font-size: 24px;
  font-weight: bold;
  ${({ theme: { theme } }) => `
    color: ${themes[theme].text};
  `}
`;

export const FooterCopyright = styled.div`
  margin-top: 300px;
  padding-bottom: 24px;
  text-align: center;
  ${({ theme: { theme } }) => `
    color: ${themes[theme].text};
  `}
`;

// Home

export const HomeHeroHeaderText = styled.div`
  margin: 32px;
  padding: 6px;
  font-size: 32px;
  font-weight: 700;
  ${({ theme: { theme } }) => `
    background-color: ${themes[theme].teal};
    color: ${themes[theme].text};
  `}
`;

export const HomeHeroSubheadText = styled.div`
  font-size: 24px;
  font-weight: 700;
  ${({ theme: { theme } }) => `
    color: ${themes[theme].text};
  `}
`;

// HighlightCard

export const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 15vw;
  padding: 20px;
  ${({ theme: { theme } }) => `
    box-shadow: 0px 4px 8px ${themes[theme].shadow};
    border: 1px solid ${themes[theme].purpleLight};
    background-color: ${themes[theme].bg};
  `}
`;

export const HighlightCardIcon = styled.div`
  ${({ theme: { theme } }) => `
    color: ${themes[theme].purple};
  `}
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
