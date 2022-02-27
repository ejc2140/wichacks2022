import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function Book1() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>Book 1: The Monsterific Playdate</p>
        <img src="/Book1/book1_part1.jpg" width="700" height="400"/>
        
      </header>
    </div>
  );
}

export default Book1;
