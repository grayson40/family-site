import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Container, Typography } from '@mui/material';

function UserContentList({ user, refresh, setRefresh }) {
    const [userContentList, setUserContentList] = useState([]);

    useEffect(() => {
        const fetchUserContent = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/user-content/', {
                    headers: { 'Authorization': `Token ${user.token}` }
                });
                setUserContentList(response.data);
            } catch (error) {
                console.error('Failed to fetch user content:', error);
            }
        };

        fetchUserContent();
    }, [user.token, refresh]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/user-content/${id}/`, {
                headers: { 'Authorization': `Token ${user.token}` }
            });
            setRefresh(!refresh);
        } catch (error) {
            console.error('Failed to delete user content:', error);
        }
    };

    return (
        <Container>
            {userContentList.map((userContent, index) => (
                <Card key={index} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="body1">{userContent.content}</Typography>
                        <Button onClick={() => handleDelete(userContent.id)}>Delete</Button>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}

export default UserContentList;