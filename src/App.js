import './styles/styles.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header";
import EmailVerification from './pages/EmailVerification'
import UserFlow from './components/ProfessionalDetails';
import UserPathway from './pages/UserPathway';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

        <Route exact path='/'
        element={<Home />}
        />
        <Route
          path="/EmailVerification"
          element={<EmailVerification />}
        />

        <Route
          path="/UserPathway"
          element={<UserPathway />}
        />

      </Routes>
      <Link to={'/UserPathway'}>
        <button type="button" className='salaryButton'>UserFlow</button>
      </Link>
    </div>
  );
}

export default App;
