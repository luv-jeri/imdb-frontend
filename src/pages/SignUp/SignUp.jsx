import s from "./SignUp.module.css";
import { useState } from "react";
import { apiAxios } from "@constants";
import Button from "@core/Button/Button";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await apiAxios.post("/auth/join", {
        name,
        email,
        password,
        confirmPassword,
      });
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
            label="Name"
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
          />
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
          <Input
            label="Confirm Password"
            type="password"
            name="confirm_password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            id="confirm_password"
          />
        </div>
        <div className={s.buttons_group}>
          <Button label="Sign Up" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button label="Sign In">Sign In</Button>
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
