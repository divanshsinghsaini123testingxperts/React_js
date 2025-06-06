import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = () => {
        const user = { Email: email, Password : password };
        const respnse = fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            // Handle successful login
            console.log('Login successful:', data);
            localStorage.setItem('token', data.token); // Store token in localStorage
            navigate('/'); // Redirect to home page after login
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    };

    return (
        <div className="login-container">
        <h2>Login</h2>
        <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => navigate('/Register')}>Register</button>
        <button onClick={() => navigate('/Login/forgot-password' ,{State : {email}})}>Forgot Password</button>
        </div>
    );

}
export default Login;