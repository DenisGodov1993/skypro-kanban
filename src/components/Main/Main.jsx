import Column from "../Column/Column";
import { SMain, SContainer, SMainBlock, SMainContent } from "./Main.styled";

const Main = () => {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {statuses.map((status) => (
              <Column key={status} title={status} />
            ))}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;
