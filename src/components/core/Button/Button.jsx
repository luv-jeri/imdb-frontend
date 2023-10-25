import s from "./Button.module.css";

const Button = ({
  children,
  Icon,
  style,
  className,
  height = "60px",
  width = "100px",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        height: height || "auto",
        width: width || "auto",
        ...style,
      }}
      className={className}
    >
      {Icon && Icon}
      <p
        style={{
          marginLeft: Icon ? "0.5rem" : "0",
        }}
      >
        {children}
      </p>
    </button>
  );
};

export default Button;
