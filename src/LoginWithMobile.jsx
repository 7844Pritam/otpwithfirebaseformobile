import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase';

const OTPLogin = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOtp = async () => {
    try {
      // Initialize reCAPTCHA verifier if not already initialized
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
          size: 'invisible',
          callback: (response) => {
            console.log('reCAPTCHA solved:', response);
          },
        });
      }
  
      const appVerifier = window.recaptchaVerifier;
  
      const phoneNumber = phone;  // Replace with your hardcoded phone number
  
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      alert('OTP sent');
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      alert('Error: ' + error.message);
    }
  };
  

  const verifyOtp = async () => {
    if (!confirmationResult) return alert('Please request OTP first');

    try {
      const result = await confirmationResult.confirm(otp);
      alert('Phone verified!');
      console.log('User:', result.user);
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <h3>Phone Login</h3>
      <input
        type="text"
        placeholder="Enter phone number with country code"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
      <div id="recaptcha"></div>

      <br /><br />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OTPLogin;