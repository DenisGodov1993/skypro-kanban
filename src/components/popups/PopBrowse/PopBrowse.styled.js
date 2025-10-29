// чистый код
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
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
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

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  cursor: pointer;
  /* transition: opacity 0.15s ease, transform 0.12s ease; */

  &._active-category {
    opacity: 1 !important;
    /* transform: none; */
  }

  p {
    /* margin: 0; */
    /* margin-bottom: 14px; было */
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;

    /* display: inline-block;
    padding: 2px 6px;
    border-radius: 18px; */

    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
  }

  /* Вспомогательные классы для цветов категорий (применяются к внутреннему тегу <p>) */

    ._orange {
      background-color: #ffe4c2;
      color: #ff6d00;
    }

    ._green {
      background-color: #b4fdd1;
      color: #06b16e;
    }

    ._purple {
      background-color: #e9d4ff;
      color: #9a48f1;
    }

    ._gray {
      background: #94a6be;
      color: #ffffff;
    }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;

  color: #000;
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
  background: #eaeef6;
  border: 0.7px solid ${({ $editable }) => ($editable ? "#94A6BE" : "#D4DBE5")};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({ $editable }) => ($editable ? "#000" : "#666")};
  transition: all 0.2s ease;
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
//   /* display: none; */
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
// // Верхний блок (заголовок + категория)
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
//   /* margin: 0; */
// `;

// //категория
// export const CategoriesTheme = styled.div`
//   display: inline-block;
//   width: auto;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: 0.4;
//   cursor: pointer;
//   /* transition: opacity 0.15s ease, transform 0.12s ease; */

//   &._active-category {
//     opacity: 1 !important;
//     /* transform: none; */
//   }

//   p {
//     /* margin: 0; */
//     /* margin-bottom: 14px; было */
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 14px;
//     white-space: nowrap;

//     /* display: inline-block;
//     padding: 2px 6px;
//     border-radius: 18px; */

//     padding: 8px 20px;
//     border-radius: 24px;
//     margin-right: 7px;

//     /* Вспомогательные классы для цветов категорий (применяются к внутреннему тегу <p>) */
// /* 
//     &._orange {
//       background-color: #ffe4c2;
//       color: #ff6d00;
//     }

//     &._green {
//       background-color: #b4fdd1;
//       color: #06b16e;
//     }

//     &._purple {
//       background-color: #e9d4ff;
//       color: #9a48f1;
//     }

//     &._gray {
//       background: #94a6be;
//       color: #ffffff;
//     } */
//   }

//   /* Вспомогательные классы для цветов категорий (применяются к внутреннему тегу <p>) */

//     ._orange {
//       background-color: #ffe4c2;
//       color: #ff6d00;
//     }

//     ._green {
//       background-color: #b4fdd1;
//       color: #06b16e;
//     }

//     ._purple {
//       background-color: #e9d4ff;
//       color: #9a48f1;
//     }

//     ._gray {
//       background: #94a6be;
//       color: #ffffff;
//     }
// `;
// // статус
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
// //контейнер для статусных тем
// export const StatusThemes = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;
// //индивидуальная тема статуса ( надо поменять на кнопку)
// // export const StatusTheme = styled.div`
// //   display: none;

// //   border-radius: 24px;
// //   border: 0.7px solid rgba(148, 166, 190, 0.4);
// //   color: #94a6be;
// //   padding: 11px 14px 10px;
// //   margin-right: 7px;
// //   margin-bottom: 7px;

// //   p {
// //     font-size: 14px;
// //     line-height: 1;
// //     letter-spacing: -0.14px;
// //   }
// // `;

// // export const StatusTheme = styled.button`
// //   /* changed to button so it is reachable via keyboard and clickable */
// //   display: inline-flex;
// //   align-items: center;
// //   justify-content: center;
// //   cursor: pointer;

// //   border-radius: 24px;
// //   border: 0.7px solid rgba(148, 166, 190, 0.4);
// //   color: #94a6be;
// //   padding: 11px 14px;
// //   margin-right: 7px;
// //   margin-bottom: 7px;
// //   background: transparent;

