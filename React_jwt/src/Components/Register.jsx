


import React, { useState } from 'react';
import { useNavigate } from 'react-router';
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name , setName] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const user = {Id : 0,  Name: name, Email: email, Password: password };
        if( password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        fetch('https://reqres.in/api/register', {
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
                navigate('/Register'); // Redirect to register page on error
                throw new Error('Registration failed');
            }
        })
        .then(data => {
            // Handle successful registration
            console.log('Registration successful:', data);
            navigate('/Login'); // Redirect to home page after registration
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <input
                type="text" 
                placeholder="Full Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
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
            
            <button onClick={handleRegister}>Register</button>
        </div>
    );


}

export default Register;