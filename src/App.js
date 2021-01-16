import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Events from './components/Events'
import Members from './components/Memebrs'
import Extra from './components/Extra'

function App() {
  return (

    <div>
      <Header/>
      <Intro/>
      <Events/>
      <Members/>
      <Extra/>

    </div>
  );
}

export default App;