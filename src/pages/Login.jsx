import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const PageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  display: flex;
  align-items: stretch;
  overflow: hidden;
  position: fixed;
  inset: 0;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  height: 100%;
  max-width: 50%;

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }
`;

const RightSection = styled.div`
  flex: 1;
  position: relative;
  background: url('https://res.cloudinary.com/dqt4zammn/image/upload/v1739110459/freepik__background__29379_x3ws8t_b_rgb_2A0845_xx4ebh.png') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 50%;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(42, 8, 69, 0.8), rgba(27, 20, 100, 0.4));
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-right: ${props => props.type === 'password' ? '2.5rem' : '1.5rem'};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const LoginButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #2A0845, #6c63ff);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
`;

const BottomText = styled.p`
  color: white;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;

  a {
    color: #6c63ff;
    text-decoration: none;
    margin-left: 0.5rem;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageContainer>
      <LeftSection>
        <FormContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Login</Title>
          <InputGroup>
            <Input type="email" placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <Input 
              type={showPassword ? "text" : "password"}
              placeholder="Password" 
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </PasswordToggle>
          </InputGroup>
          <LoginButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login Now
          </LoginButton>
          <BottomText>
            Don't have an account?
            <Link to="/signup">Sign Up</Link>
          </BottomText>
        </FormContainer>
      </LeftSection>
      <RightSection />
    </PageContainer>
  );
};

export default Login; 