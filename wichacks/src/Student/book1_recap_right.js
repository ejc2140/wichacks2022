import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function Book1_Recap_Right() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>Book 1: The Monsterific Playdate Recap</p>
        <img src="rex_good_job.png" />
        <p className="black_text">
          Our friend Clyde had quite the dilemma! Thankfully they had you- an online safety whiz- to help them make the right choice! Clyde will always get permission from their parents before going to a webpage!
          <br></br>
          Always remember to ask your parents for permission to go to a website before you visit.
        </p>

        
      </header>
    </div>
  );
}

export default Book1_Recap_Right;
