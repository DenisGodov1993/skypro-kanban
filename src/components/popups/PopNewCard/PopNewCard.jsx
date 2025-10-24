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
  return (
    <SPopNewCard>
      <SPopNewCardContainer>
        <SPopNewCardBlock>
          <SPopNewCardContent>
            <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
            <SPopNewCardClose onClick={onClose} >✖</SPopNewCardClose>

            <SPopNewCardWrap>
              <SPopNewCardForm id="formNewCard" action="#">
                <SFormNewBlock>
                  <SSubttl htmlFor="formTitle">Название задачи</SSubttl>
                  <SFormNewInput
                    type="text"
                    id="formTitle"
                    name="name"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </SFormNewBlock>

                <SFormNewBlock>
                  <SSubttl htmlFor="textArea">Описание задачи</SSubttl>
                  <SFormNewArea
                    id="textArea"
                    name="text"
                    placeholder="Введите описание задачи..."
                  />
                </SFormNewBlock>
              </SPopNewCardForm>
              <Calendar />
            </SPopNewCardWrap>

            <SPopNewCardCategories>
              <SCategoriesPSubttl>Категория</SCategoriesPSubttl>
              <SCategoriesThemes>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </SCategoriesThemes>
            </SPopNewCardCategories>

            <SFormNewCreate type="submit">Создать задачу</SFormNewCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;


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

// const PopNewCard = () => {
//   return (
//     <SPopNewCard>
//       <SPopNewCardContainer>
//         <SPopNewCardBlock>
//           <SPopNewCardContent>
//             <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
//             <SPopNewCardClose>
//               <a href="#" className="pop-new-card__close">
//                 ✖
//               </a>
//             </SPopNewCardClose>
//             <SPopNewCardWrap>
//               <SPopNewCardForm>
//                 <SFormNewBlock>
//                   <SSubttl>Название задачи</SSubttl>

//                   <SFormNewInput>Введите название задачи...</SFormNewInput>
//                 </SFormNewBlock>
//                 <SFormNewBlock>
//                   <SSubttl>Описание задачи</SSubttl>

//                   <SFormNewArea>Введите описание задачи...</SFormNewArea>
//                 </SFormNewBlock>
//               </SPopNewCardForm>
//               <Calendar />
//             </SPopNewCardWrap>
//             <SPopNewCardCategories>
//               <SCategoriesPSubttl>Категория</SCategoriesPSubttl>
//               <SCategoriesThemes>
//                 <div className="categories__theme _orange _active-category">
//                   <p className="_orange">Web Design</p>
//                 </div>
//                 <div className="categories__theme _green">
//                   <p className="_green">Research</p>
//                 </div>
//                 <div className="categories__theme _purple">
//                   <p className="_purple">Copywriting</p>
//                 </div>
//               </SCategoriesThemes>
//             </SPopNewCardCategories>

//             <SFormNewCreate>Создать задачу</SFormNewCreate>
//           </SPopNewCardContent>
//         </SPopNewCardBlock>
//       </SPopNewCardContainer>
//     </SPopNewCard>
//   );
// };

// export default PopNewCard;

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
//   // SCardDate,
//   // SCardDate,
//   // SCardDate,
//   // SCardDate,
//   // SCardDate,
// } from "./PopNewCard.styled";

// const popNewCard = () => {
//   return (
//     <SPopNewCard>
//       <SPopNewCardContainer>
//         <SPopNewCardBlock>
//           <SPopNewCardContent>
//             <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
//             <SPopNewCardClose>
//             <a href="#" className="pop-new-card__close">
//               ✖
//             </a>
//             </SPopNewCardClose>
//             <SPopNewCardWrap>
//               {/* <form
//                 className="pop-new-card__form form-new"
//                 id="formNewCard"
//                 action="#"
//               > */}
//               <SPopNewCardForm>
//                 <SFormNewBlock>
//                   {/* <label htmlFor="formTitle" className="subttl">
//                     Название задачи
//                   </label> */}
//                   <SSubttl>Название задачи</SSubttl>
//                   {/* <input
//                     className="form-new__input"
//                     type="text"
//                     name="name"
//                     id="formTitle"
//                     placeholder="Введите название задачи..."
//                     autoFocus=""
//                   /> */}
//                   <SFormNewInput>Введите название задачи...</SFormNewInput>
//                 </SFormNewBlock>
//                 <SFormNewBlock>
//                   {/* <label htmlFor="textArea" className="subttl">
//                     Описание задачи
//                   </label> */}
//                   <SSubttl>Описание задачи</SSubttl>
//                   {/* <textarea
//                     className="form-new__area"
//                     name="text"
//                     id="textArea"
//                     placeholder="Введите описание задачи..."
//                     defaultValue={""}
//                   /> */}
//                   <SFormNewArea>Введите описание задачи...</SFormNewArea>
//                 </SFormNewBlock>
//               </SPopNewCardForm>
//               <Calendar />
//             </SPopNewCardWrap>
//             <SPopNewCardCategories>
//               <SCategoriesPSubttl>Категория</SCategoriesPSubttl>
//               <SCategoriesThemes>
//                 <div className="categories__theme _orange _active-category">
//                   <p className="_orange">Web Design</p>
//                 </div>
//                 <div className="categories__theme _green">
//                   <p className="_green">Research</p>
//                 </div>
//                 <div className="categories__theme _purple">
//                   <p className="_purple">Copywriting</p>
//                 </div>
//               </SCategoriesThemes>
//             </SPopNewCardCategories>
//             {/* <button className="form-new__create _hover01" id="btnCreate">
//               Создать задачу
//             </button> */}
//             <SFormNewCreate>Создать задачу</SFormNewCreate>
//           </SPopNewCardContent>
//         </SPopNewCardBlock>
//       </SPopNewCardContainer>
//     </SPopNewCard>
//   );
// };

// export default popNewCard;

// import Calendar from "../../Calendar/Calendar";

// const popNewCard = () => {
//   return (
//     <div className="pop-new-card" id="popNewCard">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <a href="#" className="pop-new-card__close">
//               ✖
//             </a>
//             <div className="pop-new-card__wrap">
//               <form
//                 className="pop-new-card__form form-new"
//                 id="formNewCard"
//                 action="#"
//               >
//                 <div className="form-new__block">
//                   <label htmlFor="formTitle" className="subttl">
//                     Название задачи
//                   </label>
//                   <input
//                     className="form-new__input"
//                     type="text"
//                     name="name"
//                     id="formTitle"
//                     placeholder="Введите название задачи..."
//                     autoFocus=""
//                   />
//                 </div>
//                 <div className="form-new__block">
//                   <label htmlFor="textArea" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-new__area"
//                     name="text"
//                     id="textArea"
//                     placeholder="Введите описание задачи..."
//                     defaultValue={""}
//                   />
//                 </div>
//               </form>
//               <Calendar />
//             </div>
//             <div className="pop-new-card__categories categories">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__themes">
//                 <div className="categories__theme _orange _active-category">
//                   <p className="_orange">Web Design</p>
//                 </div>
//                 <div className="categories__theme _green">
//                   <p className="_green">Research</p>
//                 </div>
//                 <div className="categories__theme _purple">
//                   <p className="_purple">Copywriting</p>
//                 </div>
//               </div>
//             </div>
//             <button className="form-new__create _hover01" id="btnCreate">
//               Создать задачу
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default popNewCard;

// import React, { useEffect, useCallback, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// // import { Colors } from "../../../Colors";
// // import { useTheme } from "../../../hooks/useTheme";
// import { TasksContext } from "../../../context/TasksContext";
// // import { showError, showLoading, updateToast } from "../../../utils/toast";
// import Calendar from "../../Calendar/Calendar";

// import {
//   Overlay,
//   Container,
//   Block,
//   Content,
//   Title,
//   CloseButton,
//   Wrap,
//   Form,
//   FormBlock,
//   Label,
//   Input,
//   TextArea,
//   ValidationError,
//   CreateButton,
// } from "./PopNewCard.styled";

// // import {
// //   CategoriesContainer as CategoriesSection,
// //   CategoriesParagraph as CategoriesLabel,
// //   CategoriesThemes,
// //   CategoriesTheme as CategoryTheme,
// // } from "../../Categories/Categories.styled";

// const PopNewCard = () => {
//   const navigate = useNavigate();
//   const { isDarkMode } = useTheme();
//   const { createNewTask } = useContext(TasksContext);

//   // Состояние формы
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     topic: "Research",
//     status: "Без статуса",
//     date: new Date().toISOString(),
//   });

//   const [loading, setLoading] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});

//   // Убираем прокрутку при открытии модалки
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   // Закрытие модалки
//   const handleClose = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   // Обработка нажатия Esc
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") handleClose();
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [handleClose]);

