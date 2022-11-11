import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';
import Header from './components/Header'
import Form from './components/Form';
import { ThemeContext, themes } from './providers/theme';
import ApplicationWrapper from './components/ApplicationWrapper/index';

function App() {

  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const [theme, setTheme] = React.useState(themes.light)

  const onUpdatEvent = () => {
    console.log("Hello world");
  }

  const onUpdatEvent2 = (msg) => {
    console.log("Hello " + msg);
  }

  const handleOkayClick = () => {
    console.log('User has clicked the button');
  }

  // synthatic event vs native event (native attribute provided by the react library)
  const handleInputChange = (event) => {
    console.log(event.target.value);
  }

  // passing multiple attributes when handling the events (manage custom attributes)
  const handleInput2Change = (event, name, age, obj) => {
    console.log(event.target.value, age, name, obj);
  }

  const handleLogin = () => {
    setUserLoggedIn(!userLoggedIn);
  }




  // useContext
  const handleClick = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UserProfile company="WSO2" university="Colombo" address={{ zipCode: 12345, city: "colombo" }} school={{ name: "Ananda college" }} onUpdateClick={onUpdatEvent} onUpdateClick2={onUpdatEvent2} />

        <button onClick={handleOkayClick}>Okay</button>
        <button onClick={() => { console.log('User has clicked the cancel button') }}>Cancel</button>

        <br></br>
        <h3>Event Handling</h3>

        <input type="text" onChange={handleInputChange} />
        <input type="text" onChange={(event) => handleInput2Change(event, "Madusanka", 25, {})} />

        <h3>Conditinal Rendering</h3>
        {userLoggedIn && <p>Hello Madusanka</p>}
        <button onClick={handleLogin}>{userLoggedIn ? 'Log Out' : 'Login'}</button>

        <h3>Form Handling</h3>
        <Form />
      </header>

      <h1>Use Context</h1>

      <ThemeContext.Provider value={theme}>
        <ApplicationWrapper>
          <Header />
          <button onClick={handleClick}>Click</button>
        </ApplicationWrapper>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
