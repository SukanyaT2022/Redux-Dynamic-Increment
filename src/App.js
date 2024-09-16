
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, add5Func } from './storeFolder/counterSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
     <p>Result: {count}</p>
     <button onClick={()=>dispatch(decrement())}>-</button>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(add5Func(50))}>Add5</button>
    </div>
  );
}

export default App;
