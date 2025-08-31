import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            const response = await axios.get('http://localhost:3000/auth/home', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            
            if (response.status === 200) {
                setUser(response.data.user.name);
            } else {
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }
    
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <h1>This is Home Section of {user}
            </h1>
        </div>
    );
}

export default Home;
