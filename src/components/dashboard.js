import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import React from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();



  const fetchUser =async()=>{
    try{
        const res=await axios.get("http://localhost:5000/me",{headers: {Authorization: `Bearer ${token}`}});
        setUser(res.data.user);
    }catch(err){
        setMsg('Session expired. Please login again.');
        localStorage.removeItem('token');
    }

  }
  return (
    <div>
      
    </div>
  )
}
