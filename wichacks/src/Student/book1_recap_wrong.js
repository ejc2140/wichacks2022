import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function Book1_Recap_Wrong() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>Book 1: The Monsterific Playdate</p>
        You made both the right choices!
        
      </header>
    </div>
  );
}

export default Book1_Recap_Wrong;
