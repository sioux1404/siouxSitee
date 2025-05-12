import './App.css';
import Background from './assets/Background.png'; // Import the image
import Header from './Headers'

function App() {
  return (
    <div className="app-container">
      <Header />
      <img src={Background} alt="Background" />
    </div>
  );
}

export default App;
