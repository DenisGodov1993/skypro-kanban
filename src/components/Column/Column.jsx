import Card from "../Card/Card";
import { cardList } from "../../data.js";
import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";

const Column = ({ title }) => {
  return (
    <SMainColumn>
      <SColumnTitle>
        <p>{title}</p>
      </SColumnTitle>
      <SCards>
        {cardList
          .filter((card) => card.status === title)
          .map((card) => (
            <Card key={card.id} data={card} />
          ))}
      </SCards>
    </SMainColumn>
  );
};

export default Column;

// ПЕРВОНАЧАЛЬНЫЙ КОД
// import Card from "../Card/Card";

// const Column = () => {
//   return (
//     <>
//       <div className="main__column column">
//         <div className="column__title">
//           <p>Без статуса</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>Нужно сделать</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>В работе</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>Тестирование</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>Готово</p>
//         </div>
//         <Card />
//       </div>
//     </>
//   );
// };

// export default Column;
