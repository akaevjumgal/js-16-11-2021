import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counter/counterSlice";
import { counterValueSelector } from "../store/counter/counterSelectors";

export default function CounterPage() {
  const counterValue = useSelector(counterValueSelector);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{counterValue}</h2>
      <button onClick={() => dispatch(increment())}>
        increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  )
}