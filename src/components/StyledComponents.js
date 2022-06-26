import styled from "styled-components";

export const AppBackground = styled.div`
  background-color: #fff;
`;

// Global

export const Button = styled.button`
  border-radius: 6px;
  margin-right: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #ddd;
  background-color: #ddd;
  color: #333;
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
