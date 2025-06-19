import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
  Typography
} from '@mui/material';
import logo from './Logo1.png';

export default function LoginScreen({ onLogin }) {
  const [role, setRole] = useState('ZZP\'er');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ role, email, password });
  };

  return (
    <Box sx={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9FAFB',
      p: 2
    }}>
      <Card sx={{ width: 360, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Box component="img" src={logo} alt="Logo" sx={{ maxWidth: 120 }} />
          </Box>
          <Typography variant="h5" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>Inloggen</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              select
              label="Rol"
              value={role}
              onChange={e => setRole(e.target.value)}
              SelectProps={{ native: true }}
              fullWidth
              sx={{ mb: 2 }}
            >
              <option value="ZZP'er">ZZP’er</option>
              <option value="Opdrachtgever">Opdrachtgever</option>
              <option value="Uitzendbureau">Uitzendbureau</option>
            </TextField>

            <TextField
              label="E-mailadres"
              type="email"
              fullWidth
              sx={{ mb: 2 }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              label="Wachtwoord"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  color="primary"
                />
              }
              label="Ingelogd blijven"
            />

            <Box sx={{ textAlign: 'right', mb: 2 }}>
              <Link href="#" underline="hover" color="secondary">
                Wachtwoord vergeten?
              </Link>
            </Box>

            <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mb: 1 }}>
              Inloggen
            </Button>

            <Typography variant="body2" align="center">
              Nog geen account? <Link href="#">Meld je aan</Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}