//   // Обработка изменения полей формы
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (validationErrors[name]) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         [name]: null,
//       }));
//     }
//   };

//   // Обработка выбора категории
//   const handleTopicSelect = (topic) => {
//     setFormData((prev) => ({
//       ...prev,
//       topic,
//     }));
//   };

//   // Валидация формы
//   const validateForm = () => {
//     const errors = {};
//     if (!formData.title.trim()) {
//       errors.title = "Название задачи обязательно";
//     }
//     if (!formData.description.trim()) {
//       errors.description = "Описание обязательно";
//     }
//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Отправка формы
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     let toastId = showLoading("Создание задачи...");
//     setLoading(true);

//     try {
//       const success = await createNewTask(formData);
//       if (success) {
//         updateToast(toastId, "success", "Задача успешно создана!");
//         setTimeout(() => navigate("/"), 800);
//       } else {
//         updateToast(toastId, "error", "Не удалось создать задачу");
//       }
//     } catch (err) {
//       updateToast(toastId, "error", `Ошибка: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Overlay id="popNewCard">
//       <Container onClick={handleClose}>
//         <Block onClick={(e) => e.stopPropagation()}>
//           <Content>
//             <Title>Создание задачи</Title>
//             <CloseButton onClick={handleClose}>&#10006;</CloseButton>

