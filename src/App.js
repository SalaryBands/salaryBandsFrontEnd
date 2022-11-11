import './styles/styles.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer'
import EmailVerification from './pages/EmailVerification'
import UserFlow from './components/ProfessionalDetails';
import UserPathway from './pages/UserPathway';
import Home from './pages/Home';
import URLVerification from './components/URLVerification';
import TipsAndAdvice from './pages/TipsAndAdvice';
import SalaryData from './components/SalaryData';
import AllData from './pages/AllData';
import Resources from './pages/Resources';
 




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

        <Route
          path="/AllData"
          element={<AllData />}
        />
        
        <Route
          path="/tipsandadvice"
          element={<TipsAndAdvice />}
        />

        <Route
          path="/Resources"
          element={<Resources />}
        />

        <Route
          path="/AboutUs"
          element={<Resources />}
        />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
