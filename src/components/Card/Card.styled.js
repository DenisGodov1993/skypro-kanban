import styled from "styled-components";

export const SCardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const SCardsCard = styled.div`
  width: 220px;
  height: 130px;
  /* background-color: #ffffff; */
  background-color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#ffffff" : "#1e1e2f"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  color: ${({ $themeMode }) => ($themeMode === "light" ? "#000" : "#fff")};
`;

export const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  &._orange {
    /* background-color: #ffe4c2;
    color: #ff6d00; */
    background-color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#ffe4c2" : "#b36e3f"};
    color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#ff6d00" : "#ffc18e"};
  }

  &._green {
    /* background-color: #b4fdd1;
    color: #06b16e; */
    background-color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#b4fdd1" : "#1c5c3b"};
    color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#06b16e" : "#7bffb0"};
  }
  &._purple {
    /* background-color: #e9d4ff;
    color: #9a48f1; */
    background-color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#e9d4ff" : "#5d2f72"};
    color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#9a48f1" : "#d1a6ff"};
  }
  &._gray {
    /* background: #94a6be;
    color: #ffffff; */
    background-color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#94a6be" : "#5a5f7a"};
    color: ${({ $themeMode }) => ($themeMode === "light" ? "#ffffff" : "#c1c4d6")};

  }
`;

export const SCardThemeP = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

// export const SBrowseSelf = styled.a`
//   width:24px;
//   height:24px;
// `;

export const SCardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    /* background-color: #94a6be; */
    background-color: ${({ $themeMode }) => ($themeMode === "light" ? "#94a6be" : "#8c8cff")};
  }
`;

export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  /* color: #000000; */
  color: ${({ $themeMode }) => ($themeMode === "light" ? "#000000" : "#ffffff")};
  margin-bottom: 10px;
`;

export const SCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    width: 13px;
  }

  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    /* color: #94a6be; */
    color: ${({ $themeMode }) => ($themeMode === "light" ? "#94a6be" : "#8c8cff")};
    letter-spacing: 0.2px;
  }
`;
 

// import styled from "styled-components";

// export const SCardsItem = styled.div`
//   padding: 5px;
//   animation-name: card-animation;
//   animation-duration: 500ms;
//   animation-timing-function: linear;
// `;

// export const SCardsCard = styled.div`
//   width: 220px;
//   height: 130px;
//   /* background-color: #ffffff; */
//   background-color: ${({ themeMode }) =>
//     themeMode === "light" ? "#ffffff" : "#1e1e2f"};
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: stretch;
//   padding: 15px 13px 19px;

//   color: ${({ themeMode }) => (themeMode === "light" ? "#000" : "#fff")};
// `;

// export const SCardGroup = styled.div`
//   width: 100%;
//   height: 20px;
//   margin-bottom: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const SCardTheme = styled.div`
//   width: auto;
//   height: 20px;
//   padding: 5px 14px;
//   border-radius: 18px;

//   &._orange {
//     /* background-color: #ffe4c2;
//     color: #ff6d00; */
//     background-color: ${({ themeMode }) =>
//       themeMode === "light" ? "#ffe4c2" : "#b36e3f"};
//     color: ${({ themeMode }) =>
//       themeMode === "light" ? "#ff6d00" : "#ffc18e"};
//   }

//   &._green {
//     /* background-color: #b4fdd1;
//     color: #06b16e; */
//     background-color: ${({ themeMode }) =>
//       themeMode === "light" ? "#b4fdd1" : "#1c5c3b"};
//     color: ${({ themeMode }) =>
//       themeMode === "light" ? "#06b16e" : "#7bffb0"};
//   }
//   &._purple {
//     /* background-color: #e9d4ff;
//     color: #9a48f1; */
//     background-color: ${({ themeMode }) =>
//       themeMode === "light" ? "#e9d4ff" : "#5d2f72"};
//     color: ${({ themeMode }) =>
//       themeMode === "light" ? "#9a48f1" : "#d1a6ff"};
//   }
//   &._gray {
//     /* background: #94a6be;
//     color: #ffffff; */
//     background-color: ${({ themeMode }) =>
//       themeMode === "light" ? "#94a6be" : "#5a5f7a"};
//     color: ${({ themeMode }) => (themeMode === "light" ? "#ffffff" : "#c1c4d6")};

//   }
// `;

// export const SCardThemeP = styled.p`
//   font-size: 10px;
//   font-weight: 600;
//   line-height: 10px;
// `;

// // export const SBrowseSelf = styled.a`
// //   width:24px;
// //   height:24px;
// // `;

// export const SCardBtn = styled.div`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   padding: 2px;

//   & div {
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     /* background-color: #94a6be; */
//     background-color: ${({ themeMode }) => (themeMode === "light" ? "#94a6be" : "#8c8cff")};
//   }
// `;

// export const SCardContent = styled.div`
//   height: 64px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// export const SCardTitle = styled.h3`
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 18px;
//   /* color: #000000; */
//   color: ${({ themeMode }) => (themeMode === "light" ? "#000000" : "#ffffff")};
//   margin-bottom: 10px;
// `;

// export const SCardDate = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;

//   & svg {
//     width: 13px;
//   }

//   & p {
//     margin-left: 6px;
//     font-size: 10px;
//     line-height: 13px;
//     /* color: #94a6be; */
//     color: ${({ themeMode }) => (themeMode === "light" ? "#94a6be" : "#8c8cff")};
//     letter-spacing: 0.2px;
//   }
// `;
 

// import styled from "styled-components";

// export const SCardsItem = styled.div`
//   padding: 5px;
//   animation-name: card-animation;
//   animation-duration: 500ms;
//   animation-timing-function: linear;
// `;

// export const SCardsCard = styled.div`
//   width: 220px;
//   height: 130px;
//   background-color: #ffffff;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: stretch;
//   padding: 15px 13px 19px;
// `;

// export const SCardGroup = styled.div`
//   width: 100%;
//   height: 20px;
//   margin-bottom: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const SCardTheme = styled.div`
//   width: auto;
//   height: 20px;
//   padding: 5px 14px;
//   border-radius: 18px;

//   &._orange {
//     background-color: #ffe4c2;
//     color: #ff6d00;
//   }

//   &._green {
//     background-color: #b4fdd1;
//     color: #06b16e;
//   }
//   &._purple {
//     background-color: #e9d4ff;
//     color: #9a48f1;
//   }
//   &._gray {
//     background: #94a6be;
//     color: #ffffff;
//   }
// `;

// export const SCardThemeP = styled.p`
//   font-size: 10px;
//   font-weight: 600;
//   line-height: 10px;
// `;

// // export const SBrowseSelf = styled.a`
// //   width:24px;
// //   height:24px;
// // `;

// export const SCardBtn = styled.div`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   padding: 2px;

//   & div {
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background-color: #94a6be;
//   }
// `;

// export const SCardContent = styled.div`
//   height: 64px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// export const SCardTitle = styled.h3`
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 18px;
//   color: #000000;
//   margin-bottom: 10px;
// `;

// export const SCardDate = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;

//   & svg {
//     width: 13px;
//   }

//   & p {
//     margin-left: 6px;
//     font-size: 10px;
//     line-height: 13px;
//     color: #94a6be;
//     letter-spacing: 0.2px;
//   }
// `;
 