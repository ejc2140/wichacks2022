import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function student() {
  return (

    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <p>
            Select a Comic below to get started! 
         </p>
        
      </header>
    </div>
  );
}

export default student;