//             <Wrap>
//               <Form id="formNewCard" onSubmit={handleSubmit}>
//                 <FormBlock>
//                   <Label htmlFor="formTitle">Название задачи</Label>
//                   <Input
//                     name="title"
//                     id="formTitle"
//                     placeholder="Введите название..."
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     className={validationErrors.title ? "error" : ""}
//                   />
//                   {validationErrors.title && (
//                     <ValidationError>{validationErrors.title}</ValidationError>
//                   )}
//                 </FormBlock>

//                 <FormBlock>
//                   <Label htmlFor="formDescription">Описание задачи</Label>
//                   <TextArea
//                     name="description"
//                     id="formDescription"
//                     placeholder="Введите описание..."
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     className={validationErrors.description ? "error" : ""}
//                   />
//                   {validationErrors.description && (
//                     <ValidationError>
//                       {validationErrors.description}
//                     </ValidationError>
//                   )}
//                 </FormBlock>
//               </Form>

//               <Calendar
//                 selectedDate={formData.date}
//                 onDateSelect={(date) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     date: date.toISOString(),
//                   }))
//                 }
//                 isEditing={true}
//               />
//             </Wrap>

//             <CategoriesSection>
//               <CategoriesLabel>Категория</CategoriesLabel>
//               <CategoriesThemes>
//                 {["Web Design", "Research", "Copywriting"].map((topic) => {
//                   const colorKey =
//                     topic === "Web Design"
//                       ? "orange"
//                       : topic === "Research"
//                       ? "green"
//                       : "purple";
//                   return (
//                     <CategoryTheme
//                       key={topic}
//                       className={formData.topic === topic ? "active" : ""}
//                       style={{
//                         backgroundColor: isDarkMode
//                           ? Colors.dark[colorKey].background
//                           : Colors.light[colorKey].background,
//                         color: isDarkMode
//                           ? Colors.dark[colorKey].color
//                           : Colors.light[colorKey].color,
//                       }}
//                       onClick={() => handleTopicSelect(topic)}
//                     >
//                       <p>{topic}</p>
//                     </CategoryTheme>
//                   );
//                 })}
//               </CategoriesThemes>
//             </CategoriesSection>

//             <CreateButton
//               id="btnCreate"
//               type="submit"
//               form="formNewCard"
//               disabled={loading}
//             >
//               {loading ? "Создание..." : "Создать задачу"}
//             </CreateButton>
//           </Content>
//         </Block>
//       </Container>
//     </Overlay>
//   );
// };

// export default PopNewCard;

// import { useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";

// const PopNewCard = () => {
//   const navigate = useNavigate();
//   const { createNewTask } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClose = () => navigate("/"); // ✅ Закрывает модалку

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     await createNewTask(formData);
//     navigate("/"); // после создания — закрыть
//   };