// //   font-family: inherit;
// //   font-size: 14px;
// //   line-height: 1;
// //   letter-spacing: -0.14px;

// //   transition: all 0.12s ease;

// //   &:hover {
// //     transform: translateY(-1px);
// //     box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
// //   }

// //   &.selected {
// //     border-color: #94a6be;
// //     color: #94a6be;
// //     background-color: rgba(148, 166, 190, 0.12); /* #94A6BE20 */
// //   }
// // `;


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




// // Макет формы + календарь
// export const PopBrowseWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   /* gap: 20px; */

//    /* @media screen and (max-width: 495px) {
//     display: block;
//   } */
// `;

// //форма
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

// // export const FormArea = styled.textarea`
// //   max-width: 370px;
// //   width: 100%;
// //   outline: none;
// //   padding: 14px;
// //   background: #eaeef6;
// //   border: 0.7px solid rgba(148, 166, 190, 0.4);
// //   border-radius: 8px;
// //   font-size: 14px;
// //   line-height: 1;
// //   letter-spacing: -0.14px;
// //   margin-top: 14px;
// //   height: 200px;

// //   /* resize: vertical;
// //   color: #000; */

// //   /* &::placeholder {
// //     color: #94a6be;
// //     font-weight: 400;
// //     font-size: 14px;
// //     letter-spacing: -0.14px;
// //   }

// //   &:read-only {
// //     background: #f6f7fb;
// //     color: #666;
// //   } */
// // `;

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
// //кнопки слева
// export const ButtonGroup = styled.div`
//   margin-right: 8px;
//   display: flex;
//   gap: 8px;
//   align-items: center;
// `;

// // /* основные стили кнопок */
// const buttonBase = `
//   border-radius: 4px;
//   outline: none;
//   padding: 6px 12px;
//   font-size: 14px;
//   cursor: pointer;
// `;

// // export const BtnBrowseEdit = styled.button`
// //   border-radius: 4px;
// //   border: 0.7px solid var(--palette-navy-60, #565eef);
// //   outline: none;
// //   background: transparent;
// //   color: #565eef;
// // `;
// //кнопка редактирования
// export const BtnBrowseEdit = styled.button`
//   ${buttonBase}
//   border: 0.7px solid var(--palette-navy-60, #565eef);
//   background: transparent;
//   color: #565eef;
// `;
// //кнопка удалить
// // export const BtnBrowseDelete = styled.button`
// //   border-radius: 4px;
// //   border: 0.7px solid var(--palette-navy-60, #565eef);
// //   outline: none;
// //   background: transparent;
// //   color: #565eef;
// // `;

// export const BtnBrowseDelete = styled.button`
//   ${buttonBase}
//   border: 0.7px solid var(--palette-navy-60, #565eef);
//   background: transparent;
//   color: #565eef;
// `;

// //кнопка сохранить
// // export const BtnBrowseSave = styled.button`
// //   border-radius: 4px;
// //   background: #565eef;
// //   border: none;
// //   outline: none;
// //   color: #ffffff;
// // `;

// export const BtnBrowseSave = styled.button`
//   ${buttonBase}
//   border: none;
//   background: #565eef;
//   color: #ffffff;
// `;
// //кнопка отменить
// // export const BtnBrowseСancel = styled.button`
// //   border-radius: 4px;
// //   border: 0.7px solid var(--palette-navy-60, #565eef);
// //   outline: none;
// //   background: transparent;
// //   color: #565eef;
// // `;

// export const BtnBrowseСancel = styled.button`
//   ${buttonBase}
//   border: 0.7px solid var(--palette-navy-60, #565eef);
//   background: transparent;
//   color: #565eef;
// `;

// //кнопка закрыть
// // export const BtnBrowseClose = styled.button`
// //   border-radius: 4px;
// //   background: #565eef;
// //   border: none;
// //   outline: none;
// //   color: #ffffff;
// // `;

// export const BtnBrowseClose = styled.button`
//   ${buttonBase}
//   border: none;
//   background: #565eef;
//   color: #ffffff;
// `;

// Классы цветов служебной категории 
// (для использования при добавлении 
// className="_orange" и т. д. к родительскому/дочернему 
// элементу)

