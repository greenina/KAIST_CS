import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Events from './components/Events'
import Members from './components/Memebrs'

function App() {
  return (
    <div>
      <Header/>
      <Intro/>
      <Events/>
      <Members/>
    </div>
  );
}

export default App;
