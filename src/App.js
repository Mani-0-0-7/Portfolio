import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Skill from './Components/Skill/Skill';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Resume/>
      <Portfolio/>

    </div>
  );
}

export default App;
