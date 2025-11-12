import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg) translateZ(0); }
  100% { transform: rotate(360deg) translateZ(0); } 
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.25); opacity: 0.6; }
  100% { transform: scale(1); opacity: 1; }
`;

const floatUp = keyframes`
  0% { transform: translateY(6px); opacity: 0.4; }
  50% { transform: translateY(-6px); opacity: 1; }
  100% { transform: translateY(6px); opacity: 0.4; }
`;

export const SLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#f5f7fb" : "#151419"};
  transition: background-color 0.3s ease;
`;

export const SLoadingText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $themeMode }) => ($themeMode === "light" ? "#3657c8" : "#8c8cff")};
  letter-spacing: 0.3px;
  margin: 0;
  opacity: 0;
  animation: ${pulse} 1.2s ease-in-out 0.15s forwards;
`;

/* Spinner wrapper — содержит кольца и точки */
export const SSpinner = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: inline-block;
  transform: translateZ(0);
`;

/* Кольца разного размера, вращаются в разные стороны и с разной скоростью */
export const SRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  /* border: 6px solid rgba(54, 87, 200, 0.12); */
  border: 6px solid
    ${({ $themeMode }) =>
      $themeMode === "light"
        ? "rgba(54, 87, 200, 0.12)"
        : "rgba(255, 255, 255, 0.1)"};
  box-sizing: border-box;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    /* border-top: 6px solid #3657c8; */
    border-top: 6px solid
      ${({ $themeMode }) => ($themeMode === "light" ? "#3657c8" : "#8c8cff")};
    border-left: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
    box-sizing: border-box;
  }

  &.ring--large {
    transform: scale(1);
    animation: ${spin} 1.6s linear infinite;
    &:before {
      border-width: 6px;
    }
  }

  &.ring--medium {
    transform: scale(0.7);
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    animation: ${spin} 1.1s linear reverse infinite;
    opacity: 0.95;
    &:before {
      border-width: 5px;
      /* border-top-color: #6b7ff0; */
      border-top-color: ${({ $themeMode }) =>
        $themeMode === "light" ? "#6b7ff0" : "#b3b3ff"};

    }
  }

  &.ring--small {
    transform: scale(0.45);
    top: 27.5%;
    left: 27.5%;
    width: 45%;
    height: 45%;
    animation: ${spin} 0.9s linear infinite;
    opacity: 0.9;
    &:before {
      border-width: 4px;
      /* border-top-color: rgba(54, 87, 200, 0.9); */
      border-top-color: ${({ $themeMode }) =>
        $themeMode === "light" ? "#3657c8" : "#9a9aff"};
    }
  }
`;

/* Три плавающие точки внутри спиннера — добавляют динамики */
export const SDots = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  pointer-events: none;
`;

export const SDot = styled.span`
  --size: 10px;
  width: var(--size);
  height: var(--size);
  /* background: linear-gradient(180deg, #3657c8, #6b7ff0); */
  background: ${({ $themeMode }) =>
    $themeMode === "light"
      ? "linear-gradient(180deg, #3657c8, #6b7ff0)"
      : "linear-gradient(180deg, #8c8cff, #6b7ff0)"};
  border-radius: 50%;
  display: inline-block;
  transform-origin: center;
  opacity: 0.95;
  animation: ${floatUp} 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  /* stagger через CSS-переменную --i */
  animation-delay: calc(var(--i, 0) * 0.15s);
  /* box-shadow: 0 6px 18px rgba(54, 87, 200, 0.14); */
  box-shadow: 0 6px 18px
    ${({ $themeMode }) =>
      $themeMode === "light"
        ? "rgba(54, 87, 200, 0.14)"
        : "rgba(255, 255, 255, 0.15)"};
`;

export const SMain = styled.main`
  width: 100%;
  /* background-color: #eaeef6; */
  background-color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#eaeef6" : "#151419"};
  color: ${({ $themeMode }) => ($themeMode === "light" ? "#000" : "#fff")}; 
`;

export const SContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const SMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const SMainContent = styled.div`
  width: 100%;
  display: flex;
`;

// import styled, { keyframes } from "styled-components";

