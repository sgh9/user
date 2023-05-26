import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import Container from '../components/Container';
import AddIcon from '../assests/add-square-svgrepo-com.svg';
const API_URL = "https://jsonplaceholder.typicode.com/users";

const User = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [activeUsers, setActiveUsers] = useState([]);

    useEffect(()=> {
        getUsers();
    },[]);

    useEffect(()=> {
        const newActiveUsers = users.slice(0, 3);
        setActiveUsers(newActiveUsers);
    },[users])

    const getUsers = async() => {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const users = await response.json(); 
            setUsers(users);
            console.log({ users })
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

    }

    const closeUser = (id)=> {
        const newActiveUsers = activeUsers.filter(user =>user.id !== id);
        setActiveUsers(newActiveUsers);
    }

    const addUsers = ()=> {
        const index = activeUsers.length;
        const userExist = activeUsers.find(user => user.id === users[index].id);

        if(index < users.length ) {
            let newActiveUsers = [];
            if(userExist !== - 1) {
                newActiveUsers = [...activeUsers, users[index]];
            } else {
                newActiveUsers = [...activeUsers, users[index + 1]];
            }
            setActiveUsers(newActiveUsers);
        }
    }
    
    if(loading) return <p>Loading...</p>;

    const activeUsersCount = activeUsers.length;

    return (
        <Container>
        
            <h2 className='user-title'>Users</h2> 
            <div className='users'> 
                { 
                activeUsers.length > 0 && activeUsers.map(user =>{
                        return (
                         <UserCard 
                            key={user.id} 
                            user={user}
                            closeUser={closeUser}
                            activeUsers={activeUsersCount}
                        />
                        )
                    })
                }
                
            </div>
            <div className='add_users'>
                <h4>Add users:</h4>
                <button className='add-btn' onClick={addUsers}>
                    <img src={AddIcon} alt={"ADD"} width={"100%"}/>
                </button>
                
            </div>
        </Container>
    )
}

export default User