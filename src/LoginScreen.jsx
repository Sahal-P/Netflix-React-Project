import { useState } from 'react'
import './LoginScreen.css'
import Background from '/Background.jpg'
import NetflixLogo from '/NetflixLogo.png'
import   SignUpScreen from "./SignUpScreen";
export const LoginScreen = () => {
    const [signUp, setSignUp] = useState(false)

  return (
    <div className='login_screen' style={{backgroundImage:`url(${Background})`}}>
        <div className="login_background">
            <img className='login_screen_logo' src={NetflixLogo} alt="" />
            <button onClick={()=>setSignUp(!signUp)} className="login_screen_button">
                {signUp? "Sign In":"Sign Up"}
            </button>
            <div className="login_screen_gradient"/>
        </div>
        <div className="login_screen_body">
            {signUp?(<SignUpScreen/>):(
                <>
                <h1>Unlimited films, TV programs and more.</h1>
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
    
                <div className="login_screen_input">
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button onClick={()=>setSignUp(!signUp)} className='login_screen_getStarted'>GET STARTED</button>
                    </form>
                </div>
                </>
            )}
            
        </div>
    </div>
 
    
  )
}
