import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function About() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <img src="rex_about.png" />
        <p>
            About :)
         </p>
        
      </header>
    </div>
  );
}

export default About;
