// export const cardList = [
//   {
//     id: 1,
//     topic: "Web Design",
//     title: "Название задачи",
//     // description: "Введите описание задачи...",
//     date: "30.10.23",
//     status: "Без статуса",
//     color: "orange",
//   },
//   {
//     id: 2, 
//     topic: "Research",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "Без статуса",
//     color: "green",
//   },
//   {
//     id: 3,
//     topic: "Web Design",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "Без статуса",
//     color: "orange",
//   },
//   {
//     id: 4,
//     topic: "Copywriting",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "Без статуса",
//     color: "purple",
//   },
//   {
//     id: 5,
//     topic: "Web Design",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "Без статуса",
//     color: "orange",
//   },
//   {
//     id: 6,
//     topic: "Research",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "Нужно сделать",
//     color: "green",
//   },
//   {
//     id: 7,
//     topic: "Research",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "В работе",
//     color: "green",
//   },
//   {
//     id: 8,
//     topic: "Copywriting",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "В работе",
//     color: "purple",
//   },
//   {
//     id: 9,
//     topic: "Web Design",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "В работе",
//     color: "orange",
//   },
//   {
//     id: 10,
//     topic: "Research",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "Тестирование",
//     color: "green",
//   },
//   {
//     id: 11,
//     topic: "Research",
//     title: "Название задачи",
//     // description: "Описание",
//     date: "30.10.23",
//     status: "Готово",
//     color: "green",
//   },
// ]; 








//     <SPopNewCard>
//       <SPopNewCardContainer>
//         <SPopNewCardBlock>
//           <SPopNewCardContent>
//             <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
//             <SPopNewCardClose onClick={onClose}>✖</SPopNewCardClose>

//             <SPopNewCardWrap>
//               <SPopNewCardForm id="formNewCard" onSubmit={handleSubmit}>
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
//               <Calendar />
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

//             <SFormNewCreate type="submit" onClick={handleSubmit}>
//               Создать задачу
//             </SFormNewCreate>
//           </SPopNewCardContent>
//         </SPopNewCardBlock>
//       </SPopNewCardContainer>
//     </SPopNewCard>
//   );