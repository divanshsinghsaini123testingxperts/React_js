


import {React , useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPass.css'; // Assuming you have a CSS file for styling

const NewPass = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const handlepass = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const user = { Email: email, Password: password };
        fetch('https://localhost:7109/api/AuthService/SetNewPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            if (response.ok) {
                alert("Password updated successfully");
                navigate('/Login' ,{state: { email }}); // Redirect to login page after successful update
            } else {
                throw new Error('Failed to update password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Failed to update password");
        });
    };
  return (
    <div className="new-pass">
      <h2>Set New Password</h2>
      <form>
        <input type="Text" id='email' name='email' required placeholder='Email' />
        <input placeholder="New_password" type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <input placeholder="Confirm_password" type="password" id="confirm-password" name="confirm-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {password !== confirmPassword && <p className="error-message">Passwords do not match</p>}
        <button  onClick={(e) => (handlepass)} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPass;