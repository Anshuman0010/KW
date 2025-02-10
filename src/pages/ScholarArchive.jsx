import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBook, FiFileText, FiFilter, FiDownload } from 'react-icons/fi';

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

const FiltersSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  
  option {
    background: #2A0845;
    color: white;
  }
`;

const ContentTypeToggle = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const ToggleButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.active ? 'rgba(108, 99, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${props => props.active ? '#6C63FF' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
`;

const ResourceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ResourceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ResourceTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
`;

const ResourceMeta = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const DownloadButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #6C63FF, #2A0845);
  border: none;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 600;
`;

const ScholarArchive = () => {
  const [contentType, setContentType] = useState('notes');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  const branches = [
    'Computer Science',
    'Information Technology',
    'Electronics & Communication',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>Scholar's Archive</Title>
          <Subtitle>Access study materials and previous year questions for all branches and semesters</Subtitle>
        </Header>

        <FiltersSection>
          <FilterGroup>
            <FilterLabel>Branch</FilterLabel>
            <Select 
              value={selectedBranch} 
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="">Select Branch</option>
              {branches.map(branch => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </Select>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Semester</FilterLabel>
            <Select 
              value={selectedSemester} 
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="">Select Semester</option>
              {semesters.map(sem => (
                <option key={sem} value={sem}>Semester {sem}</option>
              ))}
            </Select>
          </FilterGroup>
        </FiltersSection>

        <ContentTypeToggle>
          <ToggleButton
            active={contentType === 'notes'}
            onClick={() => setContentType('notes')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiBook />
            Notes
          </ToggleButton>
          <ToggleButton
            active={contentType === 'pyq'}
            onClick={() => setContentType('pyq')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiFileText />
            Previous Year Questions
          </ToggleButton>
        </ContentTypeToggle>

        <ResourceGrid>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <ResourceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ResourceHeader>
                <ResourceTitle>
                  {contentType === 'notes' ? 'Data Structures Notes' : 'Data Structures 2023 Question Paper'}
                </ResourceTitle>
              </ResourceHeader>
              <ResourceMeta>
                Computer Science • Semester 3
              </ResourceMeta>
              <DownloadButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload />
                Download
              </DownloadButton>
            </ResourceCard>
          ))}
        </ResourceGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ScholarArchive; 