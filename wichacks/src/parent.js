import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function Parent() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <img src="rex_parent.png" />
        <p className="black_text">
            Hey Parent or Guardian, 
        </p>
        <p className="black_text"> 
            Our goal with Raccoon Rex is to help educate the next generation on the dangers that are present on the internet. 
        </p> 
        <p className="black_text">
            Kidshealth.org tells us, "The Internet can be wonderful for kids. They can use it to research school reports, communicate with teachers and other kids, and play interactive games.
But online access also comes with risks, like inappropriate content, cyberbullying, and online predators. Using apps and websites where kids interact, predators may pose as a child or teen looking to make a new friend. They might prod the child to exchange personal information, such as address and phone number, or encourage kids to call them, seeing their phone number via caller ID.
Parents should be aware of what their kids see and hear on the Internet, who they meet, and what they share about themselves. Talk with your kids, use tools to protect them, and keep an eye on their activities."
         </p>
        
      </header>
    </div>
  );
}

export default Parent;
