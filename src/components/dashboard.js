import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState('Loading...');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found. Redirecting to login.');
      setTimeout(() => navigate('/login'), 1000);
      return;
    }

    const fetchUser = async () => {
      try {
        console.log('Fetching user with token:', token.substring(0, 20) + '...'); // Temp log (partial token)
        const res = await axios.get('http://localhost:5000/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data.user);
        setMsg(`Welcome, ${res.data.user.email}!`);
        setError('');
      } catch (err) {
        console.error('Dashboard fetch error:', err.response?.data || err.message); // Log full error
        setError(`Error: ${err.response?.data.msg || 'Failed to fetch user'}`);
        localStorage.removeItem('token');
        setTimeout(() => navigate('/login'), 2000);
      }
    };

    fetchUser();
  }, [navigate]);

  if (error) return <div><p>{error}</p><p>Redirecting...</p></div>;
  if (!user) return <div><p>{msg}</p></div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{msg}</p>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default Dashboard;
