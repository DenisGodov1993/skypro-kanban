import Card from "../Card/Card";
import { cardList } from "../../data.js";

const Column = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList
          .filter((card) => card.status === title)
          .map((card) => (
            <Card key={card.id} data={card} />
          ))}
      </div>
    </div>
  );
};

export default Column;

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
