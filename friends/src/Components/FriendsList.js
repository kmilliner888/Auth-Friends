import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState("");

    useEffect(() => {
        axiosWithAuth()
            .get("/api/friends")
            .then(response => {
                console.log("getFriends response", response);
                setFriends(response.data);
            })
            .catch(error => {
                console.error("error", error);
            })
    }, []);

    const addFriend = newbie => {
        const newPerson = {
            id: Date.now(),
            name: newbie.name,
            age: newbie.age,
            email: newbie.email
        };
        setFriends([...friends, newPerson])
    };

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        axiosWithAuth()
            .post("/api/friends", newFriend)
            .then(response =>{
                console.log('response', response);
                e.preventDefault();
                addFriend(newFriend);
                setNewFriend({name: "", age: "", email: ""})
            })
            .catch(error => {
                console.error('error', error);
            })
        
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
            {friends.map(friend => (
                <div className="friend" key={friend.id}>
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    )
};

export default FriendsList;