import React from 'react';

import { Container, InputSearch, NotificationButton, UserSettings, UserProfile} from './styles';
import NotificationIcon from '../../styles/assets/icons/notification-icon.svg';
import UserImg from '../../styles/assets/images/Eu.jpeg';

const UserNavigation: React.FC = () => {
  return (
      <Container>
          <InputSearch />
          <NotificationButton src={NotificationIcon} alt="" />
          <UserSettings>
              <UserProfile src={UserImg} />
          </UserSettings>
      </Container>
  );
}

export default UserNavigation;