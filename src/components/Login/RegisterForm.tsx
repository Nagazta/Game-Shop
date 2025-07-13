import '../Login/Login.css';
export default function RegisterForm() {
    return (
        <div className="login-container">
            <div className="login-form reg">
                <h2>Register</h2>
                <form>
                    <label className='title reg'>Full Name</label>
                     <div className="form-row">
                        <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input className='form-input' type="text" id="lastName" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input className='form-input' type="text" id="firstName" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="middleName">Middle Name (Optional)</label>
                        <input className='form-input' type="text" id="middleName" placeholder="Middle Name" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input className='form-input' type="text" id="username" name="username" placeholder='Enter your username' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className='form-input' type="email" id="email" name="email" placeholder='Enter your email' required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className='form-input' type="password" id="password" name="password" placeholder='Enter your password' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input className='form-input' type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirm your password' required />
                        </div>
                    </div>

                </form>
                <button className="login-button" type="submit">Register</button>

                <p>Or register using</p>
                <hr className='border'/>
                <div className="social-login">
                </div>
                <p className="login-link">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    )
    
}