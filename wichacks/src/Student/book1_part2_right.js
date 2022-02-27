import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function Book1_Part2_Right() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>Book 1: The Monsterific Playdate</p>
        <img src="/Book1/book1_part2_right.jpg" width="700" height="400"/>
        <p className='black_text'>
          Question 2 
          <br></br>
          What should Clyde do?</p>
        <a href="/book2"> <button type="button">Option 1</button></a>
        <a href="/book2"> <button type="button">Option 2</button></a>
        <br></br>
        
      </header>
    </div>
  );
}

export default Book1_Part2_Right;
