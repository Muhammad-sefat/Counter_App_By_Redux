import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./Components/Counter";
import TotalCount from "./Components/TotalCount";
import { decrement, increment } from "./Components/counterSlice";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const total = counters.reduce((sum, count) => sum + count.value, 0);
  console.log(total);

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">Counter App</h1>
      <div className="flex justify-center items-center gap-5">
        {counters.map((counter) => (
          <Counter
            count={counter.value}
            key={counter.id}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <TotalCount total={total} />
      </div>
    </div>
  );
}

export default App;
