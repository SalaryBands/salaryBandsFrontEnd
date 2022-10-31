import './styles/styles.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer'
import EmailVerification from './pages/EmailVerification'
import UserFlow from './components/ProfessionalDetails';
import UserPathway from './pages/UserPathway';
import Home from './pages/Home';
import URLVerification from './components/URLVerification';




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

        <Route 
          path="/sessions/create"
          element={<URLVerification />}
          />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
