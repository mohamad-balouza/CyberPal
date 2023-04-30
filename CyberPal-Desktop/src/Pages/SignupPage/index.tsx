import React from 'react';
import Navbar from 'Components/Navbar';
import './index.css'
import SignupBlock from 'Components/SignupBlock';
        
function SignupPage() {
  return (
    <div className='login-page'>
        <Navbar />
        <SignupBlock />
    </div>
  )
}

export default SignupPage