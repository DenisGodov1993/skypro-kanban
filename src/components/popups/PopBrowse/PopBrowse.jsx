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
  PopBrowseButtons,
  ButtonGroup,
  BtnBrowseEdit,
  BtnBrowseDelete,
  BtnBrowseSave,
  BtnBrowseСancel,
  BtnBrowseClose,
} from "./PopBrowse.styled";

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, deleteTaskById, getTaskById } = useContext(TasksContext);

  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [backup, setBackup] = useState({});
  const [loading, setLoading] = useState(true);

  // Загружаем задачу по id (из контекста или через API)
  useEffect(() => {
    const loadTask = async () => {
      setLoading(true);
      try {
        // ищем задачу в контексте
        let found = tasks.find((t) => t._id === id);
        if (!found) {
          // если нет — грузим с API
          found = await getTaskById(id);
        }
        setTask(found);
      } catch (err) {
        console.error("Ошибка загрузки задачи:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadTask();
  }, [id, tasks, getTaskById]);

  if (loading) return <p>Загрузка...</p>;
  if (!task) return <p>Задача не найдена</p>;


// функции 

  const handleEdit = () => {
    setBackup(task);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateTask(task._id, task);
      setIsEditing(false);
    } catch (err) {
      console.error("Ошибка сохранения:", err);
    }
  };

  const handleCancel = () => {
    setTask(backup);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteTaskById(task._id);
    navigate(-1);
  };

  const handleStatusChange = (newStatus) => {
    if (!isEditing) return;
    setTask((prev) => ({ ...prev, status: newStatus }));
  };


  return (
    <PopBrowseWrapper>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>
                {isEditing ? "Редактирование задачи" : task.title}
              </PopBrowseTitle>

              <CategoriesTheme>
                 <p>{task.topic || "Без категории"}</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            
            <PopBrowseStatus>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                {isEditing ? (
                   ["Без статуса", 
                    "Нужно сделать", 
                    "В работе", 
                    "Тестирование", 
                    "Готово"].map((s) => (
                    <StatusTheme
                      key={s}
                      $active={s === task.status}
                      $editable={isEditing}
                      onClick={() => handleStatusChange(s)}
                    >
                      <p>{s}</p>
                    </StatusTheme>
                  ))
                ) : (
                  <StatusTheme $active>
                    <p>{task.status}</p>
                  </StatusTheme>
                )}
              </StatusThemes>
            </PopBrowseStatus>

            <PopBrowseWrap>
              <PopBrowseForm>
                <FormBlock>
                  <label htmlFor="textArea01">Описание задачи</label>
                  <FormArea
                    id="desc"
                    value={task.description || ""}
                    onChange={(e) =>
                      isEditing && setTask({ ...task, description: e.target.value })
                    }
                    readOnly={!isEditing}
                  />
                </FormBlock>
              </PopBrowseForm>

              <Calendar
                editable={isEditing}
                selectedDate={task.date}
                onDateChange={(newDate) => isEditing && setTask({ ...task, date: newDate })}
              />
            </PopBrowseWrap>

            <PopBrowseButtons>
              {!isEditing ? (
                <>
                  <ButtonGroup>
                    <BtnBrowseEdit onClick={handleEdit}>
                      Редактировать задачу
                    </BtnBrowseEdit>
                    <BtnBrowseDelete
                      onClick={handleDelete}>
                      Удалить задачу
                    </BtnBrowseDelete>
                  </ButtonGroup>
                  <BtnBrowseClose onClick={() => navigate(-1)}>
                    Закрыть
                  </BtnBrowseClose>
                </>
              ) : (
                <>
                  <ButtonGroup>
                    <BtnBrowseSave onClick={handleSave}>
                      Сохранить
                    </BtnBrowseSave>
                    <BtnBrowseСancel onClick={handleCancel}>
                      Отменить
                    </BtnBrowseСancel>
                    <BtnBrowseDelete
                      onClick={handleDelete}>
                      Удалить задачу
                    </BtnBrowseDelete>
                  </ButtonGroup>
                  <BtnBrowseClose onClick={() => navigate(-1)}>
                    Закрыть
                  </BtnBrowseClose>
                </>
              )}
            </PopBrowseButtons>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
};

export default PopBrowse;



//чистый код до контекста
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
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
//   PopBrowseButtons,
//   ButtonGroup,
//   BtnBrowseEdit,
//   BtnBrowseDelete,
//   BtnBrowseSave,
//   BtnBrowseСancel,
//   BtnBrowseClose,
// } from "./PopBrowse.styled";

// /**
//  * PopBrowse — не использует TasksContext.
//  * Открывается, если в URL есть /card/:id (useParams.id).
//  * Закрывается navigate(-1) при нажатии Закрыть.
//  * Сохранение — локальное (console.log).
//  */

// const PopBrowse = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Управление видимостью модалки: открываем, если есть id в URL
//   const [isModalOpen, setIsModalOpen] = useState(Boolean(id));

//   // Режим редактирования
//   const [isEditing, setIsEditing] = useState(false);
//   const [backup, setBackup] = useState({});

//   // Локальные поля задачи (т.к. мы не тянем их из контекста, используем заглушку)
//   const [taskTitle, setTaskTitle] = useState(`Задача ${id ?? ""}`);
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskStatus, setTaskStatus] = useState("Без статуса");
//   const [category, setCategory] = useState("Web Design");
//   const [taskDate, setTaskDate] = useState(() => {
//     // по умолчанию текущая дата в формате YYYY-MM-DD для передачи в Calendar (или строка)
//     const d = new Date();
//     return `${String(d.getDate()).padStart(2, "0")}.${String(
//       d.getMonth() + 1
//     ).padStart(2, "0")}.${d.getFullYear()}`;
//   });

//   // Категории и статусы (локально)
//   const categories = [
//     { name: "Web Design", class: "_orange" },
//     { name: "Research", class: "_green" },
//     { name: "Copywriting", class: "_purple" },
//   ];
//   const statuses = [
//     "Без статуса",
//     "Нужно сделать",
//     "В работе",
//     "Тестирование",
//     "Готово",
//   ];

//   // Синхронизируем isModalOpen с id из URL
//   useEffect(() => {
//     setIsModalOpen(Boolean(id));
//     // при изменении id — обновляем title (чтобы видеть id в шапке)
//     if (id) {
//       setTaskTitle((prev) =>
//         prev && !prev.startsWith("Задача") ? prev : `Задача ${id}`
//       );
//     }
  
//   }, [id]);
//   //ф eslint-disable-next-line react-hooks/exhaustive-deps

//   // Если модалка не открыта — ничего не показываем
//   if (!isModalOpen) return null;

//   const activeCategory = categories.find((c) => c.name === category);

//   const handleEdit = () => {
//     setBackup({
//       title: taskTitle,
//       description: taskDescription,
//       status: taskStatus,
//       topic: category,
//       date: taskDate,
//     });
//     setIsEditing(true);
//   };

//   const handleSave = (e) => {
//     e?.preventDefault();
//     // здесь можно вызвать API / контекст — пока просто логируем
//     console.log("Сохранено (локально):", {
//       id,
//       title: taskTitle,
//       description: taskDescription,
//       status: taskStatus,
//       topic: category,
//       date: taskDate,
//     });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTaskTitle(backup.title ?? taskTitle);
//     setTaskDescription(backup.description ?? taskDescription);
//     setTaskStatus(backup.status ?? taskStatus);
//     setCategory(backup.topic ?? category);
//     setTaskDate(backup.date ?? taskDate);
//     setIsEditing(false);
//   };

//   const handleStatusChange = (newStatus) => {
//     if (!isEditing) return;
//     setTaskStatus(newStatus);
//   };

//   const handleClose = () => {
//     setIsModalOpen(false);
//     setIsEditing(false);
//     // возвращаемся назад в истории (там, откуда пришли по Link /card/:id)
//     navigate(-1);
//   };

//   return (
//     <PopBrowseWrapper>
//       <PopBrowseContainer>
//         <PopBrowseBlock>
//           <PopBrowseContent>
//             <PopBrowseTopBlock>
//               <PopBrowseTitle>
//                 {/* {isEditing
//                   ? "Редактирование задачи"
//                   : `Название задачи ${id ?? ""}`} */}
//                 {isEditing ? "Редактирование задачи" : "Название задачи"}
//               </PopBrowseTitle>

//               <CategoriesTheme className="_active-category">
//                 <p className={activeCategory?.class}>{activeCategory?.name}</p>
//               </CategoriesTheme>
//             </PopBrowseTopBlock>
            
//             <PopBrowseStatus>
//               <StatusTitle>Статус</StatusTitle>
//               <StatusThemes>
//                 {isEditing ? (
//                   // Если редактирование — показываем все статусы
//                   statuses.map((s) => (
//                     <StatusTheme
//                       key={s}
//                       $active={s === taskStatus}
//                       $editable={isEditing}
//                       onClick={() => handleStatusChange(s)}
//                       title={`Переключить на "${s}"`}
//                     >
//                       <p>{s}</p>
//                     </StatusTheme>
//                   ))
//                 ) : (
//                   // Если не редактирование — только текущий статус
//                   <StatusTheme $active $editable={false}>
//                     <p>{taskStatus}</p>
//                   </StatusTheme>
//                 )}
//               </StatusThemes>
//             </PopBrowseStatus>

//             <PopBrowseWrap>
//               <PopBrowseForm onSubmit={handleSave}>
//                 <FormBlock>
//                   <label htmlFor="textArea01">Описание задачи</label>
//                   <FormArea
//                     id="textArea01"
//                     placeholder="Введите описание задачи..."
//                     value={taskDescription}
//                     onChange={(e) => setTaskDescription(e.target.value)}
//                     readOnly={!isEditing}
//                     $editable={isEditing}
//                   />
//                 </FormBlock>
//               </PopBrowseForm>

//               <Calendar
//                 editable={isEditing}
//                 selectedDate={taskDate}
//                 onDateChange={(newDate) => {
//                   if (!isEditing) return;
//                   // предполагаем, что Calendar возвращает строку "dd.mm.yyyy" или Date — адаптируем
//                   setTaskDate(newDate);
//                 }}
//               />
//             </PopBrowseWrap>

//             <PopBrowseButtons>
//               {!isEditing ? (
//                 <>
//                   <ButtonGroup>
//                     <BtnBrowseEdit type="button" onClick={handleEdit}>
//                       Редактировать задачу
//                     </BtnBrowseEdit>
//                     <BtnBrowseDelete
//                       type="button"
//                       onClick={() => {
//                         // локальное удаление — просто логируем, можно навигация назад
//                         console.log("Удалить задачу (локально):", id);
//                         handleClose();
//                       }}
//                     >
//                       Удалить задачу
//                     </BtnBrowseDelete>
//                   </ButtonGroup>
//                   <BtnBrowseClose type="button" onClick={handleClose}>
//                     Закрыть
//                   </BtnBrowseClose>
//                 </>
//               ) : (
//                 <>
//                   <ButtonGroup>
//                     <BtnBrowseSave type="button" onClick={handleSave}>
//                       Сохранить
//                     </BtnBrowseSave>
//                     <BtnBrowseСancel type="button" onClick={handleCancel}>
//                       Отменить
//                     </BtnBrowseСancel>
//                     <BtnBrowseDelete
//                       type="button"
//                       onClick={() => {
//                         console.log("Удалить задачу (локально):", id);
//                         handleClose();
//                       }}
//                     >
//                       Удалить задачу
//                     </BtnBrowseDelete>
//                   </ButtonGroup>
//                   <BtnBrowseClose type="button" onClick={handleClose}>
//                     Закрыть
//                   </BtnBrowseClose>
//                 </>
//               )}
//             </PopBrowseButtons>
//           </PopBrowseContent>
//         </PopBrowseBlock>
//       </PopBrowseContainer>
//     </PopBrowseWrapper>
//   );
// };

// export default PopBrowse;






// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
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
//   PopBrowseButtons,
//   ButtonGroup,
//   BtnBrowseEdit,
//   BtnBrowseDelete,
//   BtnBrowseSave,
//   BtnBrowseСancel,
//   BtnBrowseClose,
// } from "./PopBrowse.styled";

// /**
//  * PopBrowse — не использует TasksContext.
//  * Открывается, если в URL есть /card/:id (useParams.id).
//  * Закрывается navigate(-1) при нажатии Закрыть.
//  * Сохранение — локальное (console.log).
//  */

// const PopBrowse = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Управление видимостью модалки: открываем, если есть id в URL
//   const [isModalOpen, setIsModalOpen] = useState(Boolean(id));

//   // Режим редактирования
//   const [isEditing, setIsEditing] = useState(false);
//   const [backup, setBackup] = useState({});

//   // Локальные поля задачи (т.к. мы не тянем их из контекста, используем заглушку)
//   const [taskTitle, setTaskTitle] = useState(`Задача ${id ?? ""}`);
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskStatus, setTaskStatus] = useState("Без статуса");
//   const [category, setCategory] = useState("Web Design");
//   const [taskDate, setTaskDate] = useState(() => {
//     // по умолчанию текущая дата в формате YYYY-MM-DD для передачи в Calendar (или строка)
//     const d = new Date();
//     return `${String(d.getDate()).padStart(2, "0")}.${String(
//       d.getMonth() + 1
//     ).padStart(2, "0")}.${d.getFullYear()}`;
//   });

