import './App.css';
import Background from './assets/Background.png'; 
import Header from './Headers'
import HotBar from './HotBar';

function App() {
  return (
    <div className="app-container">    
        <Header />  
      <div className="content">
        <HotBar />
      </div>
      <img src={Background} alt="Background" className='TotallBackGround' />
    </div>
  );
}

export default App;
