import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Button,
  useTheme
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';
import logo from './Logo1.png'; // of je eigen logo-bestand, import hier

const drawerWidth = 240;

export default function BerryLayout({ children }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            borderRight: 'none'
          },
        }}
      >
        <Toolbar sx={{ justifyContent: 'center', py: 2 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ maxWidth: '140px' }} />
        </Toolbar>
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: "Mijn ZZP'ers", icon: <PeopleIcon /> },
            { text: 'Projecten', icon: <WorkIcon /> },
          ].map(({ text, icon }) => (
            <ListItem button key={text}>
              <ListItemIcon sx={{ color: '#fff' }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main area */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Topbar */}
        <AppBar position="fixed" sx={{
          ml: `${drawerWidth}px`,
          bgcolor: '#fff',
          color: theme.palette.primary.main,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`
        }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Kraqt Uitzendbureau
            </Typography>
            <IconButton color="inherit"><NotificationsIcon /></IconButton>
            <Avatar sx={{ bgcolor: theme.palette.primary.main, ml: 2 }}>GJ</Avatar>
            <Button variant="outlined" sx={{ ml: 2, borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
              Uitloggen
            </Button>
          </Toolbar>
        </AppBar>

        <Toolbar /> {/* spacer */}
        <Box component="main" sx={{ p: 3, ml: `${drawerWidth}px` }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}