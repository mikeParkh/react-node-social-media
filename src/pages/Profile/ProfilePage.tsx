import React, { FC } from 'react';
import { Box } from '@mui/material';
import { ProfileHeader } from './components';

const ProfilePage: FC = () => (
  <>
    <ProfileHeader />
    <Box sx={{ paddingTop: 2 }}>
      Profile
    </Box>
  </>
)

export default ProfilePage