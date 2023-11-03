import s from "./SignIn.module.css";
import { useState } from "react";
import { apiAxios } from "@constants";
import Button from "@core/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

const Input = ({ label, type, name, value, onChange, id }) => {
  return (
    <div className={s.input_container}>
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

const SignUp = () => {
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const res = await apiAxios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data.content.user));

      setUser(res.data.content.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.sign_up_wrapper}>
        <div className={s.header}>
          <h1>Join Us !</h1>
        </div>

        <div className={s.content}>
          <Input
            label="Email"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
          />
        </div>
        <div className={s.buttons_group}>
          <Button label="Sign In" onClick={handleSignIn}>
            Sign In
          </Button>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
            to="/sign_up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// const [form, setForm] = useState({
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// });

// const handleChange = (e) => {
//   const { value, id } = e.target;
//   console.log(value, id);
//   const object = {
//     ...form,
//   };
//   object["name"] = value;
//   setForm(object);
//   // setForm((prev) => ({ ...prev, [id]: value }));
// };

// console.log(form);
