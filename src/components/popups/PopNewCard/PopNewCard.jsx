import { useState, useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";
import Calendar from "../../Calendar/Calendar";
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
    } catch (error) {
      console.error("Ошибка создания задачи:", error);
      alert("Не удалось создать задачу. Попробуйте позже.");
    }
  };

  return (
    <SPopNewCard>
      <SPopNewCardContainer>
        <SPopNewCardBlock>
          <SPopNewCardContent>
            <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
            <SPopNewCardClose onClick={onClose}>✖</SPopNewCardClose>

            <SPopNewCardWrap>
              <SPopNewCardForm id="newTaskForm" onSubmit={handleSubmit}>
                <SFormNewBlock>
                  <SSubttl htmlFor="formTitle">Название задачи</SSubttl>
                  <SFormNewInput
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
                  <SSubttl htmlFor="textArea">Описание задачи</SSubttl>
                  <SFormNewArea
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
              <SCategoriesPSubttl>Категория</SCategoriesPSubttl>
              <SCategoriesThemes>
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className={`categories__theme ${
                      cat.name === category ? "_active-category" : ""
                    } ${cat.color}`}
                    onClick={() => setCategory(cat.name)}
                  >
                    <p className={cat.color}>{cat.name}</p>
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

// import { useState, useContext } from "react";
// import { TasksContext } from "../../../context/TasksContext";
// import Calendar from "../../Calendar/Calendar";
// import {
//   SPopNewCard,
//   SPopNewCardContainer,
//   SPopNewCardBlock,
//   SPopNewCardContent,
//   SPopNewCardTtl,
//   SPopNewCardClose,
//   SPopNewCardWrap,
//   SPopNewCardForm,
//   SFormNewBlock,
//   SFormNewInput,
//   SFormNewArea,
//   SSubttl,
//   SPopNewCardCategories,
//   SCategoriesPSubttl,
//   SCategoriesThemes,
//   SFormNewCreate,
// } from "./PopNewCard.styled";

// const PopNewCard = ({ onClose }) => {
//   const { createNewTask } = useContext(TasksContext);

//   // Локальные состояния
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Web Design");
//   const [date, setDate] = useState(new Date().toISOString());

//   // Массив категорий с цветами
//   const categories = [
//     { name: "Web Design", color: "_orange" },
//     { name: "Research", color: "_green" },
//     { name: "Copywriting", color: "_purple" },
//   ];

//   // Обработчик формы
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Создаем объект задачи
//     const newTask = {
//       title: title.trim() || "Новая задача",
//       // topic: category || "Web Design",
//       topic: category,
//       status: "Без статуса",
//       // description: description || "",
//       // date: new Date().toISOString(),
//       description: description.trim(),
//       date,
//     };

//     try {
//       await createNewTask(newTask); // вызов из useContext
//       // очистка формы
//       setTitle("");
//       setDescription("");
//       setCategory("Web Design");
//       setDate(new Date().toISOString());
//       onClose(); // Закрываем модалку
//     } catch (error) {
//       console.error("Ошибка создания задачи:", error);
//     }
//   };

//   return (
//     <SPopNewCard>
//       <SPopNewCardContainer>
//         <SPopNewCardBlock>
//           <SPopNewCardContent>
//             <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
//             <SPopNewCardClose onClick={onClose}>✖</SPopNewCardClose>

//             <SPopNewCardWrap>
//               <SPopNewCardForm id="newTaskForm" onSubmit={handleSubmit}>
//                 <SFormNewBlock>
//                   <SSubttl htmlFor="formTitle">Название задачи</SSubttl>
//                   <SFormNewInput
//                     type="text"
//                     id="formTitle"
//                     name="name"
//                     placeholder="Введите название задачи..."
//                     autoFocus
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                 </SFormNewBlock>

//                 <SFormNewBlock>
//                   <SSubttl htmlFor="textArea">Описание задачи</SSubttl>
//                   <SFormNewArea
//                     id="textArea"
//                     name="text"
//                     placeholder="Введите описание задачи..."
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                   />
//                 </SFormNewBlock>
//               </SPopNewCardForm>
//               <Calendar
//                 editable={true}
//                 selectedDate={date}
//                 onDateChange={(newDate) => setDate(newDate)}
//               />
//             </SPopNewCardWrap>

//             <SPopNewCardCategories>
//               <SCategoriesPSubttl>Категория</SCategoriesPSubttl>
//               <SCategoriesThemes>
//                 {categories.map((cat) => (
//                   <div
//                     key={cat.name}
//                     className={`categories__theme ${
//                       cat.name === category ? "_active-category" : ""
//                     } ${cat.color}`}
//                     onClick={() => setCategory(cat.name)}
//                   >
//                     <p className={cat.color}>{cat.name}</p>
//                   </div>
//                 ))}
//               </SCategoriesThemes>
//             </SPopNewCardCategories>

//             <SFormNewCreate form="newTaskForm" type="submit">
//               Создать задачу
//             </SFormNewCreate>
//           </SPopNewCardContent>
//         </SPopNewCardBlock>
//       </SPopNewCardContainer>
//     </SPopNewCard>
//   );
// };

// export default PopNewCard;
