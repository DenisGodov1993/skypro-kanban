// import styled, { css } from "styled-components";

// export const SButton = styled.button`
//   width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
//   height: 40px;
//   border-radius: 6px;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   border: none;
//   outline: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
//   line-height: 21px;
//   font-weight: 500;
//   letter-spacing: -0.14px;
//   font-family: "Roboto", sans-serif;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   ${({ buttonType, themeMode }) => {
//     switch (buttonType) {
//       case "secondary":
//         return css`
//           background-color: ${themeMode === "light" ? "#EAEFF5" : "#444"};
//           color: ${themeMode === "light" ? "#000" : "#fff"};
//           &:hover {
//             background-color: ${themeMode === "light" ? "#d5dbea" : "#555"};
//           }
//         `;
//       case "danger":
//         return css`
//           background-color: ${themeMode === "light" ? "#e74c3c" : "#c0392b"};
//           color: #fff;
//           &:hover {
//             background-color: ${themeMode === "light" ? "#c0392b" : "#a93226"};
//           }
//         `;
//       default: // primary
//         return css`
//           background-color: ${themeMode === "light" ? "#565eef" : "#6b7ff0"};
//           color: #ffffff;
//           &:hover {
//             background-color: ${themeMode === "light" ? "#33399b" : "#4b5fd0"};
//           }
//         `;
//     }
//   }}
// `;


import styled from "styled-components";

export const SButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
`;
 