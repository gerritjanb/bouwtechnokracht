import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import BerryLayout from './BerryLayout';
import LoginScreen from './LoginScreen';
import DashboardUitzendbureau from './DashboardUitzendbureau';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = ({ email, password, role }) => {
    // TODO: hier echte auth-logica, nu gewoon dummy:
    if (email && password) {
      setUser({ email, role });
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {user
        ? (
          <BerryLayout user={user} onLogout={handleLogout}>
            <DashboardUitzendbureau />
          </BerryLayout>
        )
        : <LoginScreen onLogin={handleLogin} />
      }
    </ThemeProvider>
  );
}