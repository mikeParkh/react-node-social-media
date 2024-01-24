import React, { FC } from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const PROFILE_USERNAME = 'Mike Parkhomenko';

const ProfileHeader: FC = () => (
  <Box display='flex' flexDirection='row' sx={{ paddingBottom: 2, borderBottom: '1px solid grey' }} >
    <Avatar sx={{ width: 168, height: 168 }} />
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'end', paddingBottom: 1, paddingLeft: 2 }}>
      <Typography variant='h3'>{PROFILE_USERNAME}</Typography>
      <Box sx={{ marginLeft: 'auto' }}>
        <Button variant="contained" startIcon={<ChatIcon />}>Messages</Button>
      </Box>
    </Box>
  </Box>
)

export default ProfileHeader