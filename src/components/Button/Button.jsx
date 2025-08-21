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
    <button
      onClick={onClick}
      className={`${baseStyles} ${typeStyles[type]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default BaseButton;
