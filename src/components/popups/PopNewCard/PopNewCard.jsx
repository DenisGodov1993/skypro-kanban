import { useState, useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { ThemeContext } from "../../../context/ThemeContext";
import Calendar from "../../Calendar/Calendar";
import { toast } from "react-toastify";
import {
  SPopNewCard,
  SPopNewCardContainer,
  SPopNewCardBlock,
  SPopNewCardContent,
  SPopNewCardTtl,
  SPopNewCardClose,
  SPopNewCardWrap,
  SPopNewCardForm,
  SFormNewBlock,
  SFormNewInput,
  SFormNewArea,
  SSubttl,
  SPopNewCardCategories,
  SCategoriesPSubttl,
  SCategoriesThemes,
  SFormNewCreate,
} from "./PopNewCard.styled";

const PopNewCard = ({ onClose }) => {
  const { createNewTask } = useContext(TasksContext);
  const { theme } = useContext(ThemeContext);

  // Локальные состояния
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [date, setDate] = useState(new Date().toISOString());

  // Массив категорий с цветами
  const categories = [
    { name: "Web Design", color: "_orange" },
    { name: "Research", color: "_green" },
    { name: "Copywriting", color: "_purple" },
  ];

  // Обработчик формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Введите название задачи");
      return;
    }

    if (!description.trim()) {
      alert("Введите описание задачи");
      return;
    }

    // Создаем объект задачи
    const newTask = {
      title: title.trim(),
      topic: category,
      status: "Без статуса",
      description: description.trim(),
      date,
    };

    try {
      await createNewTask(newTask); // вызов из useContext
      // очистка формы
      setTitle("");
      setDescription("");
      setCategory("Web Design");
      setDate(new Date().toISOString());
      onClose(); // Закрываем модалку
      toast.success("Задача успешно создана!");
    } catch (error) {
      console.error("Ошибка создания задачи:", error);
      toast.error("Не удалось создать задачу. Попробуйте позже.");
      alert("Не удалось создать задачу. Попробуйте позже.");
    }
  };

  return (
    <SPopNewCard>
      <SPopNewCardContainer>
        <SPopNewCardBlock themeMode={theme}>
          <SPopNewCardContent>
            <SPopNewCardTtl themeMode={theme}>Создание задачи</SPopNewCardTtl>
            <SPopNewCardClose themeMode={theme} onClick={onClose}>
              ✖
            </SPopNewCardClose>

            <SPopNewCardWrap>
              <SPopNewCardForm id="newTaskForm" onSubmit={handleSubmit}>
                <SFormNewBlock>
                  <SSubttl themeMode={theme}>Название задачи</SSubttl>
                  <SFormNewInput
                    themeMode={theme}
                    type="text"
                    id="formTitle"
                    name="name"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </SFormNewBlock>

                <SFormNewBlock>
                  <SSubttl themeMode={theme}>Описание задачи</SSubttl>
                  <SFormNewArea
                    themeMode={theme}
                    id="textArea"
                    name="text"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </SFormNewBlock>
              </SPopNewCardForm>
              <Calendar
                editable={true}
                selectedDate={date}
                onDateChange={(newDate) => setDate(newDate)}
              />
            </SPopNewCardWrap>

            <SPopNewCardCategories>
              <SCategoriesPSubttl themeMode={theme}>
                Категория
              </SCategoriesPSubttl>
              <SCategoriesThemes>
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className={`categories__theme ${
                      cat.name === category ? "_active-category" : ""
                    } ${cat.color}`}
                    onClick={() => setCategory(cat.name)}
                  >
                    {/* <p className={cat.color}>{cat.name}</p> */}
                    <p>{cat.name}</p>
                  </div>
                ))}
              </SCategoriesThemes>
            </SPopNewCardCategories>

            <SFormNewCreate form="newTaskForm" type="submit">
              Создать задачу
            </SFormNewCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;
