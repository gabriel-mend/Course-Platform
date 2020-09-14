import React from 'react';

import { 
    Container, 
    InputSearch,
    NotificationButton, 
    UserSettings, 
    UserProfile
} from './styles';
import NotificationIcon from '../../styles/assets/icons/notification-icon.svg';
import UserImg from '../../styles/assets/images/Eu.jpeg';
import DropIcon from '../../styles/assets/icons/drop-icon.svg';

const UserNavigation: React.FC = () => {
  return (
      <Container>
          <InputSearch />
          <NotificationButton src={NotificationIcon} alt="" />
          <UserSettings>
              <UserProfile src={UserImg} />
              <img src={DropIcon} alt=""/>
          </UserSettings>
      </Container>
  );
}

export default UserNavigation;