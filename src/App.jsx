import "./App.css";
import Counter from "./Components/Counter";
import TotalCount from "./Components/TotalCount";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">Counter App</h1>
      <div className="flex justify-center items-center gap-5">
        <Counter />
        <Counter />
      </div>
      <div className="flex justify-center items-center mt-8">
        <TotalCount />
      </div>
    </div>
  );
}

export default App;
