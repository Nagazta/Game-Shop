import '../Login/Login.css'
import discord from '../../assets/dc.jpg'
import facebook from '../../assets/Fb.png'
import google from '../../assets/Google.jpg'
import twitter from '../../assets/X.jpg'
import { useNavigate } from 'react-router-dom'
export default function LoginForm() {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor= "username">Username<br /></label>
                        <input className="form-input" type="text" id="username" name="username" placeholder='Enter your username' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor= "password">Password<br /></label>
                        <input className="form-input" type="password" id="password" name="password" placeholder='Enter your password' required />
                    </div>
                </form>
                <button className="login-button" type="submit">Login</button>

                <p>Or login using</p>
                <hr className='border'/>
                <div className="social-login">
                    <img className="social-icon" src={discord} alt="Discord" />
                    <img className="social-icon" src={facebook} alt="Facebook" />
                    <img className="social-icon" src={google} alt="Google" />
                    <img className="social-icon" src={twitter} alt="Twitter" />
                </div>
                <p className="register-link" onClick={() => navigate('/register')}>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    )
}