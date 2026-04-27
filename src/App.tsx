import { MenuItem } from "./components/menu";
import Intersection2 from "./components/pixel-perfect/intersection2";

function App() {
  return (
    <div className="h-screen flex items-center justify-center antialiased font-sans">
      <Intersection2>
        <div className="py-10 px-20 bg-gray-200 dark:bg-gray-800">
          <MenuItem />
        </div>
      </Intersection2>
    </div>
  );
}

export default App;
