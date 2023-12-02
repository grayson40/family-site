// Add to your existing imports
import { useState } from 'react';
import { Paper, TextField, Button, Typography, Container } from '@mui/material';

// New component for content upload
const Profile = ({ user }) => {
    const [content, setContent] = useState('');

    const handleUpload = async () => {
        console.log("user.id: ", user)
        const response = await fetch('http://localhost:8000/api/user-content/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${user.token}`
            },
            body: JSON.stringify({ content: content, user: user.id }),
        });
    
        if (response.ok) {
            console.log('Content uploaded successfully');
            setContent('');
        } else {
            console.error('Failed to upload content');
        }
    };
    

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: 16 }}>
                <Typography variant="h6">Upload Content</Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    label="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleUpload}>
                    Upload
                </Button>
            </Paper>
        </Container>
    );
};

// Update the Home component to include the new route link
// ...

export default Profile;
