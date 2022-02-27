import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function Educator() {
  return (

    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <img src="rex_educator.png" />
        <p className="black_text">
            Hi Educator! 

            Know nothing about how to teach internet safety? Then you’ve come to the right place! Our goal with our comic book series
             is to teach the following lessons when it comes to kids being safe on the internet. 
         </p>

         <ul className="black_text">
              <li>Don’t talk to anyone online </li>
              <li>Never agree to get together in person with someone you met online</li>
              <li>Only visit websites that your parents or teachers give you permission to</li>
              <li>Don’t give anyone your password or username</li>
              <li>Use only a screen name, not your real name</li>
              <li>Never give any personal information to anyone online</li>
              <li>Don’t buy anything online</li>
              <li>Don’t click any ads or pop ups EVER</li>
              <li>If you see anything online that makes you feel uncomfortable, tell a teacher or parent</li>
        </ul>
        
      </header>
    </div>
  );
}

export default Educator;