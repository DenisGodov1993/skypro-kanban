import { useContext } from "react";
import { STag } from "./Input.styled";
import { ThemeContext } from "../../context/ThemeContext";

const BaseInput = ({
  tag = "input", // input | textarea | select
  type = "text",
  placeholder = "",
  className = "",
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  // const baseStyles =
  //   "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <STag
      as={tag} // input | textarea | select
      type={tag === "input" ? type : undefined}
      placeholder={placeholder}
      className={className}
      // className={`${baseStyles} ${className}`}
      themeMode={theme}
      {...props}
    />
  );
};

export default BaseInput;
