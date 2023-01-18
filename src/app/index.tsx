import Routing from "pages";
import { withProviders } from "./providers/with-providers";
import "./styles/index.css";

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default withProviders(App);
