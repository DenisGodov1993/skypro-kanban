import { useContext } from "react";
import { Link } from "react-router-dom";
import { Draggable } from "@hello-pangea/dnd";
import { ThemeContext } from "../../context/ThemeContext";
import {
  SCardsItem,
  SCardsCard,
  SCardGroup,
  SCardTheme,
  SCardThemeP,
  SCardBtn,
  SCardContent,
  SCardTitle,
  SCardDate,
} from "./Card.styled";

const Card = ({ data, index }) => {
  const { theme } = useContext(ThemeContext);

  if (!data) return null;

  const { topic, title, date, _id, id } = data;

  const getColorClass = {
    "Web Design": "_orange",
    Research: "_green",
    Copywriting: "_purple",
  };

  const colorClass = getColorClass[topic] || "_gray";
  const taskId = _id || id;

  return (
    <Draggable draggableId={taskId.toString()} index={index}>
      {(provided) => (
        <SCardsItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          $themeMode={theme}
        >
          <SCardsCard $themeMode={theme}>
            <SCardGroup>
              <SCardTheme className={`${colorClass}`} $themeMode={theme}>
                <SCardThemeP>{topic}</SCardThemeP>
              </SCardTheme>
              <Link to={`/card/${taskId}`}>
                <SCardBtn $themeMode={theme}>
                  <div />
                  <div />
                  <div />
                </SCardBtn>
              </Link>
            </SCardGroup>

            <SCardContent>
              {/* <SCardTitle $themeMode={theme}>{title}</SCardTitle> */}

              <SCardTitle $themeMode={theme}>
                {title.length > 60 ? title.slice(0, 60) + "…" : title}
              </SCardTitle>

              <SCardDate $themeMode={theme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={13}
                  height={13}
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_415)">
                    <path
                      d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                      stroke="#94A6BE"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                      stroke="#94A6BE"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_415">
                      <rect width={13} height={13} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  {new Date(date).toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}
                </p>
              </SCardDate>
            </SCardContent>
          </SCardsCard>
        </SCardsItem>
      )}
    </Draggable>
  );
};

export default Card;

// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Draggable } from "@hello-pangea/dnd";
// import { ThemeContext } from "../../context/ThemeContext";
// import {
//   SCardsItem,
//   SCardsCard,
//   SCardGroup,
//   SCardTheme,
//   SCardThemeP,
//   SCardBtn,
//   SCardContent,
//   SCardTitle,
//   SCardDate,
// } from "./Card.styled";

// const Card = ({ data, index }) => {
//   const { theme } = useContext(ThemeContext);

//   if (!data) return null;

//   const { topic, title, date, _id, id } = data;

//   const getColorClass = {
//     "Web Design": "_orange",
//     Research: "_green",
//     Copywriting: "_purple",
//   };

//   const colorClass = getColorClass[topic] || "_gray";
//   const taskId = _id || id;

//   return (
//     <Draggable draggableId={taskId.toString()} index={index}>
//       {(provided) => (
//         <SCardsItem
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//           $themeMode={theme}
//         >
//           <SCardsCard $themeMode={theme}>
//             <SCardGroup>
//               <SCardTheme className={`${colorClass}`} $themeMode={theme}>
//                 <SCardThemeP>{topic}</SCardThemeP>
//               </SCardTheme>
//               <Link to={`/card/${taskId}`}>
//                 <SCardBtn $themeMode={theme}>
//                   <div />
//                   <div />
//                   <div />
//                 </SCardBtn>
//               </Link>
//             </SCardGroup>

//             <SCardContent>
//               <SCardTitle $themeMode={theme}>{title}</SCardTitle>
//               <SCardDate $themeMode={theme}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={13}
//                   height={13}
//                   viewBox="0 0 13 13"
//                   fill="none"
//                 >
//                   <g clipPath="url(#clip0_1_415)">
//                     <path
//                       d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
//                       stroke="#94A6BE"
//                       strokeWidth="0.8"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
//                       stroke="#94A6BE"
//                       strokeWidth="0.8"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1_415">
//                       <rect width={13} height={13} fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <p>
//                   {new Date(date).toLocaleDateString("ru-RU", {
//                     day: "2-digit",
//                     month: "2-digit",
//                     year: "2-digit",
//                   })}
//                 </p>
//               </SCardDate>
//             </SCardContent>
//           </SCardsCard>
//         </SCardsItem>
//       )}
//     </Draggable>
//   );
// };

// export default Card;
