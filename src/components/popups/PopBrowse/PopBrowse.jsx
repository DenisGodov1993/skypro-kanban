import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { TasksContext } from "../../../context/TasksContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { toast } from "react-toastify";
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
  const { tasks, updateTask, deleteTaskById, getTaskById } =
    useContext(TasksContext);
  const { theme } = useContext(ThemeContext);

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

  const handleEdit = () => {
    setBackup(task);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      console.log("Сохраняем задачу", task);

      await updateTask(task._id, task);
      setIsEditing(false);
      toast.success("Задача успешно обновлена!");
    } catch (err) {
      console.error("Ошибка сохранения:", err);
      toast.error("Не удалось обновить задачу.");
    }
  };

  const handleCancel = () => {
    setTask(backup);
    setIsEditing(false); 
  };

  const handleDelete = async () => {
    try {
      await deleteTaskById(task._id);
      toast.success("Задача успешно удалена!");
      navigate(-1);
    } catch (err) {
      console.error("Ошибка удаления:", err);
      toast.error("Не удалось удалить задачу.");
    }
  };

  const handleStatusChange = (newStatus) => {
    if (!isEditing) return;
    setTask((prev) => ({ ...prev, status: newStatus }));
  };

  const categoryColors = {
    "Web Design": { bg: "#FFE4C2", text: "#FF6D00" },
    Research: { bg: "#B4FDD1", text: "#06B16E" },
    Copywriting: { bg: "#E9D4FF", text: "#9A48F1" },
    default: { bg: "#94A6BE", text: "#FFF" },
  };

  return (
    <PopBrowseWrapper $themeMode={theme}>
      <PopBrowseContainer>
        <PopBrowseBlock $themeMode={theme}>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle $themeMode={theme}>
                {task.title || "Без названия"}
              </PopBrowseTitle>
              <CategoriesTheme
                $color={categoryColors[task.topic] || categoryColors.default}
                $active
              >
                <p>{task.topic || "Без категории"}</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>

            <PopBrowseStatus>
              <StatusTitle $themeMode={theme}>Статус</StatusTitle>
              <StatusThemes>
                {isEditing ? (
                  [
                    "Без статуса",
                    "Нужно сделать",
                    "В работе",
                    "Тестирование",
                    "Готово",
                  ].map((s) => (
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
                  <label htmlFor="desc">Описание задачи</label>
                  <FormArea
                    id="desc"
                    value={task.description || ""}
                    onChange={(e) =>
                      setTask((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    readOnly={!isEditing}
                    $themeMode={theme}
                    placeholder="Введите описание задачи..."
                  />
                </FormBlock>
              </PopBrowseForm>

              <Calendar
                editable={isEditing}
                selectedDate={task.date}
                onDateChange={(newDate) =>
                  isEditing && setTask({ ...task, date: newDate })
                }
              />
            </PopBrowseWrap>

            <PopBrowseButtons>
              {!isEditing ? (
                <>
                  <ButtonGroup>
                    <BtnBrowseEdit onClick={handleEdit}>
                      Редактировать задачу
                    </BtnBrowseEdit>
                    <BtnBrowseDelete onClick={handleDelete}>
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
                    <BtnBrowseDelete onClick={handleDelete}>
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


// import { useState, useContext, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Calendar from "../../Calendar/Calendar";
// import { TasksContext } from "../../../context/TasksContext";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { toast } from "react-toastify";
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

// const PopBrowse = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { tasks, updateTask, deleteTaskById, getTaskById } =
//     useContext(TasksContext);
//   const { theme } = useContext(ThemeContext);

//   const [task, setTask] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [backup, setBackup] = useState({});
//   const [loading, setLoading] = useState(true);

//   // Загружаем задачу по id (из контекста или через API)
//   useEffect(() => {
//     const loadTask = async () => {
//       setLoading(true);
//       try {
//         // ищем задачу в контексте
//         let found = tasks.find((t) => t._id === id);
//         if (!found) {
//           // если нет — грузим с API
//           found = await getTaskById(id);
//         }
//         setTask(found);
//       } catch (err) {
//         console.error("Ошибка загрузки задачи:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) loadTask();
//   }, [id, tasks, getTaskById]);

//   if (loading) return <p>Загрузка...</p>;
//   if (!task) return <p>Задача не найдена</p>;

//   // функции

//   const handleEdit = () => {
//     setBackup(task);
//     setIsEditing(true);
//   };

//   const handleSave = async () => {
//     try {
//       await updateTask(task._id, task);
//       setIsEditing(false);
//       toast.success("Задача успешно обновлена!");
//     } catch (err) {
//       console.error("Ошибка сохранения:", err);
//       toast.error("Не удалось обновить задачу.");
//     }
//   };

//   const handleCancel = () => {
//     setTask(backup);
//     setIsEditing(false);
//   };

//   const handleDelete = async () => {
//     // await deleteTaskById(task._id);
//     // navigate(-1);
//     try {
//       await deleteTaskById(task._id);
//       toast.success("Задача успешно удалена!");
//       navigate(-1);
//     } catch (err) {
//       console.error("Ошибка удаления:", err);
//       toast.error("Не удалось удалить задачу.");
//     }
//   };

//   const handleStatusChange = (newStatus) => {
//     if (!isEditing) return;
//     setTask((prev) => ({ ...prev, status: newStatus }));
//   };

//   const categoryColors = {
//     "Web Design": { bg: "#FFE4C2", text: "#FF6D00" },
//     Research: { bg: "#B4FDD1", text: "#06B16E" },
//     Copywriting: { bg: "#E9D4FF", text: "#9A48F1" },
//     default: { bg: "#94A6BE", text: "#FFF" },
//   };

//   return (
//     <PopBrowseWrapper themeMode={theme}>
//       <PopBrowseContainer>
//         <PopBrowseBlock themeMode={theme}>
//           <PopBrowseContent>
//             <PopBrowseTopBlock>
//               <PopBrowseTitle themeMode={theme}>
//                 {isEditing ? "Редактирование задачи" : task.title}
//               </PopBrowseTitle>

//               {/* <CategoriesTheme>
//                 <p>{task.topic || "Без категории"}</p>
//               </CategoriesTheme> */}

//               <CategoriesTheme
//                 $color={categoryColors[task.topic] || categoryColors.default}
//                 $active
//               >
//                 <p>{task.topic || "Без категории"}</p>
//               </CategoriesTheme>
//             </PopBrowseTopBlock>

//             <PopBrowseStatus>
//               <StatusTitle themeMode={theme}>Статус</StatusTitle>
//               <StatusThemes>
//                 {isEditing ? (
//                   [
//                     "Без статуса",
//                     "Нужно сделать",
//                     "В работе",
//                     "Тестирование",
//                     "Готово",
//                   ].map((s) => (
//                     <StatusTheme
//                       key={s}
//                       $active={s === task.status}
//                       $editable={isEditing}
//                       onClick={() => handleStatusChange(s)}
//                     >
//                       <p>{s}</p>
//                     </StatusTheme>
//                   ))
//                 ) : (
//                   <StatusTheme $active>
//                     <p>{task.status}</p>
//                   </StatusTheme>
//                 )}
//               </StatusThemes>
//             </PopBrowseStatus>

//             <PopBrowseWrap>
//               <PopBrowseForm>
//                 <FormBlock>
//                   <label htmlFor="textArea01">Описание задачи</label>
//                   <FormArea
//                     id="desc"
//                     value={task.description || ""}
//                     onChange={(e) =>
//                       isEditing &&
//                       setTask({ ...task, description: e.target.value })
//                     }
//                     readOnly={!isEditing}
//                     themeMode={theme}
//                   />
//                 </FormBlock>
//               </PopBrowseForm>

//               <Calendar
//                 editable={isEditing}
//                 selectedDate={task.date}
//                 onDateChange={(newDate) =>
//                   isEditing && setTask({ ...task, date: newDate })
//                 }
//               />
//             </PopBrowseWrap>

//             <PopBrowseButtons>
//               {!isEditing ? (
//                 <>
//                   <ButtonGroup>
//                     <BtnBrowseEdit onClick={handleEdit}>
//                       Редактировать задачу
//                     </BtnBrowseEdit>
//                     <BtnBrowseDelete onClick={handleDelete}>
//                       Удалить задачу
//                     </BtnBrowseDelete>
//                   </ButtonGroup>
//                   <BtnBrowseClose onClick={() => navigate(-1)}>
//                     Закрыть
//                   </BtnBrowseClose>
//                 </>
//               ) : (
//                 <>
//                   <ButtonGroup>
//                     <BtnBrowseSave onClick={handleSave}>
//                       Сохранить
//                     </BtnBrowseSave>
//                     <BtnBrowseСancel onClick={handleCancel}>
//                       Отменить
//                     </BtnBrowseСancel>
//                     <BtnBrowseDelete onClick={handleDelete}>
//                       Удалить задачу
//                     </BtnBrowseDelete>
//                   </ButtonGroup>
//                   <BtnBrowseClose onClick={() => navigate(-1)}>
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
