import React from 'react';

import { Container } from './styles';
import UserNavigation from '../UserNavigation';
import StatsBoxes from '../StatsBoxes';
import PremiumBanner from '../PremiumBanner';

const UserInfos: React.FC = () => {
  return (
      <Container>
          <UserNavigation />
          <StatsBoxes 
            coursesCompleted={11} 
            coursesInProgress={4}
          />
          <PremiumBanner 
            price={9.99}
          />
      </Container>
  );
}

export default UserInfos;