// export const CategoryColors = styled.div`
//   ._orange {
//     background-color: #ffe4c2;
//     color: #ff6d00;
//   }
//   ._green {
//     background-color: #b4fdd1;
//     color: #06b16e;
//   }
//   ._purple {
//     background-color: #e9d4ff;
//     color: #9a48f1;
//   }
//   ._gray {
//     background: #94a6be;
//     color: #ffffff;
//   }
// `;


// export const Button = styled.button`
//   color: #565EEF;

//   &:hover {
//     background: #e6e6e6;
//   }

//   &._btn-bg {
//     background: #007bff;
//     color: #fff;
//     border-color: #007bff;

//     &:hover {
//       background: #006ae1;
//     }
//   }
// `;

// import styled from "styled-components";

// export const PopBrowseWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   min-width: 375px;
//   min-height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 7;
//   background: rgba(0, 0, 0, 0.4);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const PopBrowseContainer = styled.div`
//   width: 100%;
//   max-width: 630px;
//   padding: 0 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const PopBrowseBlock = styled.div`
//   width: 100%;
//   background: #fff;
//   border-radius: 10px;
//   border: 0.7px solid #d4dbe5;
//   padding: 40px 30px 38px;
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
// `;

// export const PopBrowseTitle = styled.h3`
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
// `;

// export const PopBrowseStatus = styled.div`
//   margin-bottom: 11px;
// `;

// export const StatusP = styled.p`
//   margin-bottom: 14px;
//   font-weight: 600;
//   font-size: 14px;
//   color: #000;
// `;

// export const StatusThemes = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 7px;
// `;

// export const StatusTheme = styled.div`
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   color: #94a6be;
//   padding: 11px 14px 10px;
//   p {
//     font-size: 14px;
//     line-height: 1;
//     letter-spacing: -0.14px;
//   }
// `;

// export const PopBrowseWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 20px;
// `;

// export const PopBrowseForm = styled.form`
//   max-width: 370px;
//   width: 100%;
// `;

// export const FormBlock = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;

//   input {
//     outline: none;
//     padding: 14px;
//     background: #eaeef6;
//     border: 0.7px solid rgba(148, 166, 190, 0.4);
//     border-radius: 8px;
//     font-size: 14px;
//     line-height: 1;
//     margin-top: 14px;
//     color: #000;

//     &:read-only {
//       background: #f5f6fa;
//     }

//     &::placeholder {
//       color: #94a6be;
//     }
//   }
// `;

// export const FormArea = styled.textarea`
//   max-width: 370px;
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: #eaee f6;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   margin-top: 14px;
//   height: 200px;
//   resize: none;
//   color: #000;

//   &:read-only {
//     background: #f5f6fa;
//   }

//   &::placeholder {
//     color: #94a6be;
//   }
// `;

// export const CategoriesSection = styled.div`
//   margin: 20px 0;
// `;

// export const CategoriesP = styled.p`
//   margin-bottom: 14px;
//   color: #000;
//   font-weight: 600;
//   font-size: 14px;
// `;

// export const CategoriesThemes = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// export const CategoryItem = styled.div`
//   display: inline-block;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: ${(props) => (props.$active ? 1 : 0.4)};
//   border: ${(props) => (props.$active ? "1.5px solid #565eef" : "none")};
//   cursor: ${(props) => (props.$active ? "default" : "pointer")};

//   &._orange {
//     background: #ffe7d1;
//     color: #ff8c00;
//   }

//   &._green {
//     background: #d8f5d4;
//     color: #2e7d32;
//   }

//   &._purple {
//     background: #e9d8fd;
//     color: #6a1b9a;
//   }

//   p {
//     font-size: 14px;
//     font-weight: 600;
//   }
// `;

// export const PopBrowseButtons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// export const ButtonGroup = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
// `;

// export const Button = styled.button`
//   height: 30px;
//   padding: 0 14px;
//   border-radius: 4px;
//   font-size: 14px;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &._btn-bor {
//     border: 0.7px solid #565eef;
//     background: transparent;
//     color: #565eef;

