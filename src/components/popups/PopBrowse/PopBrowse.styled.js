import styled from "styled-components";

export const PopBrowseWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
`;

export const PopBrowseBlock = styled.div`
  display: block; 
  margin: 0 auto;
  /* background-color: #ffffff; */
  background-color: ${({ $themeMode }) =>
    $themeMode === "dark" ? "#20202c" : "#ffffff"};
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#f0f0f0" : "#000000")};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  /* border: 0.7px solid #d4dbe5; */
  border: 0.7px solid
    ${({ $themeMode }) => ($themeMode === "dark" ? "#444" : "#d4dbe5")};
  position: relative;

  transition: all 0.3s ease;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  @media (max-width: 495px) {
    flex-direction: row;
    gap: 8px;
  }
`;

// export const PopBrowseTitle = styled.h3`
//   /* color: #000; */
//   color: ${({ $themeMode }) => ($themeMode === "dark" ? "#ffffff" : "#000000")};
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// `;

export const PopBrowseTitle = styled.h3`
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#ffffff" : "#000000")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  /* ✅ Добавляем перенос и защиту от выхода текста за границы */
  white-space: normal;        /* разрешаем перенос строк */
  word-break: break-word;     /* переносим длинные слова */
  overflow-wrap: anywhere;    /* перенос без пробелов */
  max-width: 70%;             /* чтобы не упирался в категорию */
`;


export const CategoriesTheme = styled.div`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  cursor: pointer;
  transition: all 0.2s ease;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    background-color: ${({ $color }) => $color?.bg || "#94A6BE"};
    color: ${({ $color }) => $color?.text || "#FFFFFF"};
    border-radius: 24px;
    padding: 8px 20px;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;




export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;

  /* color: #000; */
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#ddd" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 0.7px solid ${({ $active }) => ($active ? "#94A6BE" : "#D4DBE5")};
  color: ${({ $active }) => ($active ? "#ffffffff" : "#94A6BE90")};
  background-color: ${({ $active }) => ($active ? "#94A6BE" : "transparent")};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: ${({ $editable }) => ($editable ? "pointer" : "default")};
  transition: all 0.2s ease;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  &:hover {
    ${({ $editable }) =>
      $editable &&
      `
      background-color: #94A6BE40;
      color: #94A6BE;
    `}
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* gap: 20px; */

  /* @media screen and (max-width: 495px) {
    display: block;
  } */
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }
`;

export const FormArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  /* background: #eaeef6; */
  /* border: 0.7px solid ${({ $editable }) => ($editable ? "#94A6BE" : "#D4DBE5")}; */
  background: ${({ $themeMode }) =>
    $themeMode === "dark" ? "#2a2a3a" : "#eaeef6"};
  border: 0.7px solid ${({ $themeMode }) =>
    $themeMode === "dark" ? "#555" : "#d4dbe5"};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  /* color: ${({ $editable }) => ($editable ? "#000" : "#666")}; */
  /* transition: all 0.2s ease; */
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#f0f0f0" : "#000000")};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ $themeMode }) =>
      $themeMode === "dark" ? "#6b7ff0" : "#565eef"};
    box-shadow: ${({ $themeMode }) =>
      $themeMode === "dark"
        ? "0 0 0 2px rgba(107, 127, 240, 0.3)"
        : "0 0 0 2px rgba(86, 94, 239, 0.2)"};
  }
`;

//кнопки
export const PopBrowseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  /* gap: 12px;
  margin-top: 18px; */
`;

export const ButtonGroup = styled.div`
  margin-right: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

/* основные стили кнопок */
const buttonBase = `
  border-radius: 4px;
  outline: none;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
