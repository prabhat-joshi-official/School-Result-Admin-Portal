import { useState } from 'react';
import { useNavigate } from 'react-router';
import supabase from '../config/supabase_client';

const Login = () => {
    console.log(supabase);

    const navigate = useNavigate();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@has.com" && password === "admin123") {
            navigate('/dashboard');
            console.log("Login Successful");
        } else if (email === "staff@has.com" || password === "staff123") {
            navigate('/staff-dashboard');
            console.log("Staff Login Successful");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <p>MARKSY!</p>
                    </div>
                    <h1>Welcome Back!</h1>
                    <p>Please enter your credentials to access the portal.</p>
                </div>
                <form onSubmit={handleLogin}>
                    {/* Email Input Field */}
                    <div>
                        <input 
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                    </div>
                    {/* Password Input Field */}
                    <div>
                        <input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
                    </div>
                    {/* Login Button */}
                    <button type="submit">
                        Access Portal!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;