//     &:hover {
//       opacity: 0.7;
//     }
//   }

//   &._btn-bg {
//     background: #565eef;
//     color: #fff;
//     border: none;

//     &:hover {
//       background: #474ee5;
//     }
//   }
// `;

// import styled from "styled-components";

// export const PopBrowseWrapper = styled.div`
//   /* width: 100%;
//   height: 100%;
//   min-width: 375px;
//   min-height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 10;
//   background: rgba(0, 0, 0, 0.4);
//   display: flex;
//   align-items: center;
//   justify-content: center; */

//   /* display: none; */
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
//   /* width: 100%;
//   max-width: 680px;
//   padding: 0 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center; */

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
//   /* width: 100%;
//   background-color: #fff;
//   border-radius: 12px;
//   border: 1px solid #d4dbe5;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
//   padding: 36px 28px;
//   position: relative; */

//   display: block;
//   margin: 0 auto;
//   background-color: #FFFFFF;
//   max-width: 630px;
//   width: 100%;
//   padding: 40px 30px 38px;
//   border-radius: 10px;
//   border: 0.7px solid #D4DBE5;
//   position: relative;
// `;

// export const PopBrowseContent = styled.div`
//   /* display: flex;
//   flex-direction: column;
//   text-align: left; */

//   display: block;
//   text-align: left;
// `;

// export const PopBrowseTopBlock = styled.div`
//   /* display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 22px; */

//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 18px;
// `;

// export const PopBrowseTitle = styled.h3`
//   /* color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 1.2; */

//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// `;

// export const CategoriesTheme = styled.div`
//   /* display: inline-block;
//   padding: 6px 16px;
//   border-radius: 20px;
//   background: #f0f0f0;
//   font-size: 14px;
//   font-weight: 500;
//   color: #000;
//   opacity: 0.7; */

//   display: inline-block;
//   width: auto;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: 0.4;
//   cursor: pointer;

//   &._orange {
//     /* background: #ffe7d1;
//     color: #ff8c00; */

//     background-color: #ffe4c2;
//     color: #ff6d00;
//   }

//   &._green {
//     /* background: #d8f5d4;
//     color: #2e7d32; */

//     background-color: #b4fdd1;
//     color: #06b16e;
//   }

//   &._purple {
//     /* background: #e9d8fd;
//     color: #6a1b9a; */

//     background-color: #e9d4ff;
//     color: #9a48f1;
//   }

//   &._gray {
//     background: #94a6be;
//     color: #ffffff;
//   }

//   &._active-category {
//     opacity: 1 !important;
//   }

//   p {
//       margin-bottom: 14px;
//       font-size: 14px;
//       font-weight: 600;
//       line-height: 14px;
//       white-space: nowrap;
//     }

// `;

// export const PopBrowseStatus = styled.div`
//   /* margin-bottom: 18px; */
//   margin-bottom: 11px;

// `;

// export const StatusTitle = styled.p`
//   /* color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   margin-bottom: 10px; */
//   margin-bottom: 14px;

//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;

// `;

// export const StatusThemes = styled.div`
//   /* display: flex;
//   gap: 10px; */
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;

// export const StatusTheme = styled.div`
//   /* background: #f4f6f8;
//   border-radius: 20px;
//   padding: 6px 16px; */

//   display: none;

//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   color: #94A6BE;
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;

//   p {
//     /* font-size: 13px;
//     font-weight: 500;
//     color: #333; */

//     font-size: 14px;
//     line-height: 1;
//     letter-spacing: -0.14px;
//   }
// `;

// export const PopBrowseWrap = styled.div`
//   /* display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 24px;
//   flex-wrap: wrap; */

//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// export const PopBrowseForm = styled.form`
//   /* max-width: 370px;
//   width: 100%;
//   display: flex;
//   flex-direction: column; */

//   max-width: 370px;
//   width: 100%;
//   display: block;
//   margin-bottom: 20px;
// `;

// export const FormBlock = styled.div`
//   /* display: flex;
//   flex-direction: column;
//   margin-bottom: 18px; */

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
//   /* width: 100%;
//   min-height: 120px;
//   resize: none;
//   padding: 10px;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   font-size: 14px;
//   color: #333; */

