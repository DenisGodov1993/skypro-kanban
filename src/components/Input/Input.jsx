import { STag } from "./Input.styled";

const BaseInput = ({
  tag = "input", // input | textarea | select
  type = "text",
  placeholder = "",
  className = "",
  ...props
}) => {
  const baseStyles =
    "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <STag
      as={tag} // input | textarea | select
      type={tag === "input" ? type : undefined}
      placeholder={placeholder}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
};

export default BaseInput;

// ДО РАБОТЫ С API

// import { STag } from "./Input.styled";

// const BaseInput = ({
//   tag = "input", // input | textarea | select
//   type = "text",
//   placeholder = "",
//   className = "",
//   ...props
// }) => {
//   const baseStyles =
//     "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

//   return (
//     <STag
//       as={tag} // input | textarea | select
//       type={tag === "input" ? type : undefined}
//       placeholder={placeholder}
//       className={`${baseStyles} ${className}`}
//       {...props}
//     />
//   );
// };

// export default BaseInput;