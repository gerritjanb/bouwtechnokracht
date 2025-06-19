import React from 'react';
import { Box, Typography } from '@mui/material';

export default function DashboardOpdrachtgever() {
  return (
    <Box p={4}>
      <Typography variant="h4" sx={{ color: '#5E2E91', mb: 2 }}>
        Dashboard voor Opdrachtgevers
      </Typography>
      <Typography>
        Hier beheer je projecten, aanvragen en contact met zzp’ers.
      </Typography>
    </Box>
  );
}