//   max-width: 370px;
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: #EAEEF6;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//   margin-top: 14px;
//   height: 200px;

//   /* &:read-only {
//     background: #f8f9fb;
//     cursor: default;
//   } */

//   /* &:focus {
//     outline: none;
//     border-color: #007bff;
//   } */
// `;

// export const PopBrowseButtons = styled.div`
//   /* display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-top: 24px;
//   justify-content: flex-end; */

//   border-radius: 4px;
//   border: 0.7px solid var(--palette-navy-60, #565EEF);
//   outline: none;
//   background: transparent;
//   color: #565EEF;
// `;

// export const Button = styled.button`
//   /* padding: 10px 18px;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   background: #f3f3f3;
//   color: #000;
//   font-size: 14px;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease; */

//   color: #565EEF;

//   &:hover {
//     background: #e6e6e6;
//   }

//   &._btn-bg {
//     background: #007bff;
//     color: #fff;
//     border-color: #007bff;

//     &:hover {
//       background: #006ae1;
//     }
//   }
// `;

// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const PopBrowseWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   min-width: 375px;
//   height: 100%;
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
// `;

// export const PopBrowseTitle = styled.h3`
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// `;

// // export const CategoriesTheme = styled.div`
// //   display: inline-flex;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 8px 20px;
// //   border-radius: 24px;
// //   font-weight: 500;
// //   font-size: 14px;
// //   background: ${({ color }) => color.background};
// //   color: ${({ color }) => color.color};
// // `;

// export const CategoriesTheme = styled.div`
//   /* margin-bottom: 20px; */

//   display: flex;
//   flex-wrap: nowrap;
//   align-items: flex-start;
//   justify-content: flex-start;

//   .categories__theme {
//     display: inline-block;
//     width: auto;
//     height: 30px;
//     padding: 8px 20px;
//     border-radius: 24px;
//     margin-right: 7px;
//     opacity: 0.4;
//     cursor: pointer;

//     p {
//       /* margin-bottom: 14px; */

//       font-size: 14px;
//       font-weight: 600;
//       line-height: 14px;
//       white-space: nowrap;

//       &._orange {
//         background-color: #ffe4c2;
//         color: #ff6d00;
//       }
//       &._green {
//         background-color: #b4fdd1;
//         color: #06b16e;
//       }
//       &._purple {
//         background-color: #e9d4ff;
//         color: #9a48f1;
//       }
//       &._gray {
//         background: #94a6be;
//         color: #ffffff;
//       }

//       /* &._active-category {
//         opacity: 1 !important;
//       } */
//     }
//   }
// `;

// export const StatusWrapper = styled.div`
//   margin-bottom: 11px;
// `;

// export const StatusTitle = styled.p`
//   margin-bottom: 14px;
//   font-size: 14px;
//   font-weight: 600;
// `;

// export const StatusThemes = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;

// export const StatusTheme = styled.div`
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   color: #94a6be;
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;

//   p {
//     font-size: 14px;
//     line-height: 1;
//     letter-spacing: -0.14px;
//   }
// `;

// export const PopBrowseWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
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
// `;

// export const FormArea = styled.textarea`
//   max-width: 370px;
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: #eaeeff;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//   margin-top: 14px;
//   height: 200px;

//   &::placeholder {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 1px;
//     color: #94a6be;
//     letter-spacing: -0.14px;
//   }
// `;

// export const ThemeDown = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;

//   p {
//     margin-bottom: 14px;
//     font-size: 14px;
//     font-weight: 600;
//   }
// `;

// export const ThemeCategory = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px 20px;
//   border-radius: 24px;
//   font-weight: 600;
//   font-size: 14px;
//   background: ${({ color }) => color.background};
//   color: ${({ color }) => color.color};
// `;

// export const PopBrowseButtons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;

//   .btn-group {
//     display: flex;

//     button {
//       margin-right: 8px;
//     }
//   }
// `;

