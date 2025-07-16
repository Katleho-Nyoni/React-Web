import { useState } from "react";
// import {Link, useNavigate} from 'react-router-dom';

// import {getAuth, singInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return(
  <>
    <form action="POST">
      <h1>Login</h1>
      {error && <p>{error}</p>}
        <div>
                {/* <input type="email" value={email} onChange={e=> setEmail{e.target.value}} id="email" placeholder=" example@gmail.com" required /> */}
        </div>
        <div>
                {/* <input type="password" value={password} onChange={e=> setPassword{e.target.value}} id="password" placeholder=" Password" required /> */}
        </div>
        
        <div>
            <button type="submit" className="btn login">Login</button>
            <p><a href="./reset.html">forgot password</a></p>
        </div>
        <div>
            <button className="btn google"><InlineIcon icon={google}/> Continue with Google</button>
            <p>Don't have an Account? <Link to='/signUp'> Sign Up </Link></p>
        </div>
    </form>
  </>
  )
}