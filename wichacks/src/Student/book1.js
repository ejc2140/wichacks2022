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
        <p className='black_text'>
          Clyde knows that they are not allowed to visit any websites without their parents' permission. They want to visit the website that Grace showed them this morning. Grace's parents allow her to visit the webpage. 
          <br></br>
          What should Clyde do?</p>
        <a href="/book2"> <button type="button">Go to their parents and ask if they can go to the website.</button></a>
        <a href="/book2"> <button type="button">Go to the website anyway.</button></a>
        <br></br>
        
      </header>
    </div>
  );
}

export default Book1;
