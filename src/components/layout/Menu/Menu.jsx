import s from "./Menu.module.css";
import Button from "../../core/Button/Button";
const Menu = ({ showMenu, style, className, handleClick }) => {
  return (
    <div
      className={s.menu_wrapper}
      style={{
        transform: showMenu ? "translateY(0)" : "translateY(-150%)",
      }}
    >
      <img
        src="/public/logo.png"
        alt="logo"
        className={s.logo}
        style={{
          height: "6rem",
          width: "10rem",
        }}
      />
      <Button height="3rem" onClick={handleClick}>
        Close
      </Button>
    </div>
  );
};

export default Menu;
