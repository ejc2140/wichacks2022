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
            Hey All! <br></br> 
            This page is about the four lovely people who created me.
         </p>
         <p>
            I was created at the Women In Computing Hackathon, WiCHacks!
         </p> 
         <p>
            Be sure to follow me on <a href="https://www.instagram.com/raccoon_rex_loves_int_safety/">Instagram!</a>
         </p> 
         <p className="black_text">
           The team that created me consists of 4 women, Emily Crilley, Kelsey Donovan, Jaime Campanelli, and Alanna Luce.
          </p>
          <p className="black_text">
           <class className="under">Emily Crilley:</class> A 5th year Software Engineering Student, Current WiC Logistics Head. <br></br> Fun Fact: "Whistles like normal."
          </p>
          <p className="black_text">
           <class className="under">Kelsey Donovan:</class> A 4th year Software Engineering Student, Former WiC Outreach Committee Co-Head. <br></br> Fun Fact: She has probably whittled a canoe.
           </p>
          <p className="black_text">
           <class className="under">Jaime Campanelli:</class> A 3rd year Computing Security Student, Current WiC Outreach Committee Head. <br></br> Fun Fact: Hasn't eaten enough play dough.
           </p>
          <p className="black_text">
           <class className="under">Alanna Luce:</class> A 3rd year Computer Science Student, Current WiC Active Member. <br></br> Fun Fact: Occasionally accidently cosplays as a clown. Cannot make balloon animals though :(
         </p>
        
      </header>
    </div>
  );
}

export default About;