//   return (
//     <div className="modal">
//       <div className="modal__content">
//         <h3>Создание задачи</h3>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Название"
//             value={formData.title}
//             onChange={handleChange}
//           />
//           <textarea
//             name="description"
//             placeholder="Описание"
//             value={formData.description}
//             onChange={handleChange}
//           />
//           <button type="submit">Создать</button>
//           <button type="button" onClick={handleClose}>
//             Отмена
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// import { useState, useContext } from "react";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import { postKanban } from "../../../services/api"; // напрямую через сервис
// import Calendar from "../../Calendar/Calendar";

// const PopNewCard = ({ onClose }) => {
//   const { createNewTask } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Обновление полей формы
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Отправка формы
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // Отправка задачи через API
//       await createNewTask(formData); // Контекст сам обновит список
//       onClose(); // Закрываем модалку
//     } catch (err) {
//       console.error("Ошибка при создании задачи:", err);
//       setError(err.message || "Не удалось создать задачу");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pop-new-card">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <button className="pop-new-card__close" onClick={onClose}>
//               ✖
//             </button>

//             <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
//               <div className="form-new__block">
//                 <label htmlFor="formTitle" className="subttl">
//                   Название задачи
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   id="formTitle"
//                   placeholder="Введите название задачи..."
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   autoFocus
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label htmlFor="textArea" className="subttl">
//                   Описание задачи
//                 </label>
//                 <textarea
//                   name="description"
//                   id="textArea"
//                   placeholder="Введите описание задачи..."
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Тема</label>
//                 <select name="topic" value={formData.topic} onChange={handleChange}>
//                   <option value="Web Design">Web Design</option>
//                   <option value="Research">Research</option>
//                   <option value="Copywriting">Copywriting</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Статус</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Без статуса</option>
//                   <option>Нужно сделать</option>
//                   <option>В работе</option>
//                   <option>Тестирование</option>
//                   <option>Готово</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Дата</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                 />
//               </div>

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <div style={{ marginTop: "15px" }}>
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Создаю..." : "Создать задачу"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   style={{ marginLeft: "10px" }}
//                 >
//                   Отмена
//                 </button>
//               </div>
//             </form>

//             <Calendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// import { useState, useContext } from "react";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import Calendar from "../../Calendar/Calendar";

// const PopNewCard = ({ onClose }) => {
//   const { createNewTask } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // Используем createNewTask из контекста, который вызывает postKanban
//       await createNewTask(formData);

//       // Закрываем модалку после успешного создания
//       onClose();
//     } catch (err) {
//       console.error("Ошибка при создании задачи:", err);
//       setError(err.message || "Не удалось создать задачу");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pop-new-card">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <button className="pop-new-card__close" onClick={onClose}>✖</button>

//             <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
//               <div className="form-new__block">
//                 <label htmlFor="formTitle" className="subttl">Название задачи</label>
//                 <input
//                   type="text"
//                   name="title"
//                   id="formTitle"
//                   placeholder="Введите название задачи..."
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   autoFocus
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label htmlFor="textArea" className="subttl">Описание задачи</label>
//                 <textarea
//                   name="description"
//                   id="textArea"
//                   placeholder="Введите описание задачи..."
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Тема</label>
//                 <select name="topic" value={formData.topic} onChange={handleChange}>
//                   <option value="Web Design">Web Design</option>
//                   <option value="Research">Research</option>
//                   <option value="Copywriting">Copywriting</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Статус</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Без статуса</option>
//                   <option>Нужно сделать</option>
//                   <option>В работе</option>
//                   <option>Тестирование</option>
//                   <option>Готово</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Дата</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                 />
//               </div>

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <div style={{ marginTop: "15px" }}>
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Создаю..." : "Создать задачу"}
//                 </button>
//                 <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
//                   Отмена
//                 </button>
//               </div>
//             </form>

//             <Calendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// import { useState, useContext } from "react";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// // import api from "../../../services/axiosConfig"; // твой axiosConfig.js
// import Calendar from "../../Calendar/Calendar";

// const PopNewCard = ({ onClose }) => {
//   const { createTask } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // Отправляем запрос вручную через api.post с токеном
//       const response = await api.post("/tasks", formData, {
//         headers: {
//           "Authorization": `Bearer ${user.token}`,
//           "Content-Type": "", // твое требование
//         },
//       });