// export const Button = styled.button`
//   height: 30px;
//   margin-bottom: 10px;
//   padding: 0 14px;
//   border-radius: 4px;
//   cursor: pointer;
//   border: ${({ variant }) =>
//     variant === "border" ? "0.7px solid #565eef" : "none"};
//   background: ${({ variant }) => (variant === "bg" ? "#565eef" : "transparent")};
//   color: ${({ variant }) => (variant === "bg" ? "#fff" : "#565eef")};

//   a {
//     text-decoration: none;
//     color: inherit;
//   }

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// import styled from "styled-components";
// import { Link } from "react-router-dom";

// //ОСНОВНОЕ ОКНО
// export const PopBrowseWrapper = styled.div`
//   display: block;
//   /* width: 100%;
//   height: 100%;
//   min-width: 375px;
//   min-height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 7; */

//   /* display: none; */
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

//   &.categories__theme {
//     opacity: 1;
//   }

//   &.theme-down {
//     display: none;
//     margin-bottom: 20px;
//   }

//   &.theme-top {
//     display: block;
//   }
// `;

// export const PopBrowseTopBlock = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 18px;
// `;

// export const PopBrowseTitle = styled.h3`
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// `;

// export const CategoriesTheme = styled.div`
//   display: inline-block;
//   width: auto;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: 0.4;
//   cursor: pointer;

//   p {
//     /* margin-bottom: 14px; */

//     font-size: 14px;
//     font-weight: 600;
//     line-height: 14px;
//     white-space: nowrap;

//     &._orange {
//       background-color: #ffe4c2;
//       color: #ff6d00;
//     }
//     &._green {
//       background-color: #b4fdd1;
//       color: #06b16e;
//     }
//     &._purple {
//       background-color: #e9d4ff;
//       color: #9a48f1;
//     }
//     &._gray {
//       background: #94a6be;
//       color: #ffffff;
//     }

//     &._active-category {
//       opacity: 1 !important;
//     }
//   }
// `;

// // // КАТЕГОРИЯ / ТЕМА
// // export const CategoriesTheme = styled.div`
// //   /* border-radius: 10px;
// //   padding: 6px 12px;
// //   font-size: 14px;
// //   font-weight: 500;
// //   text-align: center;
// //   background-color: ${(props) => props.color?.background || "#94A6BE"};
// //   color: ${(props) => props.color?.color || "#fff"}; */

// //   /* display: inline-block; */
// //   display: block;

// //   width: auto;
// //   height: 30px;
// //   padding: 8px 20px;
// //   border-radius: 24px;
// //   margin-right: 7px;
// //   /* opacity: 0.4; */

// //   &._orange {
// //     background-color: #ffe4c2;
// //     color: #ff6d00;
// //   }
// //   &._green {
// //     background-color: #b4fdd1;
// //     color: #06b16e;
// //   }
// //   &._purple {
// //     background-color: #e9d4ff;
// //     color: #9a48f1;
// //   }
// //   &._gray {
// //     background: #94a6be;
// //     color: #ffffff;
// //   }

// //   &._active-category {
// //     opacity: 1 !important;
// //   }
// // `;

// // СТАТУС
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
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   color: #94a6be;
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;
//   cursor: pointer;

//   p {
//     font-size: 14px;
//     line-height: 1;
//     letter-spacing: -0.14px;
//   }

//   &._gray {
//     background-color: #94a6be;
//     color: #ffffff;

//     p {
//       color: #ffffff;
//     }
//   }

//   &._hide {
//     display: none;
//   }
// `;

// // ФОРМА
// export const PopBrowseWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
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
//   /* color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1; */
// `;

// export const FormArea = styled.textarea`
//   max-width: 370px;
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: #eaeeff;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//   margin-top: 14px;
//   height: 200px;

//   &::placeholder {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 1px;
//     color: #94a6be;
//     letter-spacing: -0.14px;
//   }

//   &::-moz-placeholder {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 1;
//     color: #94a6be;
//     letter-spacing: -0.14px;
//   }
// `;

// // // КАТЕГОРИЯ ВНИЗУ
// // export const ThemeDown = styled.div`
// //   display: none;
// //   margin-bottom: 20px;
// // `;

