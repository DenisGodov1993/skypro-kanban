import Card from "../Card/Card";

const Column = () => {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <Card />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Нужно сделать</p>
        </div>
        <Card />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>В работе</p>
        </div>
        <Card />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Тестирование</p>
        </div>
        <Card />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Готово</p>
        </div>
        <Card />
      </div>
    </>
  );
};

export default Column;
