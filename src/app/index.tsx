import Routing from "pages";
import { withProviders } from "./providers/with-providers";
import "./styles/index.css";

const App = () => {
  return (
    <div className="container">
      <Routing />
    </div>
  );
};

export default withProviders(App);
