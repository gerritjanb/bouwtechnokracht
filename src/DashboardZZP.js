import React from 'react';
import { Box, Typography } from '@mui/material';

export default function DashboardZZP() {
  return (
    <Box p={4}>
      <Typography variant="h4" sx={{ color: '#5E2E91', mb: 2 }}>
        ZZP Dashboard
      </Typography>
      <Typography>
        Welkom bij je persoonlijke overzicht. Hier zie je straks projecten, facturatie en je profiel.
      </Typography>
    </Box>
  );
}