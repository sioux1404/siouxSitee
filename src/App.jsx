import './App.css';
import Background from './assets/Background.png'; 
import Header from './Headers'
import HotBar from './HotBar';

function App() {
  return (
    <div className="app-container">      
      <div className="content">
        <Header />
        <HotBar />
      </div>
      <img src={Background} alt="Background" className='TotallBackGround' />
    </div>
  );
}

export default App;
