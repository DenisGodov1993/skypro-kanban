// import { useContext } from "react";
// import { SButton } from "./Button.styled";
// import { ThemeContext } from "../../context/ThemeContext";

// const BaseButton = ({
//   onClick,
//   type = "primary", // primary | secondary | danger
//   text,
//   fullWidth = false,
//   className = "",
//   ...props
// }) => {
//   const { theme } = useContext(ThemeContext);
//   // const baseStyles =
//   //   "px-4 py-2 rounded-lg font-medium transition-all duration-200";

//   // const typeStyles = {
//   //   primary: "bg-blue-500 text-white hover:bg-blue-600",
//   //   secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
//   //   danger: "bg-red-500 text-white hover:bg-red-600",
//   // };

//   return ( 
//     <SButton
//       onClick={onClick}
//       fullWidth={fullWidth}
//       buttonType={type}
//       themeMode={theme}
//       className={className}
//       {...props}
//       // className={`${baseStyles} ${typeStyles[type]} ${
//       //   fullWidth ? "w-full" : ""
//       // } ${className}`}
//       // {...props}
//     >
//       {text}
//     </SButton>
//   );
// };

// export default BaseButton;

import { SButton } from "./Button.styled";

const BaseButton = ({
  onClick,
  type = "primary", // primary | secondary | danger
  text,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200";

  const typeStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return ( 
    <SButton
      onClick={onClick}
      className={`${baseStyles} ${typeStyles[type]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {text}
    </SButton>
  );
};

export default BaseButton;
