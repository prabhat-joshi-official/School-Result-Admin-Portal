import supabase from '../config/supabase_client';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase
                .from('Credentials')
                .select("*")
                .eq('email', email)
                .eq('password', password)
                .single();
            
            if (error || !data) {
                alert('Login failed. Please check your credentials.');
                console.error('Error during login:', error);
                setLoading(false);
                return;
            }

            console.log('Login successful:', data);

            if (data.name === 'Admin') {
                navigate('/admin-dashboard');
            } else if (data.name === 'Staff') {
                navigate('/staff-dashboard');
            } else {
                alert('Login Successful. But no dashboard assigned.');
            }
        } catch (error) {
            alert('An unexpected error occurred. Please try again later.');
            console.error('Unexpected error:', error);
        } finally {
            setLoading(false);
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
                    <button type="submit" disabled={loading}>
                        {loading ? 'Verifying...' : 'Access Portal!'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;