import React from "react";

const Profile = ({ user }) => {
    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
        </div>
    );
};

export default Profile;