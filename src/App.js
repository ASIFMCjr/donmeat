import logo from './logo.svg';
import './App.css';
import StartScreen from './screens/StartScreen/StartScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  return (
    <div className="App">
      <div className='main'>
        {/* <StartScreen/> */}
        <LoginScreen/>
        
      </div>
    </div>
  );
}

export default App;
