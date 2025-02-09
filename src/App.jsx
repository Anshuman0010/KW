import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import ThemeToggle from './components/ThemeToggle';
import { lightTheme, darkTheme } from './styles/theme';
import LearnHub from './pages/LearnHub';
import CareerBoost from './pages/CareerBoost';
import CampusCareers from './pages/CampusCareers';
import StudentHub from './pages/StudentHub';
import MonthlyVisits from './pages/MonthlyVisits';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div>
          <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
          <Navbar isDark={isDark} />
          <Routes>
            <Route path="/" element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
            <Route path="/monthly-visits" element={<MonthlyVisits />} />
            <Route path="/learn-hub" element={<LearnHub />} />
            <Route path="/career-boost" element={<CareerBoost />} />
            <Route path="/campus-careers" element={<CampusCareers />} />
            <Route path="/student-hub" element={<StudentHub />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
