const BaseInput = ({
  tag = "input", // input | textarea
  type = "text",
  placeholder = "",
  className = "",
  ...props
}) => {
  const Tag = tag;

  const baseStyles =
    "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <Tag
      type={tag === "input" ? type : undefined}
      placeholder={placeholder}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
};

export default BaseInput;
