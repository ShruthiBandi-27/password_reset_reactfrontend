import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forgotpass from './Forgotpass';
import ResetPassword from './ResetPassword';
import Signup from './Signup';
import Login from './Login';
import EmailMsg from './EmailMsg';
import Welcome from './Welcome';
import Navigation from './Navigation';
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';
import { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState("");
  const [shortenLink, setShortenLink] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation user={user} setUser={setUser} setShortenLink={setShortenLink}/>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/forgotpass" element={<Forgotpass/>}/>
          <Route path="/resetpass/:token" element={<ResetPassword/>}/>
          <Route path="/emailmsg" element={<EmailMsg/>}/>
          <Route path="/welcome/:token" element={<Welcome setInputValue={setInputValue} setUser={setUser}/>}/>
        </Routes>
      </BrowserRouter>
      <BackgroundAnimate/>
      <LinkResult inputValue= {inputValue} shortenLink={shortenLink} setShortenLink={setShortenLink}/>

    </div>
  );
}

export default App;