`;

//кнопка редактирования
export const BtnBrowseEdit = styled.button`
  ${buttonBase}
  border: 0.7px solid var(--palette-navy-60, #565eef);
  background: transparent;
  color: #565eef;
`;
//кнопка удалить
export const BtnBrowseDelete = styled.button`
  ${buttonBase}
  border: 0.7px solid var(--palette-navy-60, #565eef);
  background: transparent;
  color: #565eef;
`;

//кнопка сохранить
export const BtnBrowseSave = styled.button`
  ${buttonBase}
  border: none;
  background: #565eef;
  color: #ffffff;
`;

//кнопка отменить
export const BtnBrowseСancel = styled.button`
  ${buttonBase}
  border: 0.7px solid var(--palette-navy-60, #565eef);
  background: transparent;
  color: #565eef;
`;

//кнопка закрыть
export const BtnBrowseClose = styled.button`
  ${buttonBase}
  border: none;
  background: #565eef;
  color: #ffffff;
`;



// import styled from "styled-components";

// export const PopBrowseWrapper = styled.div`
//   display: block;
//   width: 100%;
//   height: 100%;
//   min-width: 375px;
//   min-height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 7;
// `;

// export const PopBrowseContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   padding: 0 16px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: rgba(0, 0, 0, 0.4);
// `;

// export const PopBrowseBlock = styled.div`
//   display: block; 
//   margin: 0 auto;
//   background-color: #ffffff;
//   max-width: 630px;
//   width: 100%;
//   padding: 40px 30px 38px;
//   border-radius: 10px;
//   border: 0.7px solid #d4dbe5;
//   position: relative;
// `;

// export const PopBrowseContent = styled.div`
//   display: block;
//   text-align: left;
// `;

// export const PopBrowseTopBlock = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 18px;

//   @media (max-width: 495px) {
//     flex-direction: row;
//     gap: 8px;
//   }
// `;

// export const PopBrowseTitle = styled.h3`
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// `;

// // export const CategoriesTheme = styled.div`
// //   display: inline-block;
// //   width: auto;
// //   height: 30px;
// //   padding: 8px 20px;
// //   border-radius: 24px;
// //   margin-right: 7px;
// //   opacity: 0.4;
// //   cursor: pointer;
// //   /* transition: opacity 0.15s ease, transform 0.12s ease; */

// //   &._active-category {
// //     opacity: 1 !important;
// //     /* transform: none; */
// //   }

// //   p {
// //     /* margin: 0; */
// //     /* margin-bottom: 14px; было */
// //     font-size: 14px;
// //     font-weight: 600;
// //     line-height: 14px;
// //     white-space: nowrap;

// //     /* display: inline-block;
// //     padding: 2px 6px;
// //     border-radius: 18px; */

// //     padding: 8px 20px;
// //     border-radius: 24px;
// //     margin-right: 7px;
// //   }

// //   /* Вспомогательные классы для цветов категорий (применяются к внутреннему тегу <p>) */

// //   ._orange {
// //     background-color: #ffe4c2;
// //     color: #ff6d00;
// //   }

// //   ._green {
// //     background-color: #b4fdd1;
// //     color: #06b16e;
// //   }

// //   ._purple {
// //     background-color: #e9d4ff;
// //     color: #9a48f1;
// //   }

// //   ._gray { 
// //     background: #94a6be;
// //     color: #ffffff;
// //   }
// // `;


// export const CategoriesTheme = styled.div`
//   display: inline-block;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: ${({ $active }) => ($active ? 1 : 0.4)};
//   cursor: pointer;
//   transition: all 0.2s ease;

//   p {
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 14px;
//     white-space: nowrap;
//     background-color: ${({ $color }) => $color?.bg || "#94A6BE"};
//     color: ${({ $color }) => $color?.text || "#FFFFFF"};
//     border-radius: 24px;
//     padding: 8px 20px;
//   }

//   &:hover {
//     opacity: 1;
//     transform: scale(1.02);
//   }
// `;




// export const PopBrowseStatus = styled.div`
//   margin-bottom: 11px;
// `;

// export const StatusTitle = styled.p`
//   margin-bottom: 14px;

//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
// `;

// export const StatusThemes = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;

// export const StatusTheme = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 24px;
//   border: 0.7px solid ${({ $active }) => ($active ? "#94A6BE" : "#D4DBE5")};
//   color: ${({ $active }) => ($active ? "#ffffffff" : "#94A6BE90")};
//   background-color: ${({ $active }) => ($active ? "#94A6BE" : "transparent")};
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;
//   cursor: ${({ $editable }) => ($editable ? "pointer" : "default")};
//   transition: all 0.2s ease;

//   p {
//     font-size: 14px;
//     line-height: 1;
//     letter-spacing: -0.14px;
//   }

//   &:hover {
//     ${({ $editable }) =>
//       $editable &&
//       `
//       background-color: #94A6BE40;
//       color: #94A6BE;
//     `}
//   }
// `;

// export const PopBrowseWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   /* gap: 20px; */

//   /* @media screen and (max-width: 495px) {
//     display: block;
//   } */
// `;

// export const PopBrowseForm = styled.form`
//   max-width: 370px;
//   width: 100%;
//   display: block;
//   margin-bottom: 20px;
// `;

// export const FormBlock = styled.div`
//   display: flex;
//   flex-direction: column;

//   label {
//     color: #000;
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 1;
//   }
// `;

// export const FormArea = styled.textarea`
//   max-width: 370px;
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: #eaeef6;
//   border: 0.7px solid ${({ $editable }) => ($editable ? "#94A6BE" : "#D4DBE5")};
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//   margin-top: 14px;
//   height: 200px;
//   color: ${({ $editable }) => ($editable ? "#000" : "#666")};
//   transition: all 0.2s ease;
// `;

// //кнопки
// export const PopBrowseButtons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;

//   /* gap: 12px;
//   margin-top: 18px; */
// `;

// export const ButtonGroup = styled.div`
//   margin-right: 8px;
//   display: flex;
//   gap: 8px;
//   align-items: center;
// `;

// /* основные стили кнопок */
// const buttonBase = `
//   border-radius: 4px;
//   outline: none;
//   padding: 6px 12px;
//   font-size: 14px;
//   cursor: pointer;
// `;

// //кнопка редактирования
// export const BtnBrowseEdit = styled.button`
//   ${buttonBase}
//   border: 0.7px solid var(--palette-navy-60, #565eef);
//   background: transparent;
//   color: #565eef;
// `;
// //кнопка удалить
// export const BtnBrowseDelete = styled.button`
//   ${buttonBase}
//   border: 0.7px solid var(--palette-navy-60, #565eef);
//   background: transparent;
//   color: #565eef;
// `;

// //кнопка сохранить
// export const BtnBrowseSave = styled.button`
//   ${buttonBase}
//   border: none;
//   background: #565eef;
//   color: #ffffff;
// `;

// //кнопка отменить
// export const BtnBrowseСancel = styled.button`
//   ${buttonBase}
//   border: 0.7px solid var(--palette-navy-60, #565eef);
//   background: transparent;
//   color: #565eef;
// `;

// //кнопка закрыть
// export const BtnBrowseClose = styled.button`
//   ${buttonBase}
//   border: none;
//   background: #565eef;
//   color: #ffffff;
// `;
