import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setByAmount } from "../store/counter/counterSlice";
import { counterValueSelector } from "../store/counter/counterSelectors";

export default function CounterPage() {
  const counterValue = useSelector(counterValueSelector);
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(setByAmount(e.target.value));
  }

  return (
    <div>
      <input data-testid="counter-input" type="number" value={counterValue} onChange={onChange} />
      <h2 data-testid="counter-value">{counterValue}</h2>
      <button data-testid="increment-btn" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button data-testid="decrement-btn" onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  )
}