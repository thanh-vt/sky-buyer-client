import React, { ReactElement, useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { AppHeader } from './layout/header/AppHeader';
import { decrement, increment } from './store/counterSlice';
import { RootState } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { initToken } from './store/tokenSlice';

function App(): ReactElement {
  const [title, setTitle] = useState('ThanhVT');
  const setTitleFunc = useCallback(() => {
    setTitle((document.getElementById('titleInput') as HTMLInputElement).value);
  }, []);
  const count = useSelector((state: RootState) => state.counter.value);
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();
  dispatch(initToken());
  return (
    <div className={`App ${theme}`}>
      <AppHeader />
      <div className="App-container">
        <div className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div
            className="bg-danger"
            style={{ width: '500px', height: '1000px' }}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React <br />
            Owner: {title} <br />
            Count: {count}
          </a>

          <input id={'titleInput'} type="text" />
          <button onClick={setTitleFunc}>Set title</button>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
