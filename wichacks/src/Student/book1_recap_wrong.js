import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function Book1_Recap_Wrong() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>Book 1: The Monsterific Playdate Recap</p>
        <img src="rex_good_job.png" />
        <p className="black_text">
          Our friend Clyde had quite the dilemma! Clyde knows now that they should never visit a webpage without permission. 
          <br></br>
          Now that you are an online safety whiz always remember to ask your parents for permission to go to a website before you visit!
        </p>


        
      </header>
    </div>
  );
}

export default Book1_Recap_Wrong;
