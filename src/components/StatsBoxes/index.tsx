import React from 'react';

import { Container, StatsBox, StatsNumber } from './styles';

interface StatsProps {
    coursesCompleted?: number;
    coursesInProgress?: number;
}
const StatsBoxes: React.FC<StatsProps> = ({
    coursesCompleted,
    coursesInProgress
}) => {
  return (
      <Container>
          <StatsBox>
            <StatsNumber>
                {coursesCompleted}
            </StatsNumber>
            <p>Courses<br/>completed</p>
          </StatsBox>
          <StatsBox>
            <StatsNumber>
                {coursesInProgress}
            </StatsNumber>
                <p>Courses<br />in progress</p>
          </StatsBox>
      </Container>
  );
}

export default StatsBoxes;