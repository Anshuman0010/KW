import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import ThemeToggle from './components/ThemeToggle';
import { lightTheme, darkTheme } from './styles/theme';

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
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
