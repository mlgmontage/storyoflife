import { Route, Routes } from "react-router-dom";
import AddEvent from "./addevent";
import Home from "./home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="create" element={<AddEvent />} />
      </Route>
    </Routes>
  );
};

export default Routing;