//       // Добавляем задачу в контекст
//       createTask(response.data);
//       onClose();
//     } catch (err) {
//       console.error("Ошибка при создании задачи:", err);
//       setError(err.response?.data?.message || "Не удалось создать задачу");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pop-new-card">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <button className="pop-new-card__close" onClick={onClose}>✖</button>

//             <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
//               <div className="form-new__block">
//                 <label htmlFor="formTitle" className="subttl">Название задачи</label>
//                 <input
//                   type="text"
//                   name="title"
//                   id="formTitle"
//                   placeholder="Введите название задачи..."
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   autoFocus
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label htmlFor="textArea" className="subttl">Описание задачи</label>
//                 <textarea
//                   name="description"
//                   id="textArea"
//                   placeholder="Введите описание задачи..."
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Тема</label>
//                 <select name="topic" value={formData.topic} onChange={handleChange}>
//                   <option value="Web Design">Web Design</option>
//                   <option value="Research">Research</option>
//                   <option value="Copywriting">Copywriting</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Статус</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Без статуса</option>
//                   <option>Нужно сделать</option>
//                   <option>В работе</option>
//                   <option>Тестирование</option>
//                   <option>Готово</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Дата</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                 />
//               </div>

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <div style={{ marginTop: "15px" }}>
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Создаю..." : "Создать задачу"}
//                 </button>
//                 <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
//                   Отмена
//                 </button>
//               </div>
//             </form>

//             <Calendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// import { useState, useContext } from "react";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import api from "../../../services/axiosConfig";
// import Calendar from "../../Calendar/Calendar";

// const PopNewCard = ({ onClose }) => {
//   const { createTask } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // обновление полей формы
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // отправка формы
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // 🔹 Отправляем задачу на сервер через axiosConfig
//       const response = await api.post("/tasks", formData, {
//         headers: {
//           "Authorization": `Bearer ${user.token}`,
//           "Content-Type": "", // ⚙️ по твоему требованию
//         },
//       });

//       // 🔹 Добавляем задачу в локальный контекст
//       createTask(response.data);

//       // 🔹 Закрываем модалку
//       onClose();
//     } catch (err) {
//       console.error("Ошибка при создании задачи:", err);
//       setError(err.response?.data?.message || "Не удалось создать задачу");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pop-new-card">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <button className="pop-new-card__close" onClick={onClose}>✖</button>

//             <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
//               <div className="form-new__block">
//                 <label htmlFor="formTitle" className="subttl">Название задачи</label>
//                 <input
//                   type="text"
//                   name="title"
//                   id="formTitle"
//                   placeholder="Введите название задачи..."
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   autoFocus
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label htmlFor="textArea" className="subttl">Описание задачи</label>
//                 <textarea
//                   name="description"
//                   id="textArea"
//                   placeholder="Введите описание задачи..."
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Тема</label>
//                 <select name="topic" value={formData.topic} onChange={handleChange}>
//                   <option value="Web Design">Web Design</option>
//                   <option value="Research">Research</option>
//                   <option value="Copywriting">Copywriting</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Статус</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Без статуса</option>
//                   <option>Нужно сделать</option>
//                   <option>В работе</option>
//                   <option>Тестирование</option>
//                   <option>Готово</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Дата</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                 />
//               </div>

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <div style={{ marginTop: "15px" }}>
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Создаю..." : "Создать задачу"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   style={{ marginLeft: "10px" }}
//                 >
//                   Отмена
//                 </button>
//               </div>
//             </form>

//             <Calendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// РАБОЧИЙ
// import { useState, useContext } from "react";
// // import { TasksContext } from "../../context/TasksContext";
// import { TasksContext } from "../../../context/TasksContext";

// const PopNewCard = ({ onClose }) => {
//   const { createTask } = useContext(TasksContext);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createTask({ title, description });
//       alert("Задача успешно создана!");
//       onClose();
//     } catch {
//       alert("Ошибка при создании задачи");
//     }
//   };

//   return (
//     <div className="popup">
//       <form onSubmit={handleSubmit}>
//         <h2>Создание новой задачи</h2>
//         <input
//           type="text"
//           placeholder="Название задачи"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Описание"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <div className="buttons">
//           <button type="submit">Создать</button>
//           <button type="button" onClick={onClose}>
//             Отмена
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PopNewCard;

