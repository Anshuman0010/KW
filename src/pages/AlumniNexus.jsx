import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiStar, FiClock, FiVideo } from 'react-icons/fi';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  color: white;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
`;

const SearchSection = styled.div`
  margin-bottom: 3rem;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const FilterButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: rgba(108, 99, 255, 0.2);
  border: 1px solid #6C63FF;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const AlumniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
`;

const AlumniCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AlumniHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const AlumniAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(108, 99, 255, 0.5);
`;

const AlumniInfo = styled.div`
  flex: 1;
`;

const AlumniName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const AlumniTitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const AlumniCompany = styled.p`
  color: #6C63FF;
  font-size: 0.9rem;
`;

const AlumniStats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BookingButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #6C63FF, #2A0845);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const AlumniNexus = () => {
  const alumniData = [
    {
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4.9,
      sessions: 124,
      hourlyRate: "₹1,500"
    },
    // Add more alumni data...
  ];

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>Alumni Nexus</Title>
          <Subtitle>Connect with KIIT alumni for personalized 1:1 mentorship sessions</Subtitle>
        </Header>

        <SearchSection>
          <SearchBar>
            <SearchInput placeholder="Search by name, role, or company..." />
            <FilterButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FiFilter />
              Filters
            </FilterButton>
          </SearchBar>
        </SearchSection>

        <AlumniGrid>
          {alumniData.map((alumni, index) => (
            <AlumniCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AlumniHeader>
                <AlumniAvatar src={alumni.avatar} alt={alumni.name} />
                <AlumniInfo>
                  <AlumniName>{alumni.name}</AlumniName>
                  <AlumniTitle>{alumni.title}</AlumniTitle>
                  <AlumniCompany>{alumni.company}</AlumniCompany>
                </AlumniInfo>
              </AlumniHeader>
              <AlumniStats>
                <Stat>
                  <FiStar />
                  {alumni.rating}
                </Stat>
                <Stat>
                  <FiClock />
                  {alumni.sessions} sessions
                </Stat>
                <Stat>
                  <FiVideo />
                  {alumni.hourlyRate}/hr
                </Stat>
              </AlumniStats>
              <BookingButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book 1:1 Session
              </BookingButton>
            </AlumniCard>
          ))}
        </AlumniGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AlumniNexus; 