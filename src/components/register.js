import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const res=await axios.post('http://localhost:5000/register',{email,password});
        setMsg("Registration successfully");
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');

    }catch(err){
        setMsg(err.response?.data.msg || 'Error');
    }
  }

  return (
    <div>
      <h2>Registeration page</h2>


      <form onSubmit={handleSubmit}>
       <input type="email" placeholder='Enter email..' value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
       <br />
        <input type="password" placeholder='Password..' value={password}  onChange={(e)=>setPassword(e.target.value)} required/>
      <br />
      <button type='submit'>Register</button>
      </form>
      {msg &&  <p>{msg}</p>  }
    </div>
  )
}
export default Register;



