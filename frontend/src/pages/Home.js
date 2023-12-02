import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, Typography, Button, Container, Link
} from '@mui/material';

const Home = ({ user, onLogout }) => {
    const handleLogout = () => {
        onLogout();
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome, {user.username}
                    </Typography>
                    <Link component={RouterLink} to="/profile" color="inherit" sx={{ marginRight: 2 }}>
                        Profile
                    </Link>
                    <Link component={RouterLink} to="/settings" color="inherit" sx={{ marginRight: 2 }}>
                        Settings
                    </Link>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom component="div" sx={{ marginTop: 2 }}>
                    Home Page
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Welcome to your dashboard, {user.username}!
                </Typography>
                {/* Add more content here */}
            </Container>
        </Box>
    );
};

export default Home;
