import styled from "styled-components";

export const SPopNewCard = styled.div`
  display: flex;
  /* display: none; */
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const SPopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const SPopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  /* background-color: #ffffff; */
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#20202c" : "#ffffff"};
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f0f0f0" : "#000000")};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  /* border: 0.7px solid #d4dbe5; */
  border: 0.7px solid
    ${({ themeMode }) =>
      themeMode === "dark" ? "#444" : "rgba(212, 219, 229, 1)"};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const SPopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const SPopNewCardTtl = styled.h3`
  /* color: #000; */
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f0f0f0" : "#000")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const SPopNewCardClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  /* text-decoration: none; */
  background: none;
  border: none;

  &:hover {
    color: #000000;
  }
`;

export const SPopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const SPopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const SFormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SFormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  /* border: 0.7px solid rgba(148, 166, 190, 0.4); */
  border: 0.7px solid
    ${({ themeMode }) =>
      themeMode === "dark"
        ? "rgba(255,255,255,0.2)"
        : "rgba(148, 166, 190, 0.4)"};
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#2a2a38" : "#fff"};
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f0f0f0" : "#000")};
  border-radius: 8px;
  font-size: 14px;
  margin: 20px 0;

  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    /* color: #94a6be; */
    color: ${({ themeMode }) => (themeMode === "dark" ? "#888" : "#94a6be")};
    font-weight: 400;

    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const SFormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  /* border: 0.7px solid rgba(148, 166, 190, 0.4); */
  border: 1px solid
    ${({ themeMode }) =>
      themeMode === "dark"
        ? "rgba(255,255,255,0.2)"
        : "rgba(148, 166, 190, 0.4)"};
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#2a2a38" : "#fff"};
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f0f0f0" : "#000")};
  border-radius: 8px;
  font-size: 14px;
  height: 200px;
  margin-top: 14px;

  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    /* color: #94a6be; */
    color: ${({ themeMode }) => (themeMode === "dark" ? "#888" : "#94a6be")};
    font-weight: 400;

    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;

    @media screen and (max-width: 495px) {
      max-width: 100%;
      height: 134px;
    }
  }
`;

export const SSubttl = styled.label`
  /* color: #000; */
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f0f0f0" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SPopNewCardCategories = styled.div`
  margin-bottom: 20px;
`;

export const SCategoriesPSubttl = styled.p`
  margin-bottom: 14px;
  /* color: #000; */
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f0f0f0" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SCategoriesThemes = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  .categories__theme {
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    cursor: pointer;

    &._orange {
      background-color: #ffe4c2;
      color: #ff6d00;
    }

    &._green {
      background-color: #b4fdd1;
      color: #06b16e;
    }
    &._purple {
      background-color: #e9d4ff;
      color: #9a48f1;
    }
    &._gray {
      background: #94a6be;
      color: #ffffff;
    }

    &._active-category {
      opacity: 1 !important;
    }

    p {
      /* margin-bottom: 14px;  */
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      white-space: nowrap;
    }
  }
`;

export const SFormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;