// import { useState, useContext } from "react";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import { postKanban } from "../../../services/api";
// import Calendar from "../../Calendar/Calendar";

// const PopNewCard = ({ onClose }) => {
//   const { createTask } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     setLoading(true);
//     try {
//       const newTask = await postKanban(formData, user.token);
//       createTask(newTask); // Добавляем только что созданную задачу
//       onClose(); // Закрываем модалку
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pop-new-card">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <button className="pop-new-card__close" onClick={onClose}>✖</button>

//             <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
//               <div className="form-new__block">
//                 <label htmlFor="formTitle" className="subttl">Название задачи</label>
//                 <input
//                   type="text"
//                   name="title"
//                   id="formTitle"
//                   placeholder="Введите название задачи..."
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   autoFocus
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label htmlFor="textArea" className="subttl">Описание задачи</label>
//                 <textarea
//                   name="description"
//                   id="textArea"
//                   placeholder="Введите описание задачи..."
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Тема</label>
//                 <select name="topic" value={formData.topic} onChange={handleChange}>
//                   <option value="Web Design">Web Design</option>
//                   <option value="Research">Research</option>
//                   <option value="Copywriting">Copywriting</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Статус</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Без статуса</option>
//                   <option>Нужно сделать</option>
//                   <option>В работе</option>
//                   <option>Тестирование</option>
//                   <option>Готово</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Дата</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                 />
//               </div>

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <div style={{ marginTop: "15px" }}>
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Создаю..." : "Создать задачу"}
//                 </button>
//                 <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
//                   Отмена
//                 </button>
//               </div>
//             </form>

//             <Calendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// import { useState, useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import { postKanban } from "../../../services/api";

// const PopNewCard = ({ onClose }) => {
//   // const navigate = useNavigate();
//   const { setTasks } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     setLoading(true);
//     try {
//       const updatedTasks = await postKanban(formData, user.token);
//       setTasks(updatedTasks);

//       // navigate("/"); // возвращаем на главную
//       onClose(); // закрываем модалку
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pop-new-card">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <button className="pop-new-card__close" onClick={onClose}>
//               ✖
//             </button>

//             <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
//               <div className="form-new__block">
//                 <label htmlFor="formTitle" className="subttl">Название задачи</label>
//                 <input
//                   className="form-new__input"
//                   type="text"
//                   name="title"
//                   id="formTitle"
//                   placeholder="Введите название задачи..."
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   autoFocus
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label htmlFor="textArea" className="subttl">Описание задачи</label>
//                 <textarea
//                   className="form-new__area"
//                   name="description"
//                   id="textArea"
//                   placeholder="Введите описание задачи..."
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Тема</label>
//                 <select name="topic" value={formData.topic} onChange={handleChange}>
//                   <option value="Web Design">Web Design</option>
//                   <option value="Research">Research</option>
//                   <option value="Copywriting">Copywriting</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Статус</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Без статуса</option>
//                   <option>Нужно сделать</option>
//                   <option>В работе</option>
//                   <option>Тестирование</option>
//                   <option>Готово</option>
//                 </select>
//               </div>

//               <div className="form-new__block">
//                 <label className="subttl">Дата</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                 />
//               </div>

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <div style={{ marginTop: "15px" }}>
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Создаю..." : "Создать задачу"}
//                 </button>
//                 <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
//                   Отмена
//                 </button>
//               </div>
//             </form>

//             <Calendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TasksContext } from "../../../context/TasksContext";
// import { AuthContext } from "../../../context/AuthContext";
// import { postKanban } from "../../../services/api";

// const PopNewCard = () => {
//   const navigate = useNavigate();
//   const { setTasks } = useContext(TasksContext);
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     title: "",
//     topic: "Research",
//     status: "Без статуса",
//     description: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.token) {
//       alert("Ошибка: пользователь не авторизован");
//       return;
//     }

//     setLoading(true);
//     try {
//       const updatedTasks = await postKanban(formData, user.token);
//       setTasks(updatedTasks);
//       navigate("/"); // возвращаем на главную
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => navigate("/");

//   return (
//     <div className="pop-new-card">
//       <div className="pop-new-card__container">
//         <h2>Создать новую задачу</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Название задачи:
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Введите название"
//               required
//             />
//           </label>

//           <label>
//             Тема:
//             <select name="topic" value={formData.topic} onChange={handleChange}>
//               <option value="Web Design">Web Design</option>
//               <option value="Research">Research</option>
//               <option value="Copywriting">Copywriting</option>
//             </select>
//           </label>

