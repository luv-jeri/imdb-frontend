import { useState } from "react";

import s from "./Nav.module.css";
import Button from "../../core/Button/Button";
import { MenuIcon, BookmarkIcon } from "../../icons";
import Menu from "../Menu/Menu";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container">
      <Menu showMenu={showMenu} handleClick={handleMenuClick} />
      <img src="/public/full-logo.png" className={s.logo} />
      <Button
        onClick={handleMenuClick}
        Icon={<MenuIcon height="2.5rem" width="2.5rem" />}
        height="3rem"
      >
        Menu
      </Button>
      <div className={s.search}>
        <input />
      </div>
      <div className={s.list}>
        <Button height="3rem">
          <img src="/public/full-logo.png" className={s.logo} />
        </Button>
        <Button
          height="3rem"
          Icon={<BookmarkIcon height="2.5rem" width="2.5rem" />}
        >
          <a href="#">WatchList</a>
        </Button>
        <Button height="3rem">
          <a href="#">{user ? user.name : "Sign In"}</a>
        </Button>
        {user ? (
          <Button
            height="3rem"
            onClick={() => {
              setUser(null);
              localStorage.removeItem("user");
            }}
          >
            Logout
          </Button>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
