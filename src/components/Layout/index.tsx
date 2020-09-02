import React from 'react';

import { Grid } from './styles';
import Sidebar from '../Sidebar';

const Layout: React.FC = () => {
  return (
      <Grid>
          <Sidebar />
      </Grid>
  );
}

export default Layout;