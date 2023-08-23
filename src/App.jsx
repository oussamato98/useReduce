import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// useReduce with a state is a simple variable

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 };
    case 'Decrement':
      return { count: state.count - 1 };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: 'Increment' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Decrement' });
        }}
      >
        Decrement
      </button>{' '}
    </div>
  );
}

export default App;

// useReduce with  state is a an object

// const initialState = { count: 0, isActive: false };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     case 'TOGGLE_ACTIVE':
//       return { ...state, isActive: !state.isActive };
//     default:
//       return state;
//   }
// };
