import { useRoutes } from "react-router-dom"
import { routes } from "./routing"

function App() {
  const routing = useRoutes(routes)

  return (
    <div>
      {routing}
    </div>
  );
}

export default App;
