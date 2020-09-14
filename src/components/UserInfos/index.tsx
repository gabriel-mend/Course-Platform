import React from 'react';

import { Container } from './styles';
import UserNavigation from '../UserNavigation';
import StatsBoxes from '../StatsBoxes';

const UserInfos: React.FC = () => {
  return (
      <Container>
          <UserNavigation />
          <StatsBoxes coursesCompleted={11} coursesInProgress={4} />
      </Container>
  );
}

export default UserInfos;