//           <label>
//             Статус:
//             <select name="status" value={formData.status} onChange={handleChange}>
//               <option>Без статуса</option>
//               <option>Нужно сделать</option>
//               <option>В работе</option>
//               <option>Тестирование</option>
//               <option>Готово</option>
//             </select>
//           </label>

//           <label>
//             Описание:
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Введите описание задачи..."
//             />
//           </label>

//           <label>
//             Дата:
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//             />
//           </label>

//           {error && <p style={{ color: "red" }}>{error}</p>}

//           <div style={{ marginTop: "15px" }}>
//             <button type="submit" disabled={loading}>
//               {loading ? "Сохраняю..." : "Сохранить"}
//             </button>
//             <button type="button" onClick={handleCancel} style={{ marginLeft: "10px" }}>
//               Отмена
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopNewCard;

// import Calendar from "../../Calendar/Calendar";

// const popNewCard = () => {
//   return (
//     <div className="pop-new-card" id="popNewCard">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <a href="#" className="pop-new-card__close">
//               ✖
//             </a>
//             <div className="pop-new-card__wrap">
//               <form
//                 className="pop-new-card__form form-new"
//                 id="formNewCard"
//                 action="#"
//               >
//                 <div className="form-new__block">
//                   <label htmlFor="formTitle" className="subttl">
//                     Название задачи
//                   </label>
//                   <input
//                     className="form-new__input"
//                     type="text"
//                     name="name"
//                     id="formTitle"
//                     placeholder="Введите название задачи..."
//                     autoFocus=""
//                   />
//                 </div>
//                 <div className="form-new__block">
//                   <label htmlFor="textArea" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-new__area"
//                     name="text"
//                     id="textArea"
//                     placeholder="Введите описание задачи..."
//                     defaultValue={""}
//                   />
//                 </div>
//               </form>

//               <Calendar />

//             </div>
//             <div className="pop-new-card__categories categories">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__themes">
//                 <div className="categories__theme _orange _active-category">
//                   <p className="_orange">Web Design</p>
//                 </div>
//                 <div className="categories__theme _green">
//                   <p className="_green">Research</p>
//                 </div>
//                 <div className="categories__theme _purple">
//                   <p className="_purple">Copywriting</p>
//                 </div>
//               </div>
//             </div>
//             <button className="form-new__create _hover01" id="btnCreate">
//               Создать задачу
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default popNewCard;

// КОД ДО КОНТЕКСТА
// import Calendar from "../../Calendar/Calendar";

// const popNewCard = () => {
//   return (
//     <div className="pop-new-card" id="popNewCard">
//       <div className="pop-new-card__container">
//         <div className="pop-new-card__block">
//           <div className="pop-new-card__content">
//             <h3 className="pop-new-card__ttl">Создание задачи</h3>
//             <a href="#" className="pop-new-card__close">
//               ✖
//             </a>
//             <div className="pop-new-card__wrap">
//               <form
//                 className="pop-new-card__form form-new"
//                 id="formNewCard"
//                 action="#"
//               >
//                 <div className="form-new__block">
//                   <label htmlFor="formTitle" className="subttl">
//                     Название задачи
//                   </label>
//                   <input
//                     className="form-new__input"
//                     type="text"
//                     name="name"
//                     id="formTitle"
//                     placeholder="Введите название задачи..."
//                     autoFocus=""
//                   />
//                 </div>
//                 <div className="form-new__block">
//                   <label htmlFor="textArea" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-new__area"
//                     name="text"
//                     id="textArea"
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
//                       <div className="calendar__cell _cell-day _weekend">9</div>
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
//                       Выберите срок исполнения <span className="date-control" />
//                       .
//                     </p>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//             <div className="pop-new-card__categories categories">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__themes">
//                 <div className="categories__theme _orange _active-category">
//                   <p className="_orange">Web Design</p>
//                 </div>
//                 <div className="categories__theme _green">
//                   <p className="_green">Research</p>
//                 </div>
//                 <div className="categories__theme _purple">
//                   <p className="_purple">Copywriting</p>
//                 </div>
//               </div>
//             </div>
//             <button className="form-new__create _hover01" id="btnCreate">
//               Создать задачу
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default popNewCard;
