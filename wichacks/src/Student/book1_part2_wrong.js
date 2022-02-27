import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function Book1_Part2_Wrong() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>Book 1: The Monsterific Playdate</p>
        <img src="/Book1/book1_part2_wrong.jpg" width="700" height="400"/>
        <p className='black_text'>
          Did Clyde make the right decision?
          <br></br>
          </p>
        <a href="/book1_recap_wrong"> <button className='button' type="button">Yes</button></a>
        <a href="/book1_recap_wrong"> <button className='button' type="button">No</button></a>
        <br></br>
        <a className='black_text' href="/book1"> Click Here To Go Back To Part 1</a>
        <br></br>
        
      </header>
    </div>
  );
}

export default Book1_Part2_Wrong;
