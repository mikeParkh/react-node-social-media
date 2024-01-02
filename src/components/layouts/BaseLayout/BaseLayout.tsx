import React, { FC, ReactNode } from 'react';
import { Container } from '@mui/material';
import { Header, AsideBar } from 'components';

type BaseLayoutProps = {
  children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => (
  <>
    <Header />
    <AsideBar />
    <Container maxWidth="sm" sx={{ paddingTop: 2, paddingBottom: 4 }}>
      {children}
    </Container>
  </>
)

export default BaseLayout