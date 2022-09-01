import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>API_URL: {window._env_.API_URL}</p>
        <p>USE_CATALOG: {window._env_.USE_CATALOG}</p>
        { window._env_.USE_CATALOG === 'true' &&
          <button>
            TEST
          </button>
        }
      </header>
    </div>
  );
}

export default App;