//   // Категории и статусы (локально)
//   const categories = [
//     { name: "Web Design", class: "_orange" },
//     { name: "Research", class: "_green" },
//     { name: "Copywriting", class: "_purple" },
//   ];
//   const statuses = [
//     "Без статуса",
//     "Нужно сделать",
//     "В работе",
//     "Тестирование",
//     "Готово",
//   ];

//   // Синхронизируем isModalOpen с id из URL
//   useEffect(() => {
//     setIsModalOpen(Boolean(id));
//     // при изменении id — обновляем title (чтобы видеть id в шапке)
//     if (id) {
//       setTaskTitle((prev) =>
//         prev && !prev.startsWith("Задача") ? prev : `Задача ${id}`
//       );
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   // Если модалка не открыта — ничего не показываем
//   if (!isModalOpen) return null;

//   const activeCategory = categories.find((c) => c.name === category);

//   const handleEdit = () => {
//     setBackup({
//       title: taskTitle,
//       description: taskDescription,
//       status: taskStatus,
//       topic: category,
//       date: taskDate,
//     });
//     setIsEditing(true);
//   };

//   const handleSave = (e) => {
//     e?.preventDefault();
//     // здесь можно вызвать API / контекст — пока просто логируем
//     console.log("Сохранено (локально):", {
//       id,
//       title: taskTitle,
//       description: taskDescription,
//       status: taskStatus,
//       topic: category,
//       date: taskDate,
//     });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTaskTitle(backup.title ?? taskTitle);
//     setTaskDescription(backup.description ?? taskDescription);
//     setTaskStatus(backup.status ?? taskStatus);
//     setCategory(backup.topic ?? category);
//     setTaskDate(backup.date ?? taskDate);
//     setIsEditing(false);
//   };

