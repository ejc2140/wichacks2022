import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../Sidebar';

function student() {
  return (

    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <img src="rex_student.png" />
        <br></br>
        <a href="/book1"> <img src="rex_book1.png"/></a>
        <br></br>
        <a href="/book2"> <img src="rex_book2.png"/></a>
      </header>
    </div>
  );
}

export default student;