import { css } from "styled-components";
import { fontStylesA } from "@shared/Typography";

export const FlexieFormInput = css`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.form.fieldBorder};
  border-radius: 4px;
  padding: 0.78rem 0.7rem;
  background: ${(props) => props.theme.color.form.fieldBg};
  outline: none;
  ${fontStylesA}
  color: ${(props) => props.theme.color.text.heading};
  transition: color 0.05s, border 0.05s, background 0.05s;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  ${(props) => (props?.type === "number" ? "-moz-appearance: textfield;" : "")}

  ::placeholder {
    color: ${(props) => props.theme.color.text.placeholder};
    transition: color 0.05s;
  }

  :focus {
    outline: 0;
    box-shadow: ${(props) => props.theme.color.text.boxShadow};
    border-radius: 4px;
    border-color: transparent;
    -webkit-appearance: none;
    z-index: 30;

    /* Firefox */
    ${(props) =>
      props?.type === "number" ? "-moz-appearance: textfield;" : ""}
  }
`;

export const SharedInput = css`
  width: 100%;
  border: 1px solid
    ${(props) => (props.valid ? props.theme.color.form.fieldBorder : "#EC5757")};
  border-radius: 4px;
  padding: 0.78rem 0.7rem;
  background: ${(props) => props.theme.color.form.fieldBg};
  outline: none;
  ${fontStylesA}
  color: ${(props) => props.theme.color.text.heading};
  transition: color 0.05s, border 0.05s, background 0.05s;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  ${(props) => (props?.type === "number" ? "-moz-appearance: textfield;" : "")}

  ::placeholder {
    color: ${(props) => props.theme.color.text.placeholder};
    transition: color 0.05s;
  }

  :focus {
    outline: 0;
    box-shadow: ${(props) => props.theme.color.text.boxShadow};
    border-radius: 4px;
    border-color: transparent;
    -webkit-appearance: none;
    z-index: 30;

    /* Firefox */
    ${(props) =>
      props?.type === "number" ? "-moz-appearance: textfield;" : ""}
  }

  ${(props) =>
    props.faded &&
    css`
      border: none;
      padding: 1rem 0;
      background: transparent;
      color: #4f546b;

      :focus {
        border: none;
      }
    `}
`;

export const ExplainError = css`
  background-color: ${(props) => props.theme.color.explainError.bg};
  color: ${(props) => props.theme.color.explainError.color};
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 3px solid ${(props) => props.theme.color.explainError.border};
  font-size: 0.8rem;
  line-height: 1.6;
  font-family: "Spartan", sans-serif;
`;

export const ExplainSuccess = css`
  background-color: ${(props) => props.theme.color.explainSuccess.bg};
  color: ${(props) => props.theme.color.explainSuccess.color};
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 3px solid ${(props) => props.theme.color.explainSuccess.border};
  font-size: 0.8rem;
  line-height: 1.6;
  font-family: "Spartan", sans-serif;
`;
