import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { TasksContext } from "../../../context/TasksContext";
import {
  PopBrowseWrapper,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  CategoriesTheme,
  PopBrowseStatus,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  PopBrowseWrap,
  PopBrowseForm,
  FormBlock,
  FormArea,
  ThemeDown,
  ThemeCategory,
  PopBrowseButtons,
  Button,
} from "./PopBrowse.styled";


// 🟡 1. Массив доступных цветов
const colorsArray = [
  { background: "#FFE4C2", color: "#FF6D00" }, // оранжевый
  { background: "#B4FDD1", color: "#06B16E" }, // зелёный
  { background: "#E9D4FF", color: "#9A48F1" }, // фиолетовый
  { background: "#94A6BE", color: "#FFFFFF" }, // серый
  { background: "#FFD6E8", color: "#E91E63" }, // розовый
  { background: "#D1E8FF", color: "#0066CC" }, // голубой
];


// 🟢 2. Функция, которая выбирает цвет по названию темы
function getColorForTheme(theme) {
  if (!theme) return colorsArray[0]; // fallback
  const hash = theme
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colorsArray[hash % colorsArray.length];
}


const PopBrowse = ({ onClose }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, deleteTaskById } = useContext(TasksContext);

  const task = tasks.find((item) => item._id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [editableTask, setEditableTask] = useState(task || { name: "", text: "" });

  useEffect(() => {
    if (task) setEditableTask({ ...task });
  }, [task]);

  if (!task)
    return (
      <PopBrowseWrapper>
        <PopBrowseContainer>
          <PopBrowseBlock>
            <p>Задача с id {id} не найдена</p>
          </PopBrowseBlock>
        </PopBrowseContainer>
      </PopBrowseWrapper>
    );

  // 🟣 Определяем цвет для темы
  const color = getColorForTheme(task.theme);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableTask((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = async () => {
    try {
      await updateTask(id, editableTask);
      setIsEditing(false);
      onClose?.();
      navigate("/tasks");
    } catch (error) {
      console.error("Ошибка при сохранении:", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTaskById(id);
      onClose?.();
      navigate("/tasks");
    } catch (error) {
      console.error("Ошибка удаления:", error.message);
    }
  };

  return (
    <PopBrowseWrapper>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>

            {/* Заголовок + тема */}
            <PopBrowseTopBlock>
              <PopBrowseTitle>Название задачи</PopBrowseTitle>
              <CategoriesTheme color={color}>{task.theme}Research</CategoriesTheme>
            </PopBrowseTopBlock>

            {/* Статус */}
            <PopBrowseStatus>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                <StatusTheme color={color}>
                  <p>{task.status}</p>
                </StatusTheme>
              </StatusThemes>
            </PopBrowseStatus>

            {/* Описание + календарь */}
            <PopBrowseWrap>
              <PopBrowseForm>
                <FormBlock>
                  <label htmlFor="textArea01">Описание задачи</label>
                  <FormArea
                    name="text"
                    id="textArea01"
                    value={editableTask.text || ""}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                  />
                </FormBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>

            {/* Категория */}
            <ThemeDown>
              <p className="categories__p subttl">Категория</p>
              <ThemeCategory color={color}>
                <p>{task.theme}</p>
              </ThemeCategory>
            </ThemeDown>

            {/* Кнопки */}
            {!isEditing ? (
              <PopBrowseButtons>
                <Button onClick={() => setIsEditing(true)}>Редактировать задачу</Button>
                <Button onClick={handleDelete}>Удалить задачу</Button>
                <Button className="_btn-bg" onClick={() => onClose?.()}>Закрыть</Button>
              </PopBrowseButtons>
            ) : (
              <PopBrowseButtons>
                <Button onClick={saveChanges}>Сохранить</Button>
                <Button onClick={() => setIsEditing(false)}>Отменить</Button>
                <Button onClick={handleDelete}>Удалить задачу</Button>
                <Button onClick={onClose}>Закрыть</Button>
              </PopBrowseButtons>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
};

export default PopBrowse;


// import { useState, useContext, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { themeColors } from "../../../utils/themeColors";
// import { TasksContext } from "../../../context/TasksContext";
// import {
//   PopBrowseWrapper,
//   PopBrowseContainer,
//   PopBrowseBlock,
//   PopBrowseContent,
//   PopBrowseTopBlock,
//   PopBrowseTitle,
//   CategoriesTheme,
//   PopBrowseStatus,
//   StatusTitle,
//   StatusThemes,
//   StatusTheme,
//   PopBrowseWrap,
//   PopBrowseForm,
//   FormBlock,
//   FormArea,
//   ThemeDown,
//   ThemeCategory,
//   PopBrowseButtons,
//   Button,
// } from "./PopBrowse.styled";

// const PopBrowse = ({ onClose }) => {
//   const { id } = useParams();
//   const navigate = useNavigate(); //используем для переходов
//   const { tasks, updateTask, deleteTaskById } = useContext(TasksContext);

//   const task = tasks.find((item) => item._id === id);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editableTask, setEditableTask] = useState(task || { name: "", text: "" });

//   useEffect(() => {
//     if (task) setEditableTask({ ...task });
//   }, [task]);

//   if (!task)
//     return (
//       <PopBrowseWrapper>
//         <PopBrowseContainer>
//           <PopBrowseBlock>
//             <p>Задача с id {id} не найдена</p>
//           </PopBrowseBlock>
//         </PopBrowseContainer>
//       </PopBrowseWrapper>
//     );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableTask((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveChanges = async () => {
//     try {
//       await updateTask(id, editableTask);
//       setIsEditing(false);
//       onClose?.();
//       navigate("/tasks"); // ✅ переход после сохранения
//     } catch (error) {
//       console.error("Ошибка при сохранении:", error.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteTaskById(id);
//       onClose?.(); // закрываем модалку
//       navigate("/tasks"); // ✅ переход после удаления
//     } catch (error) {
//       console.error("Ошибка удаления:", error.message);
//     }
//   };

//   return (
//     <PopBrowseWrapper>
//       <PopBrowseContainer>
//         <PopBrowseBlock>
//           <PopBrowseContent>
//             {/* Заголовок + тема */}
//             <PopBrowseTopBlock>
//               <PopBrowseTitle>Название задачи</PopBrowseTitle>
//               {/* <CategoriesTheme ${themeColors} ></CategoriesTheme> */}
//               <CategoriesTheme color={task.color}>{task.theme}</CategoriesTheme>
//               {/* <div className={`categories__theme theme-top _${task.color} _active-category`}>
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </div> */}
//             </PopBrowseTopBlock>

//             {/* Статус */}
//             <PopBrowseStatus>
//               <StatusTitle>Статус</StatusTitle>
//               {/* <StatusThemes>
//                 <StatusTheme className={`_${task.color}`}>
//                   <p className={`_${task.color}`}>{task.status}</p>
//                 </StatusTheme>
//               </StatusThemes> */}

//               <StatusThemes>
//                 <StatusTheme color={task.color}>
//                   <p>{task.status}</p>
//                 </StatusTheme>
//               </StatusThemes>



//             </PopBrowseStatus>

//             {/* Описание + календарь */}
//             <PopBrowseWrap>
//               <PopBrowseForm>
//                 <FormBlock>
//                   <label htmlFor="textArea01">
//                     Описание задачи
//                   </label>
//                   <FormArea
//                     name="text"
//                     id="textArea01"
//                     value={editableTask.text || ""}
//                     onChange={handleChange}
//                     readOnly={!isEditing}
//                     placeholder="Введите описание задачи..."
//                   />
//                 </FormBlock>
//               </PopBrowseForm>
//               <Calendar />
//             </PopBrowseWrap>

//             {/* Категория */}
//             <ThemeDown>
//               <p className="categories__p subttl">Категория</p>
//               <ThemeCategory>
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </ThemeCategory>
//             </ThemeDown>

//             {/* Кнопки */}
//             {!isEditing ? (
//               <PopBrowseButtons>
//                 <Button onClick={() => setIsEditing(true)}>Редактировать задачу</Button>
//                 <Button onClick={handleDelete}>Удалить задачу</Button>
//                 <Button className="_btn-bg" onClick={() => onClose?.()}>Закрыть</Button>
//               </PopBrowseButtons>
//             ) : (
//               <PopBrowseButtons>
//                 <Button onClick={saveChanges}>Сохранить</Button>
//                 <Button onClick={() => setIsEditing(false)}>Отменить</Button>
//                 <Button onClick={handleDelete}>Удалить задачу</Button>
//                 <Button onClick={onClose} >Закрыть</Button>
//               </PopBrowseButtons>
//             )}
//           </PopBrowseContent>
//         </PopBrowseBlock>
//       </PopBrowseContainer>
//     </PopBrowseWrapper>
//   );
// };

// export default PopBrowse;


// import { useState, useContext, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { TasksContext } from "../../../context/TasksContext";
// import {
//   PopBrowseWrapper,
//   PopBrowseContainer,
//   PopBrowseBlock,
//   PopBrowseContent,
//   PopBrowseTopBlock,
//   PopBrowseTitle,
//   PopBrowseStatus,
//   StatusTitle,
//   StatusThemes,
//   StatusTheme,
//   PopBrowseWrap,
//   PopBrowseForm,
//   FormBlock,
//   FormArea,
//   ThemeDown,
//   ThemeCategory,
//   PopBrowseButtons,
// } from "./PopBrowse.styled";

// const PopBrowse = ({ onClose }) => {
//   const { id } = useParams();
//   const { tasks, updateTask, deleteTaskById } = useContext(TasksContext);
//   const navigate = useNavigate();

//   const task = tasks.find((item) => item._id === id);

//   // const [isEditing] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editableTask, setEditableTask] = useState(task || { name: "", text: "" });
  

//   useEffect(() => {
//     if (task) setEditableTask({ ...task });
//   }, [task]);

//   if (!task) return <p>Задача с id {id} не найдена</p>;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableTask((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveChanges = async () => {
//     try {
//       await updateTask(id, editableTask);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Ошибка при сохранении:", error.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteTaskById(id);
//       onClose(); // закрываем модалку после удаления
//     } catch (error) {
//       console.error("Ошибка удаления:", error.message);
//     }
//   };

// //  if (!task) {

//   return (
//     <PopBrowseWrapper>
//       <PopBrowseContainer>
//         <PopBrowseBlock>
//           <PopBrowseContent>
//             {/* Заголовок + тема */}
//             <PopBrowseTopBlock>
//               {/* <PopBrowseTitle>{task.title}</PopBrowseTitle> */}
//               <PopBrowseTitle>{editableTask.name}</PopBrowseTitle>
//               <div
//                 className={`categories__theme theme-top _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </div>
//             </PopBrowseTopBlock>

//             {/* Статус */}
//             <PopBrowseStatus>
//               <StatusTitle className="subttl">Статус</StatusTitle>
//               <StatusThemes>
//                 <StatusTheme className={`_${task.color}`}>
//                   <p className={`_${task.color}`}>{task.status}</p>
//                 </StatusTheme>
//               </StatusThemes>
//             </PopBrowseStatus>

//             {/* Описание + календарь */}
//             <PopBrowseWrap>
//               <PopBrowseForm>
//                 <FormBlock>
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <FormArea
//                     name="text"
//                     id="textArea01"
//                     value={editableTask.text}
//                     onChange={handleChange}
//                     readOnly={!isEditing}
//                     // readOnly
//                     // defaultValue={task.description}
//                     placeholder="Введите описание задачи..."
//                   />
//                 </FormBlock>
//               </PopBrowseForm>

//               <Calendar />
//             </PopBrowseWrap>

//             {/* Категория */}
//             <ThemeDown className="theme-down__categories">
//               <p className="categories__p subttl">Категория</p>
//               <ThemeCategory>
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </ThemeCategory>
//             </ThemeDown>

//             {/* Кнопки */}
//             {!isEditing ? (
//               <PopBrowseButtons>
//                 <button onClick={() => setIsEditing(true)}>Редактировать задачу</button>
//                 <button onClick={handleDelete}>Удалить задачу</button>
//                 {/* <button onClick={onClose}>Закрыть</button> */}
//                 <button onClick={() => onClose && onClose()}>Закрыть</button>

//               </PopBrowseButtons>
//             ) : (
//               <PopBrowseButtons>
//                 <button onClick={saveChanges}>Сохранить</button>
//                 <button onClick={() => setIsEditing(false)}>Отменить</button>
//                 <button onClick={handleDelete}>Удалить задачу</button>
//                 <button onClick={onClose}>Закрыть</button>
//               </PopBrowseButtons>
//             // <PopBrowseButtons>
//             //   <BtnGroup>
//             //     <Button className="btn-browse__edit _btn-bor _hover03">
//             //       <a href="#">Редактировать задачу</a>
//             //     </Button>
//             //     <Button className="btn-browse__delete _btn-bor _hover03">
//             //       <a href="#">Удалить задачу</a>
//             //     </Button>
//             //   </BtnGroup>
//             //   <Button className="_btn-bg _hover01">
//             //     <a href="#">Закрыть</a>
//             //   </Button>
//             // </PopBrowseButtons>
//             )}
//           </PopBrowseContent>
//         </PopBrowseBlock>
//       </PopBrowseContainer>
//     </PopBrowseWrapper>
//   );
// };

// export default PopBrowse;



// // import { useState, useContext, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { useState } from "react";
// // import { TasksContext } from "../../../context/TasksContext";
// import {
//   SPopBrowse,
//   SPopBrowseContainer,
//   SPopBrowseBlock,
//   SPopBrowseContent,
//   SPopBrowseTopBlock,
//   SPopBrowseTtl,
//   SCategoriesTheme,
//   SPopBrowseStatus,
//   SStatusPSubttl,
//   SPopBrowseWrap,
//   SPopBrowseForm,
//   SFormBrowseBlock,
//   SThemeDownCategories,
//   SCategoriesPSubttl,
//   SPopBrowseBtnBrowse,
// } from "./PopBrowse.styled";

// const PopBrowse = ({ onClose }) => {
//   // const { id } = useParams();
//   // const { tasks, updateTask, deleteTaskById } = useContext(TasksContext);
//   // const navigate = useNavigate();

//   // const task = tasks.find((item) => item._id === id);

//   const [isEditing] = useState(false);
//   // const [editableTask, setEditableTask] = useState(task || { name: "", text: "" });

//   // useEffect(() => {
//   //   if (task) setEditableTask({ ...task });
//   // }, [task]);

//   // if (!task) return <p>Задача с id {id} не найдена</p>;

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setEditableTask((prev) => ({ ...prev, [name]: value }));
//   // };

//   // const saveChanges = async () => {
//   //   try {
//   //     await updateTask(id, editableTask);
//   //     setIsEditing(false);
//   //   } catch (error) {
//   //     console.error("Ошибка при сохранении:", error.message);
//   //   }
//   // };

//   // const handleDelete = async () => {
//   //   try {
//   //     await deleteTaskById(id);
//   //     onClose(); // закрываем модалку после удаления
//   //   } catch (error) {
//   //     console.error("Ошибка удаления:", error.message);
//   //   }
//   // };

//   return (
//     <SPopBrowse>
//       <SPopBrowseContainer>
//         <SPopBrowseBlock>
//           <SPopBrowseContent>
//             {/* Заголовок */}
//             <SPopBrowseTopBlock>
//               <SPopBrowseTtl>Название задачи</SPopBrowseTtl>
//               {/* <SPopBrowseTtl>{editableTask.name}</SPopBrowseTtl> */}
//               <SCategoriesTheme>
//                 <p className="_orange">Web Design</p>
//               </SCategoriesTheme>
//             </SPopBrowseTopBlock>

//             {/* Статус */}
//             <SPopBrowseStatus>
//               <SStatusPSubttl>Статус</SStatusPSubttl>
//               <div className="status__themes">
//                 <div className="status__theme _gray">
//                   <p>Нужно сделать</p>
//                 </div>
//               </div>
//             </SPopBrowseStatus>

//             {/* Описание и календарь */}
//             <SPopBrowseWrap>
//               <SPopBrowseForm>
//                 <SFormBrowseBlock>
//                   <label htmlFor="textArea01">Описание задачи</label>
//                   <textarea
//                     // id="textArea01"
//                     // name="text"
//                     // value={editableTask.text}
//                     // onChange={handleChange}
//                     // readOnly={!isEditing}
//                     placeholder="Введите описание задачи..."
//                   />
//                 </SFormBrowseBlock>
//               </SPopBrowseForm>
//               <Calendar />
//             </SPopBrowseWrap>

//             {/* Категория */}
//             <SThemeDownCategories>
//               <SCategoriesPSubttl>Категория</SCategoriesPSubttl>
//               <div className="categories__theme _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </SThemeDownCategories>

//             {/* Кнопки */}
//             {!isEditing ? (
//               <SPopBrowseBtnBrowse>
//                 {/* <button onClick={() => setIsEditing(true)}>Редактировать задачу</button> */}
//                 {/* <button onClick={handleDelete}>Удалить задачу</button> */}
//                 <button onClick={onClose}>Закрыть</button>
//               </SPopBrowseBtnBrowse>
//             ) : (
//               <SPopBrowseBtnBrowse>
//                 {/* <button onClick={saveChanges}>Сохранить</button> */}
//                 {/* <button onClick={() => setIsEditing(false)}>Отменить</button> */}
//                 {/* <button onClick={handleDelete}>Удалить задачу</button> */}
//                 <button onClick={onClose}>Закрыть</button>
//               </SPopBrowseBtnBrowse>
//             )}
//           </SPopBrowseContent>
//         </SPopBrowseBlock>
//       </SPopBrowseContainer>
//     </SPopBrowse>
//   );
// };

// export default PopBrowse;



// import { Link, useParams } from "react-router-dom";
// import { useMemo } from "react";

// import Calendar from "../../Calendar/Calendar";
// import Button from "../../Button/Button";
// // import Card from "../../Card/Card";
// import { cardList } from "../../../data.js";

// import {
//   SPopBrowse,
//   // SLoadingText,
//   // SMain,
//   // SContainer,
//   // SMainBlock,
//   // SMainContent,
// } from "./PopBrowse.styled";

// const PopBrowse = () => {
//   const { id } = useParams ();
//   const word = useMemo(
//     () => cardList.find((w) => w.id === id) || { name: "", translation: "" },
//     [id]
//   );

//   return (
//     <SPopBrowse>
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">

//             <div className="pop-browse__top-block">
//               <h3 className="pop-browse__ttl">Название задачи</h3>
//               <div className="categories__theme theme-top _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </div>

//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className="status__theme _hide">
//                   <p>Без статуса</p>
//                 </div>
//                 <div className="status__theme _gray">
//                   <p className="_gray">Нужно сделать</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>В работе</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Тестирование</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Готово</p>
//                 </div>
//               </div>
//             </div>

//             <div className="pop-browse__wrap">
//               <form
//                 className="pop-browse__form form-browse"
//                 id="formBrowseCard"
//                 action="#"
//               >
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly=""
//                     placeholder="Введите описание задачи..."
//                     defaultValue={""}
//                   />
//                 </div>
//               </form>
//               <Calendar />
//             </div>
//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__theme _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </div>
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//             <div className="pop-browse__btn-edit _hide">
//               <div className="btn-group">
//                 <button className="btn-edit__edit _btn-bg _hover01">
//                   <a href="#">Сохранить</a>
//                 </button>

//                 <Button className="btn-edit__edit _btn-bor _hover03" text="Отменить" />
              
//                 <Button className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete" text="Удалить задачу" />
               
//               </div>
//               <Link to="/">
//                   <Button className="btn-edit__close _btn-bg _hover01" type="secondary" text="Закрыть" />{" "}
//               </Link>


//             </div>
//           </div>
//         </div>
//       </div>
//     </SPopBrowse>
//     // </div>
//   );
// };

// export default PopBrowse;



























// import { useState, useContext, useEffect, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { TasksContext } from "../../../context/TasksContext";
// import {
//   SPopBrowse,
//   SPopBrowseContainer,
//   SPopBrowseBlock,
//   SPopBrowseContent,
//   SPopBrowseTopBlock,
//   SPopBrowseTtl,
//   SCategoriesTheme,
//   SPopBrowseStatus,
//   SStatusPSubttl,
//   SPopBrowseWrap,
//   SPopBrowseForm,
//   SFormBrowseBlock,
//   SThemeDownCategories,
//   SCategoriesPSubttl,
//   SPopBrowseBtnBrowse,
//   // SMainContent,
// } from "./PopBrowse.styled";

// const PopBrowse = () => {
//   const { id } = useParams();
//   const { tasks, updateTask, deleteTaskById } = useContext(TasksContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editableTask, setEditableTask] = useState(null);

//   const task = useMemo(() => tasks.find((item) => item._id === id), [id, tasks]);

//   useEffect(() => {
//     if (task) setEditableTask({ ...task });
//   }, [task]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableTask((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveChanges = async () => {
//     if (!editableTask) return;
//     try {
//       await updateTask(id, editableTask);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Ошибка при сохранении:", error.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteTaskById(id);
//     } catch (error) {
//       console.error("Ошибка удаления:", error.message);
//     }
//   };

//   if (!task) {
//     return <p>Задача с id {id} не найдена</p>;
//   }

//   return (
//     <SPopBrowse>
//       <SPopBrowseContainer>
//         <SPopBrowseBlock>
//           <SPopBrowseContent>
//             <SPopBrowseTopBlock>
//               <SPopBrowseTtl>Название задачи</SPopBrowseTtl>
//               <SCategoriesTheme>
//               {/* <div className="categories__theme theme-top _orange _active-category"> */}
//                 <p className="_orange">Web Design</p>
//               </SCategoriesTheme> 
//             </SPopBrowseTopBlock>
//             <SPopBrowseStatus>
//               <SStatusPSubttl>Статус</SStatusPSubttl>
//               <div className="status__themes">
//                 <div className="status__theme _hide">
//                   <p>Без статуса</p>
//                 </div>
//                 <div className="status__theme _gray">
//                   <p className="_gray">Нужно сделать</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>В работе</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Тестирование</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Готово</p>
//                 </div>
//               </div>
//             </SPopBrowseStatus>
//             <SPopBrowseWrap>
//               <SPopBrowseForm> 
//                 <SFormBrowseBlock>
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly=""
//                     placeholder="Введите описание задачи..."
//                     defaultValue={""}
//                   />
//                 </SFormBrowseBlock>
//               </SPopBrowseForm>
//               <Calendar /> 
//             </SPopBrowseWrap>
//             <SThemeDownCategories>
//               <SCategoriesPSubttl>Категория</SCategoriesPSubttl>
//               <div className="categories__theme _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </SThemeDownCategories>
//             <SPopBrowseBtnBrowse>
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </SPopBrowseBtnBrowse>
//             <div className="pop-browse__btn-edit _hide">
//               <div className="btn-group">
//                 <button className="btn-edit__edit _btn-bg _hover01">
//                   <a href="#">Сохранить</a>
//                 </button>

//                 <Button className="btn-edit__edit _btn-bor _hover03" text="Отменить" />
              
//                 <Button className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete" text="Удалить задачу" />
               
//               </div>
//               <Link to="/">
//                   <Button className="btn-edit__close _btn-bg _hover01" type="secondary" text="Закрыть" />{" "}
//               </Link>
//             </div>

//           </SPopBrowseContent>
//         </SPopBrowseBlock>
//       </SPopBrowseContainer>
//     </SPopBrowse>
//   );
// };

// export default PopBrowse;   
  
              
           
           
      
              // <SPopBrowseTtl>{editableTask?.title}</SPopBrowseTtl> 
            {/* <h3>{editableTask?.title}</h3>
            <p>Тема: {editableTask?.topic}</p>
            <p>Статус: {editableTask?.status}</p>
            <textarea
              name="description"
              value={editableTask?.description || ""}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            <Calendar />
            {isEditing ? (
              <button onClick={saveChanges}>Сохранить</button>
            ) : (
              <button onClick={() => setIsEditing(true)}>Редактировать</button>
            )}
            <button onClick={handleDelete}>Удалить</button>
            <button onClick={() => setIsEditing(false)}>Закрыть</button> */}
//             </SPopBrowseTopBlock>
//           </SPopBrowseContent>
//         </SPopBrowseBlock>
//       </SPopBrowseContainer>
//     </SPopBrowse>
//   );
// };

// export default PopBrowse;





















// import { useMemo } from "react";
// import { useParams } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { cardList } from "../../../data";

// const PopBrowse = () => {
//   const { id } = useParams();

//   const task = useMemo(
//     () => cardList.find((item) => item.id === Number(id)),
//     [id]
//   );

//   if (!task) {
//     return <p>Задача с id {id} не найдена</p>;
//   }

  // return (
  //   // <Card word={word} open={true} />
  //   <div className="pop-browse" id="popBrowse">
  //     <div className="pop-browse__container">
  //       <div className="pop-browse__block">
  //         <div className="pop-browse__content">
  //           {/* Заголовок + тема */}
  //           <div className="pop-browse__top-block">
  //             <h3 className="pop-browse__ttl">{task.title}</h3>
  //             <div
  //               className={`categories__theme theme-top _${task.color} _active-category`}
  //             >
  //               <p className={`_${task.color}`}>{task.theme}</p>
  //             </div>
  //           </div>

//             {/* Статус */}
//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className={`status__theme _${task.color}`}>
//                   <p className={`_${task.color}`}>{task.status}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Описание + календарь */}
//             <div className="pop-browse__wrap">
//               <form className="pop-browse__form form-browse" id="formBrowseCard">
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly
//                     defaultValue={task.description}
//                   />
//                 </div>
//               </form>

//               <Calendar />
//             </div>

//             {/* Категория (дублируем theme) */}
//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               <div
//                 className={`categories__theme _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </div>
//             </div>

//             {/* Кнопки */}
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopBrowse;





// import { useState, useContext, useEffect, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { TasksContext } from "../../../context/TasksContext";
// // // import {
// // //   SPopBrowse,
// // //   // SLoadingText,
// // //   // SMain,
// // //   // SContainer,
// // //   // SMainBlock,
// // //   // SMainContent,
// // // } from "./PopBrowse.styled";

// const PopBrowse = () => {
//   const { id } = useParams();
//   const { tasks, updateTask, deleteTaskById } = useContext(TasksContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editableTask, setEditableTask] = useState(null);

//   const task = useMemo(() => tasks.find((item) => item._id === id), [id, tasks]);

//   useEffect(() => {
//     if (task) setEditableTask({ ...task });
//   }, [task]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableTask((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveChanges = async () => {
//     if (!editableTask) return;
//     try {
//       await updateTask(id, editableTask);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Ошибка при сохранении:", error.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteTaskById(id);
//     } catch (error) {
//       console.error("Ошибка удаления:", error.message);
//     }
//   };

//   if (!task) {
//     return <p>Задача с id {id} не найдена</p>;
//   }

//   return (
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             <h3>{editableTask?.title}</h3>
//             <p>Тема: {editableTask?.topic}</p>
//             <p>Статус: {editableTask?.status}</p>
//             <textarea
//               name="description"
//               value={editableTask?.description || ""}
//               onChange={handleChange}
//               readOnly={!isEditing}
//             />
//             <Calendar />
//             {isEditing ? (
//               <button onClick={saveChanges}>Сохранить</button>
//             ) : (
//               <button onClick={() => setIsEditing(true)}>Редактировать</button>
//             )}
//             <button onClick={handleDelete}>Удалить</button>
//             <button onClick={() => setIsEditing(false)}>Закрыть</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopBrowse;


// import { useMemo, useState, useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { TasksContext } from "../../../context/TasksContext";
// // import { AuthContext } from "../../../context/AuthContext";
// import { editTask, deleteTask } from "../../../services/api";

// const PopBrowse = () => {
//   const { id } = useParams();
//   const { tasks, setTasks } = useContext(TasksContext);
//   // const { user } = useContext(AuthContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editableTask, setEditableTask] = useState(null);

//   const task = useMemo(
//     () => tasks.find((item) => item._id === id),
//     [id, tasks]
//   );

//   useEffect(() => {
//     if (task) setEditableTask({ ...task });
//   }, [task]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableTask((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveChanges = async () => {
//     try {
//       const updatedTasks = await editTask(id, editableTask);
//       setTasks(updatedTasks);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Ошибка при сохранении:", error.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const updatedTasks = await deleteTask(id);
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error("Ошибка удаления:", error.message);
//     }
//   };

//   if (!task) {
//     return <p>Задача с id {id} не найдена</p>;
//   }

//   return (
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             <h3>{task.title}</h3>
//             <p>Тема: {task.topic}</p>
//             <p>Статус: {task.status}</p>
//             <textarea
//               name="description"
//               value={editableTask?.description || ""}
//               onChange={handleChange}
//               readOnly={!isEditing}
//             />
//             <Calendar />
//             {isEditing ? (
//               <button onClick={saveChanges}>Сохранить</button>
//             ) : (
//               <button onClick={() => setIsEditing(true)}>Редактировать</button>
//             )}
//             <button onClick={handleDelete}>Удалить</button>
//             <button>Закрыть</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopBrowse;



// import { useParams } from "react-router-dom"; // Link
// import { useContext, useEffect, useMemo, useState } from "react";
// import Calendar from "../../Calendar/Calendar";
// // import { cardList } from "../../../data";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import { fetchKanban, editTask, deleteTask } from "../../../services/api";
// import {
//   SPopBrowse,
//   // SLoadingText,
//   // SMain,
//   // SContainer,
//   // SMainBlock,
//   // SMainContent,
// } from "./PopBrowse.styled";

// const PopBrowse = () => {
//   const { id } = useParams();
//   const { tasks, setTasks } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editableTask, setEditableTask] = useState(null);
//   // const [editableTask, setEditableTask] = useState({
//   //   name: "",
//   //   translation: "",
//   // });

//   const task = useMemo(
//     () => tasks.find((item) => item.id === Number(id)),
//     [id, tasks]
//   );

//   useEffect(() => {
//     if (task) {
//       setEditableTask(task);
//       // setEditableTask({
//       //   name: task.name,
//       //   translation: task.translation,
//       // });
//     }
//   }, [task]);

//   const startEditing = () => {
//     setEditableTask({
//       name: task.name,
//       translation: task.translation,
//     });
//     // setIsEditing(false);
//     setIsEditing(true);
//   };

//   const handleInputChange = (e, field) => {
//     setEditableTask({
//       ...editableTask,
//       [field]: e.target.value,
//     });
//   };

//   const saveChanges = async () => {
//     try {
//       // const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

//       const updatedTasks = await editTask({
//         // token: userInfo.token,
//         token: user.token,
//         id: id,
//         // id,
//         task: editableTask,
//       });

//       setTasks(updatedTasks);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Ошибка при сохранении изменений:", error.message);
//     }
//   };

//   if (!task) {
//     return <p>Задача с id {id} не найдена</p>;
//   }

//   return (
//     // <Card word={word} open={true} />
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             {/* Заголовок + тема */}
//             <div className="pop-browse__top-block">
//               <h3 className="pop-browse__ttl">{task.title}</h3>
//               <div
//                 className={`categories__theme theme-top _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.topic}</p>
//               </div>
//             </div>

//             {/* Статус */}
//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className={`status__theme _${task.color}`}>
//                   <p className={`_${task.color}`}>{task.status}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Описание + календарь */}
//             <div className="pop-browse__wrap">
//               <form
//                 className="pop-browse__form form-browse"
//                 id="formBrowseCard"
//               >
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly
//                     defaultValue={task.description}
//                   />
//                 </div>
//               </form>

//               <Calendar />
//             </div>

//             {/* Категория (дублируем theme) */}
//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               <div
//                 className={`categories__theme _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.topic}</p>
//               </div>
//             </div>

//             {/* Кнопки */}
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopBrowse;

// import { useMemo, useState, useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import { editTask, deleteTask } from "../../../services/api";

// const PopBrowse = () => {
//   const { id } = useParams();
//   const { tasks, setTasks } = useContext(TasksContext);
//   // const { user } = useContext(AuthContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editableTask, setEditableTask] = useState(null);

//   const task = useMemo(
//     () => tasks.find((item) => item._id === id),
//     [id, tasks]
//   );

//   useEffect(() => {
//     if (task) setEditableTask({ ...task });
//   }, [task]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableTask((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveChanges = async () => {
//     try {
//       const updatedTasks = await editTask(id, editableTask);
//       setTasks(updatedTasks);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Ошибка при сохранении:", error.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const updatedTasks = await deleteTask(id);
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error("Ошибка удаления:", error.message);
//     }
//   };

//   if (!task) {
//     return <p>Задача с id {id} не найдена</p>;
//   }

//   return (
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             <h3>{task.title}</h3>
//             <p>Тема: {task.topic}</p>
//             <p>Статус: {task.status}</p>
//             <textarea
//               name="description"
//               value={editableTask?.description || ""}
//               onChange={handleChange}
//               readOnly={!isEditing}
//             />
//             <Calendar />
//             {isEditing ? (
//               <button onClick={saveChanges}>Сохранить</button>
//             ) : (
//               <button onClick={() => setIsEditing(true)}>Редактировать</button>
//             )}
//             <button onClick={handleDelete}>Удалить</button>
//             <button>Закрыть</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopBrowse;





















// КОД ДО КОНТЕКСТА
// import { useMemo } from "react";
// import { useParams } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { cardList } from "../../../data";

// const PopBrowse = () => {
//   const { id } = useParams();

//   const task = useMemo(
//     () => cardList.find((item) => item.id === Number(id)),
//     [id]
//   );

//   if (!task) {
//     return <p>Задача с id {id} не найдена</p>;
//   }

//   return (
//     // <Card word={word} open={true} />
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             {/* Заголовок + тема */}
//             <div className="pop-browse__top-block">
//               <h3 className="pop-browse__ttl">{task.title}</h3>
//               <div
//                 className={`categories__theme theme-top _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </div>
//             </div>

//             {/* Статус */}
//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className={`status__theme _${task.color}`}>
//                   <p className={`_${task.color}`}>{task.status}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Описание + календарь */}
//             <div className="pop-browse__wrap">
//               <form className="pop-browse__form form-browse" id="formBrowseCard">
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly
//                     defaultValue={task.description}
//                   />
//                 </div>
//               </form>

//               <Calendar />
//             </div>

//             {/* Категория (дублируем theme) */}
//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               <div
//                 className={`categories__theme _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </div>
//             </div>

//             {/* Кнопки */}
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopBrowse;


// import Calendar from "../../Calendar/Calendar";

// import { useMemo } from "react";
// import { Link, useParams } from "react-router-dom";
// import { cardList } from "../../../data";

// const PopBrowse = () => {
//   const { id } = useParams();

//   const task = useMemo(
//     () => cardList.find((item) => item.id === Number(id)),
//     [id]
//   );

//   // if (!task) {
//   //   return <p>Задача с id {id} не найдена</p>;
//   // }

//   // console.log("params id =", id);
//   // console.log("task =", task);

//   return (
//     // <div className="pop-browse" id="popBrowse">
//     // <div className="pop-browse" id="id">
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             <div className="pop-browse__top-block">
//               <h3 className="pop-browse__ttl">{task.title}</h3>
//               {/* <h3 className="pop-browse__ttl">Название задачи</h3> */}
//               {/* <div className="categories__theme theme-top _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div> */}
//               <div
//                 className={`categories__theme theme-top _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.theme}</p>
//               </div>
//             </div>
//             {/* Статус */}
//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className="status__theme _hide">
//                   {/* <p>Без статуса</p> */}
//                   <p>{task.status}</p>
//                 </div>
//                 <div className="status__theme _gray">
//                   {/* <p className="_gray">Нужно сделать</p> */}
//                   <p>{task.status}</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   {/* <p>В работе</p> */}
//                   <p>{task.status}</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   {/* <p>Тестирование</p> */}
//                   <p>{task.status}</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   {/* <p>Готово</p> */}
//                   <p>{task.status}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Описание + календарь */}
//             <div className="pop-browse__wrap">
//               <form
//                 className="pop-browse__form form-browse"
//                 id="formBrowseCard"
//                 // action="#"
//               >
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly
//                     value={task.description || ""}
//                     // defaultValue={task.description}
//                     // placeholder="Введите описание задачи..."
//                     // defaultValue=""
//                   />
//                   {/* <textarea
//                       className="form-browse__area"
//                       name="text"
//                       id="textArea01"
//                       readOnly=""
//                       placeholder="Введите описание задачи..."
//                       defaultValue={""}
//                     /> */}
//                 </div>
//               </form>
//               <Calendar />
//             </div>

//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               {/* <div className="categories__theme _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div> */}
//               <div
//                 className={`categories__theme _${task.color} _active-category`}
//               >
//                 <p className={`_${task.color}`}>{task.theme}</p>{" "}
//               </div>
//             </div>
//             {/* Кнопки */}
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 {/* <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button> */}
//                 <Link to="/">
//                   <button
//                     className="btn-browse__edit _btn-bor _hover03"
//                     text="Редактировать задачу"
//                   />{" "}
//                 </Link>
//                 {/* <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button> */}
//                 <Link to="/">
//                   <button
//                     className="btn-browse__delete _btn-bor _hover03"
//                     text="Удалить задачу"
//                   />{" "}
//                 </Link>
//               </div>
//               {/* <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button> */}
//               <Link to="/">
//                 <button
//                   className="btn-browse__close _btn-bg _hover01"
//                   text="Закрыть"
//                 />{" "}
//               </Link>
//             </div>
//             <div className="pop-browse__btn-edit _hide">
//               <div className="btn-group">
//                 {/* <button className="btn-edit__edit _btn-bg _hover01">
//                   <a href="#">Сохранить</a>
//                 </button> */}
//                 <Link to="/">
//                   <button
//                     className="btn-edit__edit _btn-bg _hover01"
//                     text="Сохранить"
//                   />{" "}
//                 </Link>
//                 {/* <button className="btn-edit__edit _btn-bor _hover03">
//                   <a href="#">Отменить</a>
//                 </button> */}
//                 <Link to="/">
//                   <button
//                     className="btn-edit__edit _btn-bor _hover03"
//                     // type="secondary"
//                     text="Отменить"
//                   />{" "}
//                 </Link>
//                 {/* <button
//                   className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete"
//                 >
//                   <a href="#">Удалить задачу</a>
//                 </button> */}
//                 <Link to="/">
//                   <button
//                     className="btn-edit__delete _btn-bor _hover03"
//                     id="btnDelete"
//                     // type="secondary"
//                     text="Удалить задачу"
//                   />{" "}
//                 </Link>
//               </div>
//               {/* <button className="btn-edit__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button> */}
//               <Link to="/">
//                 <button
//                   className="btn-edit__close _btn-bg _hover01"
//                   // type="secondary"
//                   text="Закрыть"
//                 />{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopBrowse;

// import { Link, useParams } from "react-router-dom";
// import { useMemo } from "react";

// import Calendar from "../../Calendar/Calendar";
// import Button from "../../Button/Button";
// // import Card from "../../Card/Card";
// import { cardList } from "../../../data.js";

// import {
//   SPopBrowse,
//   // SLoadingText,
//   // SMain,
//   // SContainer,
//   // SMainBlock,
//   // SMainContent,
// } from "./PopBrowse.styled";

// const PopBrowse = () => {
//   const { id } = useParams ();
//   const word = useMemo(
//     () => cardList.find((w) => w.id === id) || { name: "", translation: "" },
//     [id]
//   );

//   return (
//     <SPopBrowse>
//     {/* <div className="pop-browse" id="popBrowse"> */}
//       {/* <Card word={word} open={true} /> */}
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             <div className="pop-browse__top-block">
//               <h3 className="pop-browse__ttl">Название задачи</h3>
//               <div className="categories__theme theme-top _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </div>
//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className="status__theme _hide">
//                   <p>Без статуса</p>
//                 </div>
//                 <div className="status__theme _gray">
//                   <p className="_gray">Нужно сделать</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>В работе</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Тестирование</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Готово</p>
//                 </div>
//               </div>
//             </div>
//             <div className="pop-browse__wrap">
//               <form
//                 className="pop-browse__form form-browse"
//                 id="formBrowseCard"
//                 action="#"
//               >
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly=""
//                     placeholder="Введите описание задачи..."
//                     defaultValue={""}
//                   />
//                 </div>
//               </form>
//               <Calendar />
//             </div>
//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__theme _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </div>
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//             <div className="pop-browse__btn-edit _hide">
//               <div className="btn-group">
//                 <button className="btn-edit__edit _btn-bg _hover01">
//                   <a href="#">Сохранить</a>
//                 </button>

//                 <Button className="btn-edit__edit _btn-bor _hover03" text="Отменить" />
//                 {/* <button className="btn-edit__edit _btn-bor _hover03">
//                   <a href="#">Отменить</a>
//                 </button> */}
//                 <Button className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete" text="Удалить задачу" />
//                 {/* <button
//                   className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete"
//                 >
//                   <a href="#">Удалить задачу</a>
//                 </button> */}
//               </div>
//               <Link to="/">
//                   <Button className="btn-edit__close _btn-bg _hover01" type="secondary" text="Закрыть" />{" "}
//               </Link>

//               {/* <button className="btn-edit__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button> */}

//             </div>
//           </div>
//         </div>
//       </div>
//     </SPopBrowse>
//     // </div>
//   );
// };

// export default PopBrowse;



// ДО РОУТИНГА

// import Calendar from "../../Calendar/Calendar";

// const popBrowse = () => {
//   return (
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             <div className="pop-browse__top-block">
//               <h3 className="pop-browse__ttl">Название задачи</h3>
//               <div className="categories__theme theme-top _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </div>
//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className="status__theme _hide">
//                   <p>Без статуса</p>
//                 </div>
//                 <div className="status__theme _gray">
//                   <p className="_gray">Нужно сделать</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>В работе</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Тестирование</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Готово</p>
//                 </div>
//               </div>
//             </div>
//             <div className="pop-browse__wrap">
//               <form
//                 className="pop-browse__form form-browse"
//                 id="formBrowseCard"
//                 action="#"
//               >
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly=""
//                     placeholder="Введите описание задачи..."
//                     defaultValue={""}
//                   />
//                 </div>
//               </form>

//               <Calendar />

//               {/* <div className="pop-new-card__calendar calendar">
//                 <p className="calendar__ttl subttl">Даты</p>
//                 <div className="calendar__block">
//                   <div className="calendar__nav">
//                     <div className="calendar__month">Сентябрь 2023</div>
//                     <div className="nav__actions">
//                       <div className="nav__action" data-action="prev">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={6}
//                           height={11}
//                           viewBox="0 0 6 11"
//                         >
//                           <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
//                         </svg>
//                       </div>
//                       <div className="nav__action" data-action="next">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={6}
//                           height={11}
//                           viewBox="0 0 6 11"
//                         >
//                           <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="calendar__content">
//                     <div className="calendar__days-names">
//                       <div className="calendar__day-name">пн</div>
//                       <div className="calendar__day-name">вт</div>
//                       <div className="calendar__day-name">ср</div>
//                       <div className="calendar__day-name">чт</div>
//                       <div className="calendar__day-name">пт</div>
//                       <div className="calendar__day-name -weekend-">сб</div>
//                       <div className="calendar__day-name -weekend-">вс</div>
//                     </div>
//                     <div className="calendar__cells">
//                       <div className="calendar__cell _other-month">28</div>
//                       <div className="calendar__cell _other-month">29</div>
//                       <div className="calendar__cell _other-month">30</div>
//                       <div className="calendar__cell _cell-day">31</div>
//                       <div className="calendar__cell _cell-day">1</div>
//                       <div className="calendar__cell _cell-day _weekend">2</div>
//                       <div className="calendar__cell _cell-day _weekend">3</div>
//                       <div className="calendar__cell _cell-day">4</div>
//                       <div className="calendar__cell _cell-day">5</div>
//                       <div className="calendar__cell _cell-day ">6</div>
//                       <div className="calendar__cell _cell-day">7</div>
//                       <div className="calendar__cell _cell-day _current">8</div>
//                       <div className="calendar__cell _cell-day _weekend _active-day">
//                         9
//                       </div>
//                       <div className="calendar__cell _cell-day _weekend">
//                         10
//                       </div>
//                       <div className="calendar__cell _cell-day">11</div>
//                       <div className="calendar__cell _cell-day">12</div>
//                       <div className="calendar__cell _cell-day">13</div>
//                       <div className="calendar__cell _cell-day">14</div>
//                       <div className="calendar__cell _cell-day">15</div>
//                       <div className="calendar__cell _cell-day _weekend">
//                         16
//                       </div>
//                       <div className="calendar__cell _cell-day _weekend">
//                         17
//                       </div>
//                       <div className="calendar__cell _cell-day">18</div>
//                       <div className="calendar__cell _cell-day">19</div>
//                       <div className="calendar__cell _cell-day">20</div>
//                       <div className="calendar__cell _cell-day">21</div>
//                       <div className="calendar__cell _cell-day">22</div>
//                       <div className="calendar__cell _cell-day _weekend">
//                         23
//                       </div>
//                       <div className="calendar__cell _cell-day _weekend">
//                         24
//                       </div>
//                       <div className="calendar__cell _cell-day">25</div>
//                       <div className="calendar__cell _cell-day">26</div>
//                       <div className="calendar__cell _cell-day">27</div>
//                       <div className="calendar__cell _cell-day">28</div>
//                       <div className="calendar__cell _cell-day">29</div>
//                       <div className="calendar__cell _cell-day _weekend">
//                         30
//                       </div>
//                       <div className="calendar__cell _other-month _weekend">
//                         1
//                       </div>
//                     </div>
//                   </div>
//                   <input
//                     type="hidden"
//                     id="datepick_value"
//                     defaultValue="08.09.2023"
//                   />
//                   <div className="calendar__period">
//                     <p className="calendar__p date-end">
//                       Срок исполнения:{" "}
//                       <span className="date-control">09.09.23</span>
//                     </p>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__theme _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </div>
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-browse__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//             <div className="pop-browse__btn-edit _hide">
//               <div className="btn-group">
//                 <button className="btn-edit__edit _btn-bg _hover01">
//                   <a href="#">Сохранить</a>
//                 </button>
//                 <button className="btn-edit__edit _btn-bor _hover03">
//                   <a href="#">Отменить</a>
//                 </button>
//                 <button
//                   className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete"
//                 >
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-edit__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default popBrowse;
