import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <title>Raccoon Rex’s Library of Internet Safety</title>
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>Click on the side menu to get started! </p>
        <img src="rex_quote.png" />
        <p>Join Raccoon Rex on his journey to helping his friends be internet safe!</p>
      </header>
    </div>
  );
}

export default App;