// const spin = keyframes`
//   0% { transform: rotate(0deg) translateZ(0); }
//   100% { transform: rotate(360deg) translateZ(0); } 
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.25); opacity: 0.6; }
//   100% { transform: scale(1); opacity: 1; }
// `;

// const floatUp = keyframes`
//   0% { transform: translateY(6px); opacity: 0.4; }
//   50% { transform: translateY(-6px); opacity: 1; }
//   100% { transform: translateY(6px); opacity: 0.4; }
// `;

// export const SLoading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// export const SLoadingText = styled.p`
//   font-size: 16px;
//   font-weight: 600;
//   color: ${({ themeMode }) => (themeMode === "light" ? "#3657c8" : "#8c8cff")};
//   letter-spacing: 0.3px;
//   margin: 0;
//   opacity: 0;
//   animation: ${pulse} 1.2s ease-in-out 0.15s forwards;
// `;

// /* Spinner wrapper — содержит кольца и точки */
// export const SSpinner = styled.div`
//   position: relative;
//   width: 120px;
//   height: 120px;
//   display: inline-block;
//   transform: translateZ(0);
// `;

// /* Кольца разного размера, вращаются в разные стороны и с разной скоростью */
// export const SRing = styled.div`
//   position: absolute;
//   inset: 0;
//   border-radius: 50%;
//   border: 6px solid rgba(54, 87, 200, 0.12);
//   box-sizing: border-box;
//   &:before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     border-radius: 50%;
//     border-top: 6px solid #3657c8;
//     border-left: 6px solid transparent;
//     border-bottom: 6px solid transparent;
//     border-right: 6px solid transparent;
//     box-sizing: border-box;
//   }

//   &.ring--large {
//     transform: scale(1);
//     animation: ${spin} 1.6s linear infinite;
//     &:before {
//       border-width: 6px;
//     }
//   }

//   &.ring--medium {
//     transform: scale(0.7);
//     top: 15%;
//     left: 15%;
//     width: 70%;
//     height: 70%;
//     animation: ${spin} 1.1s linear reverse infinite;
//     opacity: 0.95;
//     &:before {
//       border-width: 5px;
//       border-top-color: #6b7ff0;
//     }
//   }

//   &.ring--small {
//     transform: scale(0.45);
//     top: 27.5%;
//     left: 27.5%;
//     width: 45%;
//     height: 45%;
//     animation: ${spin} 0.9s linear infinite;
//     opacity: 0.9;
//     &:before {
//       border-width: 4px;
//       border-top-color: rgba(54, 87, 200, 0.9);
//     }
//   }
// `;

// /* Три плавающие точки внутри спиннера — добавляют динамики */
// export const SDots = styled.div`
//   position: absolute;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
//   pointer-events: none;
// `;

// export const SDot = styled.span`
//   --size: 10px;
//   width: var(--size);
//   height: var(--size);
//   background: linear-gradient(180deg, #3657c8, #6b7ff0);
//   border-radius: 50%;
//   display: inline-block;
//   transform-origin: center;
//   opacity: 0.95;
//   animation: ${floatUp} 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
//   /* stagger через CSS-переменную --i */
//   animation-delay: calc(var(--i, 0) * 0.15s);
//   box-shadow: 0 6px 18px rgba(54, 87, 200, 0.14);
// `;

// export const SMain = styled.main`
//   width: 100%;
//   /* background-color: #eaeef6; */
//   background-color: ${({ themeMode }) =>
//     themeMode === "light" ? "#eaeef6" : "#151419"};
//   color: ${({ themeMode }) => (themeMode === "light" ? "#000" : "#fff")}; 
// `;

// export const SContainer = styled.div`
//   max-width: 1260px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 30px;
// `;

// export const SMainBlock = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   padding: 25px 0 49px;
// `;

// export const SMainContent = styled.div`
//   width: 100%;
//   display: flex;
// `;
















// import styled, { keyframes } from "styled-components";

// const spin = keyframes`
//   0% { transform: rotate(0deg) translateZ(0); }
//   100% { transform: rotate(360deg) translateZ(0); }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.25); opacity: 0.6; }
//   100% { transform: scale(1); opacity: 1; }
// `;

