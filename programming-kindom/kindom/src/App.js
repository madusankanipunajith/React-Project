import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {

  const onUpdatEvent = () => {
    console.log("Hello world");
  }

  const onUpdatEvent2 = (msg) => {
    console.log("Hello " + msg);
  }

  const handleOkayClick = () => {
    console.log('User has clicked the button');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UserProfile company="WSO2" university="Colombo" address={{ zipCode: 12345, city: "colombo" }} school={{ name: "Ananda college" }} onUpdateClick={onUpdatEvent} onUpdateClick2={onUpdatEvent2} />
      
        <button onClick={handleOkayClick}>Okay</button>
      
      </header>


    </div>
  );
}

export default App;
