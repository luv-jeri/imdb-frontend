import Home from "@/pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default AppRoute;
