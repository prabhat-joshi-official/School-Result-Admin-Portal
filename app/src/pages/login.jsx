import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {

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
        <>
            <h1>Welcome to the Login Page!</h1>
        </>
    )
}

export default Login;