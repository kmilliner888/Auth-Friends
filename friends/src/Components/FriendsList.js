import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState();

    useEffect(() => {
        axiosWithAuth()
            .get("/api/friends")
            .then(response => {
                console.log("getFriends response", response);
            })
            .catch(error => {
                console.error("error", error);
            })
    }, []);

    return (
        <div>
            Hey You Made It!
        </div>
    )
};

export default FriendsList;