//   const handleStatusChange = (newStatus) => {
//     if (!isEditing) return;
//     setTaskStatus(newStatus);
//   };

//   const handleClose = () => {
//     setIsModalOpen(false);
//     setIsEditing(false);
//     // возвращаемся назад в истории (там, откуда пришли по Link /card/:id)
//     navigate(-1);
//   };

//   return (
//     <PopBrowseWrapper>
//       <PopBrowseContainer>
//         <PopBrowseBlock>
//           <PopBrowseContent>
//             <PopBrowseTopBlock>
//               <PopBrowseTitle>
//                 {isEditing
//                   ? "Редактирование задачи"
//                   : `Название задачи ${id ?? ""}`}
//                 {/* {isEditing ? "Редактирование задачи" : "Название задачи"} */}
//               </PopBrowseTitle>

//               <CategoriesTheme className="_active-category">
//                 <p className={activeCategory?.class}>{activeCategory?.name}</p>
//               </CategoriesTheme>
//             </PopBrowseTopBlock>

//             {/* <PopBrowseStatus>
//               <StatusTitle>Статус</StatusTitle>
//               <StatusThemes>
//                 {statuses.map((s) => (
//                   <StatusTheme
//                     key={s}
//                     onClick={() => handleStatusChange(s)}
//                     style={{
//                       borderColor: s === taskStatus ? "#94A6BE" : "#D4DBE5",
//                       color: s === taskStatus ? "#94A6BE" : "#94A6BE90",
//                       cursor: isEditing ? "pointer" : "default",
//                       backgroundColor: s === taskStatus ? "#94A6BE20" : "transparent",
//                       display: "inline-flex",
//                     }}
//                     title={isEditing ? `Переключить на "${s}"` : undefined}
//                   >
//                     <p>{s}</p>
//                   </StatusTheme>
//                 ))}
//               </StatusThemes>
//             </PopBrowseStatus> */}

