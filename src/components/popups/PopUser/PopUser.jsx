const PopUser = () => {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUser;



// import React from "react";

// const PopUser = ({ isOpen, onConfirm, onCancel }) => {
//   if (!isOpen) return null; // если окно закрыто → ничего не рендерим

//   return (
//     <div className="pop-exit fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="pop-exit__container bg-white p-6 rounded-2xl shadow-lg w-80">
//         <div className="pop-exit__block">
//           <div className="pop-exit__ttl mb-4">
//             <h2 className="text-lg font-semibold">Выйти из аккаунта?</h2>
//           </div>
//           <div className="pop-exit__form-group flex justify-between">
//             <button
//               className="pop-exit__exit-yes _hover01 bg-red-500 text-white px-4 py-2 rounded-lg"
//               onClick={onConfirm}
//             >
//               Да, выйти
//             </button>
//             <button
//               className="pop-exit__exit-no _hover03 bg-gray-300 px-4 py-2 rounded-lg"
//               onClick={onCancel}
//             >
//               Нет, остаться
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopUser;

// const PopUser = () => {
//   return (
//     <div className="pop-exit" id="popExit">
//       <div className="pop-exit__container">
//         <div className="pop-exit__block">
//           <div className="pop-exit__ttl">
//             <h2>Выйти из аккаунта?</h2>
//           </div>
//           <form className="pop-exit__form" id="formExit" action="#">
//             <div className="pop-exit__form-group">
//               <button className="pop-exit__exit-yes _hover01" id="exitYes">
//                 <a href="modal/signin.html">Да, выйти</a>{" "}
//               </button>
//               <button className="pop-exit__exit-no _hover03" id="exitNo">
//                 <a href="main.html">Нет, остаться</a>{" "}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopUser;