// // export const ThemeCategory = styled.div`
// //   border-radius: 24px;
// //   border: 0.7px solid rgba(148, 166, 190, 0.4);
// //   padding: 11px 14px 10px;
// //   opacity: 1;
// //   & p {
// //     font-size: 14px;
// //     color: #94a6be;
// //   }
// // `;

// // // КНОПКИ
// // export const PopBrowseButtons = styled.div`
// //   display: flex;
// //   flex-wrap: wrap;
// //   align-items: flex-start;
// //   justify-content: space-between;

// //   button {
// //     height: 30px;
// //     margin-bottom: 10px;
// //     padding: 0 14px;
// //   }

// //   .btn-group button {
// //     margin-right: 8px;
// //   }
// // `;

// // export const Button = styled.button`
// //   height: 30px;
// //   margin-bottom: 10px;
// //   padding: 0 14px;
// //   border-radius: 6px;
// //   cursor: pointer;
// //   border: 0.7px solid #94a6be;
// //   background: transparent;
// //   transition: all 0.2s ease;

// //   a {
// //     text-decoration: none;
// //     color: inherit;
// //   }

// //   &:hover {
// //     background: #eaeeff;
// //   }

// //   &._btn-bg {
// //     background: #94a6be;
// //     color: #fff;

// //     &:hover {
// //       background: #7d90b4;
// //     }
// //   }
// // `;

// // Блок категории
// export const ThemeDown = styled.div`
//   display: none;
//   margin-bottom: 20px;

//   p {
//     margin-bottom: 14px;
//     font-size: 14px;
//     font-weight: 600;
//   }
// `;

// export const ThemeCategory = styled.div`
//   display: inline-block;
//   width: auto;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: 0.4;
//   cursor: pointer;

//   p {
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 14px;
//     white-space: nowrap;
//   }

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
//     background-color: #94a6be;
//     color: #ffffff;
//   }

//   &._active-category {
//     opacity: 1 !important;
//   }
// `;

// // Блок кнопок
// export const PopBrowseButtons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;

//   button {
//     height: 30px;
//     margin-bottom: 10px;
//     padding: 0 14px;
//   }

//   .btn-group {
//     display: flex;

//     button {
//       margin-right: 8px;
//     }
//   }
// `;

// // Кнопки с фоном
// export const Button = styled.button`
//   border-radius: 4px;
//   outline: none;

//   &._btn-bor {
//     border: 0.7px solid #565eef;
//     background: transparent;
//     color: #565eef;

//     a {
//       color: #565eef;
//       text-decoration: none;
//     }
//   }

//   &._btn-bg {
//     background: #565eef;
//     border: none;
//     color: #fff;

//     a {
//       color: #fff;
//       text-decoration: none;
//     }
//   }
// `;

// // Скрытые блоки
// export const Hide = styled.div`
//   display: none;
// `;

// // Статус
// export const StatusWrapper = styled.div`
//   margin-bottom: 11px;
// `;

// export const StatusTitle = styled.p`
//   margin-bottom: 14px;
//   font-size: 14px;
//   font-weight: 600;
// `;

// export const StatusThemes = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;

// export const StatusTheme = styled.div`
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   color: #94a6be;
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;

//   p {
//     font-size: 14px;
//     line-height: 1;
//     letter-spacing: -0.14px;
//   }
// `;

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

//   .categories__theme {
//     opacity: 1;
//   }

//   .theme-down {
//     display: none;
//     margin-bottom: 20px;
//   }

//   .theme-top {
//     display: block;
//   }
// `;

// export const PopBrowseTopBlock = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 18px;
// `;

// export const PopBrowseTitle = styled.h3`
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// `;

// export const CategoriesTheme = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px 20px;
//   border-radius: 24px;
//   background: ${({ color }) => color.background};
//   color: ${({ color }) => color.color};
//   font-weight: 500;
//   font-size: 14px;
// `;

// // export const StatusTheme = styled.div`
// //   display: inline-flex;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 8px 20px;
// //   border-radius: 24px;
// //   background: ${({ color }) => color.background};
// //   color: ${({ color }) => color.color};
// // `;

