import './SignUpScreen.css'
const SignUpScreen = () => {
  return (
    <div className="sign_up_screen">
        <form>
           <h1>Sign In</h1>
           <input type="email" placeholder="Email" />
           <input type="email" placeholder="Email" />
           <button type="submit">Sign In</button>

           <h4><span className='signup_gray'>New to Netflix? </span><span className='signUp_link'>Sign Up Now.</span></h4>
        </form>
    </div>
  )
}

export default SignUpScreen
