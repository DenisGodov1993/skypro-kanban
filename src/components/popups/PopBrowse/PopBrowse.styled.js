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

  .categories__theme {
    opacity: 1;
  }

  .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  .theme-top {
    display: block;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;


export const CategoriesTheme = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 24px;
  background: ${({ color }) => color.background};
  color: ${({ color }) => color.color};
  font-weight: 500;
  font-size: 14px;
`;

// export const StatusTheme = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px 20px;
//   border-radius: 24px;
//   background: ${({ color }) => color.background};
//   color: ${({ color }) => color.color};
// `;

// export const ThemeCategory = styled.div`
//   display: inline-block;
//   padding: 8px 20px;
//   border-radius: 24px;
//   background: ${({ color }) => color.background};
//   color: ${({ color }) => color.color};
// `;

// export const CategoriesTheme = styled.div`
//   /* display: inline-block;
//   width: auto;
//   height: 30px;
//   padding: 8px 20px;
//   border-radius: 24px;
//   margin-right: 7px;
//   opacity: 0.4;

//   display: block;

//   opacity: 1 !important */






//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px 20px;
//   border-radius: 24px;
//   font-weight: 500;
//   font-size: 14px;
//   text-align: center;
//   background: ${({ color }) => themeColors[color]?.background || themeColors.gray.background};
//   color: ${({ color }) => themeColors[color]?.color || themeColors.gray.color};

// `;

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
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeeff;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const ThemeCategory = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  opacity: 1;
  & p {
    font-size: 14px;
    color: #94a6be;
  }
`;

export const PopBrowseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 8px;
  }
`;

export const Button = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 6px;
  cursor: pointer;
  border: 0.7px solid #94a6be;
  background: transparent;
  transition: all 0.2s ease;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background: #eaeeff;
  }

  &._btn-bg {
    background: #94a6be;
    color: #fff;

    &:hover {
      background: #7d90b4;
    }
  }
`;



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

// // export const SFormBrowseBlock = styled.div`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // export const SFormBrowseBlock = styled.div`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // export const SLoadingText = styled.p`
// //   font-size: 24px;
// //   font-weight: bold;
// // `;

// // export const SMain = styled.main`
// //   width: 100%;
// //   background-color: #eaeef6;
// // `;























// .pop-browse { 
   
//   display: block; 
//   width: 100%;
//   height: 100%;
//   min-width: 375px;
//   min-height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 7;
// } 
// .pop-browse__container {
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   padding: 0 16px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: rgba(0, 0, 0, 0.4);
// }
// .pop-browse__block {
//   display: block;
//   margin: 0 auto;
//   background-color: #FFFFFF;
//   max-width: 630px;
//   width: 100%;
//   padding: 40px 30px 38px;
//   border-radius: 10px;
//   border: 0.7px solid #D4DBE5;
//   position: relative;
// }
// .pop-browse__content {
//   display: block;
//   text-align: left;
// }
// .pop-browse__content .categories__theme {
//   opacity: 1;
// }
// .pop-browse__content .theme-down {
//   display: none;
//   margin-bottom: 20px;
// }
// .pop-browse__content .theme-top {
//   display: block;
// }



// .pop-browse__top-block {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 18px;
// } 
// .pop-browse__ttl {
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
// } 
// .pop-browse__wrap {
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
// }
// .pop-browse__form {
//   max-width: 370px;
//   width: 100%;
//   display: block;
//   margin-bottom: 20px;
// } 
// .pop-browse__btn-browse, .pop-browse__btn-edit {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;
// }
// .pop-browse__btn-browse button, .pop-browse__btn-edit button {
//   height: 30px;
//   margin-bottom: 10px;
//   padding: 0 14px;
// }
// .pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
//   margin-right: 8px;
// }

// .form-browse__block {
//   display: flex;
//   flex-direction: column;
// } 
// .form-browse__area {
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
// }
// .form-browse__area::-moz-placeholder {
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 1px;
//   color: #94A6BE;
//   letter-spacing: -0.14px;
// }
// .form-browse__area::placeholder {
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 1px;
//   color: #94A6BE;
//   letter-spacing: -0.14px;
// }

// .status {
//   margin-bottom: 11px;
//  }

// .status__p {
//   margin-bottom: 14px;
//  }

// .status__themes {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
//  }
//  .status__theme {
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   color: #94A6BE;
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;
//  }
//  .status__theme p {
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//  }




