import React from 'react'
import { SwipeableDrawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppContext } from 'context';

const AsideBar = () => {
  const { asideBar } = useAppContext();

  return (
    <SwipeableDrawer
      anchor={'left'}
      open={asideBar.isOpen}
      onClose={asideBar.closeAsideBar}
      onOpen={asideBar.openAsideBar}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={asideBar.closeAsideBar}
        onKeyDown={asideBar.closeAsideBar}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  )
}

export default AsideBar