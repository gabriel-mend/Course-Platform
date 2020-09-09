import React from 'react';

import { Grid } from './styles';
import Sidebar from '../Sidebar';
import Main from '../Main';
import UserInfos from '../UserInfos';

const Layout: React.FC = () => {
  return (
      <Grid>
          <Sidebar />
          <Main />
          <UserInfos />
      </Grid>
  );
}

export default Layout;