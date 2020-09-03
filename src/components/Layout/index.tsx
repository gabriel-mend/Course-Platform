import React from 'react';

import { Grid } from './styles';
import Sidebar from '../Sidebar';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
      <Grid>
          <Sidebar />
          <Main />
      </Grid>
  );
}

export default Layout;