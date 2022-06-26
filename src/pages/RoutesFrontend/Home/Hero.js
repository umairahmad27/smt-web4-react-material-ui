import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

export default function Hero() {
    return (
        <div>
            <h1>Hero Section of Home Page</h1>

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                        <div style={{ height: 200, background: "green" }}></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <div style={{ height: 200, background: "green" }}></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <div style={{ height: 200, background: "green" }}></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <div style={{ height: 200, background: "green" }}></div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
