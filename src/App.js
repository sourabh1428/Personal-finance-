
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css';
import SignUp from './Auth/SignUp';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
      </Routes>

    </Router>

  );
}

export default App;
