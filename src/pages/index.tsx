import { Route, Routes } from "react-router-dom";
import AddEvent from "./addevent";
import Home from "./home";
import User from "./user";
import ViewEvent from "./viewevent";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/create/:year/:month" element={<AddEvent />} />
        <Route path="/view/:id" element={<ViewEvent />} />
      </Route>
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default Routing;