// const floatUp = keyframes`
//   0% { transform: translateY(6px); opacity: 0.4; }
//   50% { transform: translateY(-6px); opacity: 1; }
//   100% { transform: translateY(6px); opacity: 0.4; }
// `;

// export const SLoading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   /* background-color: ${({ themeMode }) =>
//     themeMode === "light" ? "#f5f7fb" : "#12121f"}; */

//   /* height: calc(100vh - 80px); оставляет место под header, если есть
//   background: linear-gradient(180deg, #f5f7fb 0%, #eef2fb 100%);
//   gap: 20px;
//   padding: 20px; */
// `;

// export const SLoadingText = styled.p`
//   /* font-size: 24px;
//   font-weight: bold; */

//   font-size: 16px;
//   font-weight: 600;
//   /* color: #3657c8; */
//   color: ${({ themeMode }) => (themeMode === "light" ? "#3657c8" : "#8c8cff")};
//   letter-spacing: 0.3px;
//   margin: 0;
//   opacity: 0;
//   animation: ${pulse} 1.2s ease-in-out 0.15s forwards;
// `;

// /* Spinner wrapper — содержит кольца и точки */
// export const SSpinner = styled.div`
//   position: relative;
//   width: 120px;
//   height: 120px;
//   display: inline-block;
//   transform: translateZ(0);
// `;

// /* Кольца разного размера, вращаются в разные стороны и с разной скоростью */
// export const SRing = styled.div`
//   position: absolute;
//   inset: 0;
//   border-radius: 50%;
//   border: 6px solid rgba(54, 87, 200, 0.12);
//   box-sizing: border-box;
//   &:before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     border-radius: 50%;
//     border-top: 6px solid #3657c8;
//     border-left: 6px solid transparent;
//     border-bottom: 6px solid transparent;
//     border-right: 6px solid transparent;
//     box-sizing: border-box;
//   }

//   &.ring--large {
//     transform: scale(1);
//     animation: ${spin} 1.6s linear infinite;
//     &:before { border-width: 6px; }
//   }

//   &.ring--medium {
//     transform: scale(0.7);
//     top: 15%;
//     left: 15%;
//     width: 70%;
//     height: 70%;
//     animation: ${spin} 1.1s linear reverse infinite;
//     opacity: 0.95;
//     &:before { border-width: 5px; border-top-color: #6b7ff0; }
//   }

//   &.ring--small {
//     transform: scale(0.45);
//     top: 27.5%;
//     left: 27.5%;
//     width: 45%;
//     height: 45%;
//     animation: ${spin} 0.9s linear infinite;
//     opacity: 0.9;
//     &:before { border-width: 4px; border-top-color: rgba(54,87,200,0.9); }
//   }
// `;

// /* Три плавающие точки внутри спиннера — добавляют динамики */
// export const SDots = styled.div`
//   position: absolute;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
//   pointer-events: none;
// `;

// export const SDot = styled.span`
//   --size: 10px;
//   width: var(--size);
//   height: var(--size);
//   background: linear-gradient(180deg, #3657c8, #6b7ff0);
//   border-radius: 50%;
//   display: inline-block;
//   transform-origin: center;
//   opacity: 0.95;
//   animation: ${floatUp} 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
//   /* stagger через CSS-переменную --i */
//   animation-delay: calc(var(--i, 0) * 0.15s);
//   box-shadow: 0 6px 18px rgba(54, 87, 200, 0.14);
// `;

// export const SMain = styled.main`
//   width: 100%;
//   /* background-color: #eaeef6; */
//   background-color: ${({ themeMode }) =>
//     themeMode === "light" ? "#eaeef6" : "#1e1e2f"};
//   color: ${({ themeMode }) => (themeMode === "light" ? "#000" : "#fff")};
// `;

// export const SContainer = styled.div`
//   max-width: 1260px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 30px;
// `;

// export const SMainBlock = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   padding: 25px 0 49px;
// `;

// export const SMainContent = styled.div`
//   width: 100%;
//   display: flex;
// `;

// import styled, { keyframes } from "styled-components";

// const spin = keyframes`
//   0% { transform: rotate(0deg) translateZ(0); }
//   100% { transform: rotate(360deg) translateZ(0); }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.25); opacity: 0.6; }
//   100% { transform: scale(1); opacity: 1; }
// `;

