import React from 'react';
import {
  Drawer, Toolbar, Box, List,
  ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon    from '@mui/icons-material/People';
import WorkIcon      from '@mui/icons-material/Work';
import logo          from './Logo1.png';

const drawerWidth = 220;

export default function BerrySidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth, flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(90deg, #5E2E91 70%, #FF8200 100%)',
          color: 'white',
        },
      }}
    >
      <Toolbar>
        <Box sx={{
          width: '100%', display: 'flex',
          justifyContent: 'center', py: 2
        }}>
          <img src={logo} alt="Logo" style={{ height: 48 }} />
        </Box>
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Mijn ZZP’ers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Projecten" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}