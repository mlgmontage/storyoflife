import { Route, Routes } from "react-router-dom";
import Home from "./home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routing;