// const floatUp = keyframes`
//   0% { transform: translateY(6px); opacity: 0.4; }
//   50% { transform: translateY(-6px); opacity: 1; }
//   100% { transform: translateY(6px); opacity: 0.4; }
// `;

// export const SLoading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;

//   /* height: calc(100vh - 80px); оставляет место под header, если есть
//   background: linear-gradient(180deg, #f5f7fb 0%, #eef2fb 100%);
//   gap: 20px;
//   padding: 20px; */
// `;

// export const SLoadingText = styled.p`
//   /* font-size: 24px;
//   font-weight: bold; */

//   font-size: 16px;
//   font-weight: 600;
//   color: #3657c8;
//   letter-spacing: 0.3px;
//   margin: 0;
//   opacity: 0;
//   animation: ${pulse} 1.2s ease-in-out 0.15s forwards;
// `;

// /* Spinner wrapper — содержит кольца и точки */
// export const SSpinner = styled.div`
//   position: relative;
//   width: 120px;
//   height: 120px;
//   display: inline-block;
//   transform: translateZ(0);
// `;

// /* Кольца разного размера, вращаются в разные стороны и с разной скоростью */
// export const SRing = styled.div`
//   position: absolute;
//   inset: 0;
//   border-radius: 50%;
//   border: 6px solid rgba(54, 87, 200, 0.12);
//   box-sizing: border-box;
//   &:before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     border-radius: 50%;
//     border-top: 6px solid #3657c8;
//     border-left: 6px solid transparent;
//     border-bottom: 6px solid transparent;
//     border-right: 6px solid transparent;
//     box-sizing: border-box;
//   }

//   &.ring--large {
//     transform: scale(1);
//     animation: ${spin} 1.6s linear infinite;
//     &:before { border-width: 6px; }
//   }

//   &.ring--medium {
//     transform: scale(0.7);
//     top: 15%;
//     left: 15%;
//     width: 70%;
//     height: 70%;
//     animation: ${spin} 1.1s linear reverse infinite;
//     opacity: 0.95;
//     &:before { border-width: 5px; border-top-color: #6b7ff0; }
//   }

//   &.ring--small {
//     transform: scale(0.45);
//     top: 27.5%;
//     left: 27.5%;
//     width: 45%;
//     height: 45%;
//     animation: ${spin} 0.9s linear infinite;
//     opacity: 0.9;
//     &:before { border-width: 4px; border-top-color: rgba(54,87,200,0.9); }
//   }
// `;

// /* Три плавающие точки внутри спиннера — добавляют динамики */
// export const SDots = styled.div`
//   position: absolute;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
//   pointer-events: none;
// `;

// export const SDot = styled.span`
//   --size: 10px;
//   width: var(--size);
//   height: var(--size);
//   background: linear-gradient(180deg, #3657c8, #6b7ff0);
//   border-radius: 50%;
//   display: inline-block;
//   transform-origin: center;
//   opacity: 0.95;
//   animation: ${floatUp} 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
//   /* stagger через CSS-переменную --i */
//   animation-delay: calc(var(--i, 0) * 0.15s);
//   box-shadow: 0 6px 18px rgba(54, 87, 200, 0.14);
// `;

// export const SMain = styled.main`
//   width: 100%;
//   background-color: #eaeef6;
// `;

// export const SContainer = styled.div`
//   max-width: 1260px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 30px;
// `;

// export const SMainBlock = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   padding: 25px 0 49px;
// `;

// export const SMainContent = styled.div`
//   width: 100%;
//   display: flex;
// `;

// import styled from "styled-components";

// export const SLoading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// export const SLoadingText = styled.p`
//   font-size: 24px;
//   font-weight: bold;
// `;

// export const SMain = styled.main`
//   width: 100%;
//   background-color: #eaeef6;
// `;

// export const SContainer = styled.div`
//   max-width: 1260px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 30px;
// `;

// export const SMainBlock = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   padding: 25px 0 49px;
// `;

// export const SMainContent = styled.div`
//   width: 100%;
//   display: flex;
// `;
