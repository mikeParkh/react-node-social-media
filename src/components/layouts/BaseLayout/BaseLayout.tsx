import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header, AsideBar } from 'components';

const BaseLayout: FC = () => (
  <>
    <Header />
    <AsideBar />
    <Container maxWidth="md" sx={{ paddingTop: 2, paddingBottom: 4 }}>
      <Outlet />
    </Container>
  </>
)

export default BaseLayout