//             {/* <PopBrowseStatus>
//               <StatusTitle>Статус</StatusTitle>
//               <StatusThemes>
//                 {statuses.map((s) => (
//                   <StatusTheme
//                     key={s}
//                     $active={s === taskStatus}
//                     $editable={isEditing}
//                     onClick={() => handleStatusChange(s)}
//                     title={isEditing ? `Переключить на "${s}"` : undefined}
//                   >
//                     <p>{s}</p>
//                   </StatusTheme>
//                 ))}
//               </StatusThemes>
//             </PopBrowseStatus> */}

//             <PopBrowseStatus>
//               <StatusTitle>Статус</StatusTitle>
//               <StatusThemes>
//                 {isEditing ? (
//                   // Если редактирование — показываем все статусы
//                   statuses.map((s) => (
//                     <StatusTheme
//                       key={s}
//                       $active={s === taskStatus}
//                       $editable={isEditing}
//                       onClick={() => handleStatusChange(s)}
//                       title={`Переключить на "${s}"`}
//                     >
//                       <p>{s}</p>
//                     </StatusTheme>
//                   ))
//                 ) : (
//                   // Если не редактирование — только текущий статус
//                   <StatusTheme $active $editable={false}>
//                     <p>{taskStatus}</p>
//                   </StatusTheme>
//                 )}
//               </StatusThemes>
//             </PopBrowseStatus>

