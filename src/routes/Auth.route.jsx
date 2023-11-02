import SignIn from "@/pages/SignIn/SignIn";
import SignUp from "@/pages/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
    </Routes>
  );
};
export default AppRoute;
