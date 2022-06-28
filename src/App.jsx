import React from 'react';

import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, number: state.number + 1 };
    case ACTION.DECREMENT:
      return { ...state, number: state.number - 1 };
    default:
      throw new Error();
  }
};

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, { number: 0 });

  const incrementNumber = () => {
    dispatch({ type: ACTION.INCREMENT });
  };

  const decrementNumber = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  return (
    <div>
      <h2>Use Reducer App</h2>
      <h1>{state.number}</h1>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decrementNumber}>Decrement</button>
    </div>
  );
}

export default App;
