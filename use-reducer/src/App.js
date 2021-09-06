import React,{useState, useReducer} from 'react';
import './App.css';

const reducerFunction = (state, action)=>{
    switch(action.type){
        case 'increment':
          return {
            ...state,
            count: state.count + 1
          }
        
        case 'decrement':
          return {
            ...state,
            count: state.count -1
          }

        case 'initiate':
          return {
            ...state,
            count: action.payload
          }
          
        default:
          return state  
    }
}

const initialState = {
  count: 0
}

function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div className="App">
        <h1>Hello World...</h1>
        <label>Start Count</label>&nbsp;
        <input type='number' value={input} onChange={(e)=> setInput(parseInt(e.target.value))}/>
        <br></br>
        <br/>
        <button onClick={()=> dispatch({type: 'initiate', payload: input})}>Initial Counter</button>

        <div className="content"> 
          <p>{state.count}</p>
          <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
          <button onClick={()=> dispatch({type: 'decrement'})}>Decriment</button>
        </div>
    </div>
  );
}

export default App;
