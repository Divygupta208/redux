import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const increment = () => {
    dispatch(counterActions.incrementby2()); // Updated action name
  };

  const increase = () => {
    dispatch(counterActions.increase(5));
  };

  const decrement = () => {
    dispatch(counterActions.decrementby2()); // Updated action name
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increment}>+2</button>
      <button onClick={decrement}>-2</button>
      <button onClick={increase}>increase</button>
    </main>
  );
};

export default Counter;
