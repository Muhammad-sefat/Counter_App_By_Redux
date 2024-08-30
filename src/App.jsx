import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">Counter App</h1>
      <div className="flex justify-center items-center gap-5">
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
