import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './views/Login';
import Profile from './views/Profile';
import Translation from './views/Translation';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App-container">
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login/> }/>
          <Route path="/translation" element={ <Translation/> }/>
          <Route path="/profile" element={ <Profile/> }/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
