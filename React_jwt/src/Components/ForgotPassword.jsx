

import React from 'react';
import { useState } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
function ForgotPassword() {
  
    const navigate = useNavigate();
    const location = useLocation();
    const [sent , setSent] = useState(false);
    const [email, setEmail] = useState(location.state?.email);
    const [otp, setOtp] = useState();
    const Checkmail = () => {
        if (!email) {
            alert("Please enter your email");
            return;
        }
        else if (sent) {
            if(!otp) {
                alert("Please enter the OTP");
                    return;
            }
            else if(otp.length !== 6 || isNaN(otp)) {
                alert("Please enter a valid OTP");
                return;
            }
            else {
                const varificaton = { Email: email, Otp: otp };
                fetch('https://reqres.in/api/AuthService/Forgot_Password_otpcheck', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(varificaton),
                })
                .then(response => {
                    if (response.ok) {
                        alert("Otp verified successfully");
                        navigate('/Login'); // Redirect to login page after successful verification
                    } else {
                        navigate('/Login/forgot-password', { state: { email } }); // Redirect to forgot password page on error
                        throw new Error('Failed to verify OTP');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("Failed to verify OTP");
                });
            }
        }
        else{
            const user = { Email: email };
            fetch('https://reqres.in/api/AuthService/Forgot_Password_mailcheck', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            .then(response => {
                if (response.ok) {
                setSent(true);
                alert("Otp sent to your email");
            }
            else {
                throw new Error('Failed to send OTP');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Failed to send OTP");
        });
    }
    }
   return (
   <>
     <h2>Forgot Password</h2>
     <input
       type="email"
       placeholder="Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
     />
     <input 
        type="text"
        placeholder="Enter Otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
     />
     <button
       disabled={!email || (sent && (otp.length !== 6) )}
       className="button"
       onClick={Checkmail}>{sent ? "Verify Otp" : "Send Otp"}</button>
   </>
  );
}

export default ForgotPassword;