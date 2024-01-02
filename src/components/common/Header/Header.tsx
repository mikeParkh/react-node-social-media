import React from 'react';
import { Box, AppBar, Toolbar, Badge, IconButton } from '@mui/material';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchField, ProfileDropdown } from 'components';
import { useAppContext } from 'context';

const searchValues = [
  { label: 'Mike Parkhomenko', id: 'searchValues_1' },
  { label: 'Ly Nguen', id: 'searchValues_2' },
  { label: 'Alina Schebetun', id: 'searchValues_3' },
]

const Header = () => {
  const { asideBar } = useAppContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={asideBar.toggleAsideBar}
          >
            <MenuIcon />
          </IconButton>
          <SearchField data={searchValues} keyToSearch='label' />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <ProfileDropdown />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header