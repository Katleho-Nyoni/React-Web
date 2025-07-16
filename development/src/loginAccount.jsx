import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { Icon,InlineIcon } from "@iconify/react";
import google from "@iconify-icons/mdi/google" 
import {getAuth, singInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function login() {
    try{
      await singInWithEmailAndPassword(getAuth(),email,password);
      navigate('/datagroup');
    } catch (e) {
      setError(e.message);
    }
  }

  return(
  <>
    <div className="form-parent">
      <div className="login-form">
        <form action="GET">
        <h1>Login</h1>
        {error && <p>{error}</p>}
          <div>
            <input type="email" value={email} onChange={e=> setEmail(e.target.value)} id="email" placeholder=" example@gmail.com" required />
          </div>
          <div>
            <input type="password" value={password} onChange={e=> setPassword(e.target.value)} id="password" placeholder=" Password" required />
          </div>
          
          <div>
              <button type="submit" className="btn login" onClick={login}>Login</button>
              <p><a href="./reset.html">forgot password</a></p>
          </div>
          <div>
              <button className="btn google"><InlineIcon icon={google}/> Continue with Google</button>
              <p>Don't have an Account? <Link to='/a/signup'> Sign Up </Link></p>
          </div>
      
        </form>
      </div>
    </div>
  </>
  )
}