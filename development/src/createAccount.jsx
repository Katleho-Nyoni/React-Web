export default function SignUp(){
  return(
    <>
       <form method="POST">
        <div class="conditions">
            <h1>Create Account</h1>
            
        </div>
        <div class="signup-email">
            <input type="email" name="" id="email" placeholder=" Your email" required />
        </div>
        <div class="signup-password">
            <input type="password" name="" id="user-password" placeholder=" Password" required />
        </div>
        <div class="confirm-password">
            <input type="password" name="" id="confirm-password" placeholder=" Confirm Password" required />
        </div>
        <div>
            <button type="submit" class="btn create-account">Create Account</button>
        </div>
        <div>
            <p>Have an account? <a href="./signin.html">Login </a></p>
        </div>
    </form>
    </>
  );
}