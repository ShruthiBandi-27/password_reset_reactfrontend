import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forgotpass from './Forgotpass';
import ResetPassword from './ResetPassword';
import Signup from './Signup';
import Login from './Login';
import EmailMsg from './EmailMsg';
import Welcome from './Welcome';
import Navigation from './Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgotpass" element={<Forgotpass/>}/>
          <Route path="/resetpass/:token" element={<ResetPassword/>}/>
          <Route path="/emailmsg" element={<EmailMsg/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
