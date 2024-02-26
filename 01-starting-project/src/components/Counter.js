import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const increment = () => {
    dispatch({ type: "incrementby2" });
  };

  const decrement = () => {
    dispatch({ type: "decrementby2" });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increment}>+2</button>
      <button onClick={decrement}>-2</button>
    </main>
  );
};

export default Counter;