// // export const ThemeCategory = styled.div`
// //   display: inline-block;
// //   padding: 8px 20px;
// //   border-radius: 24px;
// //   background: ${({ color }) => color.background};
// //   color: ${({ color }) => color.color};
// // `;

// // export const CategoriesTheme = styled.div`
// //   /* display: inline-block;
// //   width: auto;
// //   height: 30px;
// //   padding: 8px 20px;
// //   border-radius: 24px;
// //   margin-right: 7px;
// //   opacity: 0.4;

// //   display: block;

// //   opacity: 1 !important */

// //   display: inline-flex;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 8px 20px;
// //   border-radius: 24px;
// //   font-weight: 500;
// //   font-size: 14px;
// //   text-align: center;
// //   background: ${({ color }) => themeColors[color]?.background || themeColors.gray.background};
// //   color: ${({ color }) => themeColors[color]?.color || themeColors.gray.color};

// // `;

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
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   color: #94a6be;
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;

//   p {
//     font-size: 14px;
//     line-height: 1;
//     letter-spacing: -0.14px;
//   }
// `;

// export const PopBrowseWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
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
//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
// `;

// export const FormArea = styled.textarea`
//   max-width: 370px;
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: #eaeeff;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//   margin-top: 14px;
//   height: 200px;

//   &::placeholder {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 1px;
//     color: #94a6be;
//     letter-spacing: -0.14px;
//   }
// `;

// export const ThemeDown = styled.div`
//   display: none;
//   margin-bottom: 20px;
// `;

// export const ThemeCategory = styled.div`
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   padding: 11px 14px 10px;
//   opacity: 1;
//   & p {
//     font-size: 14px;
//     color: #94a6be;
//   }
// `;

// export const PopBrowseButtons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// export const BtnGroup = styled.div`
//   display: flex;
//   align-items: center;

//   button {
//     margin-right: 8px;
//   }
// `;

// export const Button = styled.button`
//   height: 30px;
//   margin-bottom: 10px;
//   padding: 0 14px;
//   border-radius: 6px;
//   cursor: pointer;
//   border: 0.7px solid #94a6be;
//   background: transparent;
//   transition: all 0.2s ease;

//   a {
//     text-decoration: none;
//     color: inherit;
//   }

//   &:hover {
//     background: #eaeeff;
//   }

//   &._btn-bg {
//     background: #94a6be;
//     color: #fff;

//     &:hover {
//       background: #7d90b4;
//     }
//   }
// `;

// import styled from "styled-components";

// export const SPopBrowse = styled.div`
//   /* display: none; */
//   /* display: block; */
//   width: 100%;
//   height: 100%;
//   min-width: 375px;
//   min-height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 7;
// `;

// export const SPopBrowseContainer = styled.div`
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

// export const SPopBrowseBlock = styled.div`
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

// export const SPopBrowseContent = styled.div`
//   display: block;
//   text-align: left;
// `;

// export const SPopBrowseTopBlock = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 18px;
// `;

// export const SPopBrowseTtl = styled.h3`
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// `;

// export const SCategoriesTheme = styled.div`
//   display: inline-block;
//   width: auto;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: 0.4;
// `;

// export const SPopBrowseStatus = styled.div`
//   margin-bottom: 11px;
// `;

// export const SStatusPSubttl = styled.p`
//   margin-bottom: 14px;

//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
// `;

// export const SPopBrowseWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// export const SPopBrowseForm = styled.form`
//   max-width: 370px;
//   width: 100%;
//   display: block;
//   margin-bottom: 20px;
// `;

// export const SFormBrowseBlock = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const SThemeDownCategories = styled.div`
//   opacity: 1;

//   display: none;
//   margin-bottom: 20px;
// `;

// export const SCategoriesPSubttl = styled.div`
//   opacity: 1;

//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
// `;

// export const SPopBrowseBtnBrowse = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// export const SFormBrowseBlock = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const SFormBrowseBlock = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const SLoadingText = styled.p`
//   font-size: 24px;
//   font-weight: bold;
// `;

// export const SMain = styled.main`
//   width: 100%;
//   background-color: #eaeef6;
// `;
