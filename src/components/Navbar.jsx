import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = styled(motion.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  background: ${props => props.scrolled ? 'rgba(42, 8, 69, 0.85)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  flex-shrink: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  opacity: 0.9;
  letter-spacing: 0.3px;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: #6C63FF;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    width: 100%;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
`;

const AuthButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.login {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
  
  &.signup {
    background: #6C63FF;
    border: none;
    color: white;
    box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(108, 99, 255, 0.4);
    }
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          KIITWALLAH
        </Logo>
        <NavLinks>
          {["Scholar's Archive", 'Career Elevate', 'Alumni Nexus', 'Affinity Circle'].map((item, index) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>
        <AuthButtons>
          <AuthButton
            className="login"
            as={Link}
            to="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </AuthButton>
          <AuthButton
            className="signup"
            as={Link}
            to="/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </AuthButton>
        </AuthButtons>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 