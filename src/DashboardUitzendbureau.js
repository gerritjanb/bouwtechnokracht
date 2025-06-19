import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';

export default function DashboardUitzendbureau() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
        Lopende Projecten
      </Typography>
      <Grid container spacing={3}>
        {[
          { title: 'Nieuwbouw Almere', client: 'Bouwen & Co', location: 'Almere', status: 'Lopend', color: '#FF8200' },
          { title: 'Renovatie Zwolle', client: 'Renovatiegroep', location: 'Zwolle', status: 'In voorbereiding', color: '#5E2E91' },
          { title: 'Onderhoud Groningen', client: 'Elk', location: 'Groningen', status: 'Start volgende week', color: '#000000' },
        ].map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ borderLeft: `5px solid ${p.color}`, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2">Opdrachtgever: {p.client}</Typography>
                <Typography variant="body2">Locatie: {p.location}</Typography>
                <Typography variant="body2">Status: {p.status}</Typography>
                <Button variant="outlined" size="small" sx={{ mt: 2 }}>Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}