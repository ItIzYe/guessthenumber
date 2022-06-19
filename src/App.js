import './App.css';
import Menu from './components/Menu.jsx'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1
        >
          Hello to GuessTheNumber.
        </h1>
        <h3>The Game is easy. There are two Game Modes. Normal Match and Arcade;</h3>
        <p>NORMAL MATCH<br></br>==============<br></br>Each Match has a duration of 10 rounds. If you have more Points than the
          Enemy in the end, 
          you win the Match. You have to guess the Number. The Person which has the higher Number gets +10 Points.</p>
        <p>ARCADE<br></br>==========<br></br>You have 3 Lives. You have to guess a higher Number than your opponent. Each time
          you're lower than
           your opponent, you loose a Live.</p>
        <p onClick={Menu}>Click here</p>
      </header>
    </div>
  );
};

export default App;