//             <PopBrowseWrap>
//               {/* <PopBrowseForm onSubmit={handleSave}>
//                 <FormBlock>
//                   <label htmlFor="textArea01">Описание задачи</label>
//                   <FormArea
//                     id="textArea01"
//                     placeholder="Введите описание задачи..."
//                     value={taskDescription}
//                     onChange={(e) => setTaskDescription(e.target.value)}
//                     readOnly={!isEditing}
//                     style={{
//                       borderColor: isEditing ? "#94A6BE" : "#D4DBE5",
//                       color: isEditing ? "#000" : "#666",
//                     }}
//                   />
//                 </FormBlock>
//               </PopBrowseForm> */}

//               <PopBrowseForm onSubmit={handleSave}>
//                 <FormBlock>
//                   <label htmlFor="textArea01">Описание задачи</label>
//                   <FormArea
//                     id="textArea01"
//                     placeholder="Введите описание задачи..."
//                     value={taskDescription}
//                     onChange={(e) => setTaskDescription(e.target.value)}
//                     readOnly={!isEditing}
//                     $editable={isEditing}
//                   />
//                 </FormBlock>
//               </PopBrowseForm>

//               <Calendar
//                 editable={isEditing}
//                 selectedDate={taskDate}
//                 onDateChange={(newDate) => {
//                   if (!isEditing) return;
//                   // предполагаем, что Calendar возвращает строку "dd.mm.yyyy" или Date — адаптируем
//                   setTaskDate(newDate);
//                 }}
//               />
//             </PopBrowseWrap>

//             <PopBrowseButtons>
//               {!isEditing ? (
//                 <>
//                   <ButtonGroup>
//                     <BtnBrowseEdit type="button" onClick={handleEdit}>
//                       Редактировать задачу
//                     </BtnBrowseEdit>
//                     <BtnBrowseDelete
//                       type="button"
//                       onClick={() => {
//                         // локальное удаление — просто логируем, можно навигация назад
//                         console.log("Удалить задачу (локально):", id);
//                         handleClose();
//                       }}
//                     >
//                       Удалить задачу
//                     </BtnBrowseDelete>
//                   </ButtonGroup>
//                   <BtnBrowseClose type="button" onClick={handleClose}>
//                     Закрыть
//                   </BtnBrowseClose>
//                 </>
//               ) : (
//                 <>
//                   <ButtonGroup>
//                     <BtnBrowseSave type="button" onClick={handleSave}>
//                       Сохранить
//                     </BtnBrowseSave>
//                     <BtnBrowseСancel type="button" onClick={handleCancel}>
//                       Отменить
//                     </BtnBrowseСancel>
//                     <BtnBrowseDelete
//                       type="button"
//                       onClick={() => {
//                         console.log("Удалить задачу (локально):", id);
//                         handleClose();
//                       }}
//                     >
//                       Удалить задачу
//                     </BtnBrowseDelete>
//                   </ButtonGroup>
//                   <BtnBrowseClose type="button" onClick={handleClose}>
//                     Закрыть
//                   </BtnBrowseClose>
//                 </>
//               )}
//             </PopBrowseButtons>
//           </PopBrowseContent>
//         </PopBrowseBlock>
//       </PopBrowseContainer>
//     </PopBrowseWrapper>
//   );
// };

// export default PopBrowse;












// // КОД ДО КОНТЕКСТА
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
