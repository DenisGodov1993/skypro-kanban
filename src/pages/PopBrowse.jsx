// import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

// const PopBrowsePage = () => {
//     return <PopBrowse />;
// };

// export default PopBrowsePage; 

// // { setIsAuth } , setIsAuth={setIsAuth}



import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

const PopBrowsePage = ({ isModal }) => {
  return <PopBrowse isModal={isModal} />;
};

export default PopBrowsePage;