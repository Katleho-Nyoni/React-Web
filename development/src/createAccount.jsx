import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    
    async function SignUp() {
        if (password !== confirmPassword){
            setEmail('Password & Confirm Password don\'t match!');
            return;
        }


        try{
          await createUserWithEmailAndPassword(getAuth(),email,password);
          navigate('/datagroup');
        } catch (e) {
          setError(e.message);
        }
    }

  return(
    <>
    <div className='form-parent'>
        <div className='signup-form'>
            <form method="POST">
            <h1>Sign Up</h1>
            {error && <p>{error}</p>}
        <div class="signup-email">
            <input type="email" value={email} id="email" placeholder=" Your email" onChange={e=> setEmail(e.target.value)} required />
        </div>
        <div class="signup-password">
            <input type="password" value={password} id="user-password" placeholder=" Password" onChange={e=> setPassword(e.target.value)} required />
        </div>
        <div class="confirm-password">
            <input type="password" value={confirmPassword} id="confirm-password" placeholder=" Confirm Password" onChange={e=> setConfirmPassword(e.target.value)} required />
        </div>
        <div>
            <button type="submit" class="btn create-account" onClick={SignUp}>Create Account</button>
        </div>
        <div>
            <p>Have an account?<Link to='/a/login'> Login </Link> </p>
        </div>
        </form>
        </div>
    </div>
    </>
  );
}   