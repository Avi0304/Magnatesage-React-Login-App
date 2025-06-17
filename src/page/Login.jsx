import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLastPage } from '../utils';
import { Paper, TextField, Typography, Button, Divider, InputAdornment, IconButton } from '@mui/material';
import { User, Lock, EyeOff, Eye } from 'lucide-react';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, seterror] = useState('');
    const navigate = useNavigate();

    //Handle Login for Test Credentials Only
    const handleLogin = () => {
        seterror('');
        if (user === 'admin' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate(getLastPage());
        }
        else {
            seterror("Invalid Credentials. Please Use the test account: admin / password")
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center px-4">
            <Paper elevation={8} className="w-full max-w-md p-10 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4">
                        <User className="h-8 w-8" />
                    </div>
                    <Typography variant="h4" className="text-gray-800 mb-2" sx={{ fontWeight: 600 }}>
                        Welcome Back
                    </Typography>
                    <Typography variant="body1" className="text-gray-600" sx={{ fontWeight: 400 }}>
                        Sign in to continue
                    </Typography>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <TextField
                        label="Username"
                        fullWidth
                        variant="outlined"
                        value={user}
                        margin='dense'
                        onChange={(e) => setUser(e.target.value)}
                        InputProps={{
                            className: 'rounded-xl bg-white',
                            startAdornment: (
                                <InputAdornment position="start">
                                    <User className="w-5 h-5 text-gray-500" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        variant="outlined"
                        margin='dense'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            className: 'rounded-xl bg-white',
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock className="w-5 h-5 text-gray-500" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                        {showPassword ?
                                            (<EyeOff className='w-5 h-5 text-gray-600' />) :
                                            (<Eye className='w-5 h-5 text-gray-600' />)
                                        }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md"
                        sx={{
                            textTransform: 'none',
                            fontSize: '1rem',
                            marginTop: '15px',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-1px)',
                            },
                        }}
                    >
                        Login
                    </Button>
                </form>

                {/* Error Message */}
                {error && (
                    <div className="text-sm mt-2 text-red-600 bg-red-100 border border-red-300 rounded-lg px-4 py-2">
                        {error}
                    </div>
                )}

                {/* Demo Account Info */}
                <Divider className="my-8">
                    <Typography variant="body2" className="text-gray-500 px-4" sx={{ marginTop: '15px', marginBottom: '15px', fontWeight: 500 }}>
                        Demo Account
                    </Typography>
                </Divider>

                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                    <Typography variant="subtitle2" className="text-blue-800 font-semibold mb-3 flex items-center">
                        <Lock className="h-4 w-4 mr-2" />
                        Test Credentials
                    </Typography>
                    <div className="space-y-2 text-sm text-blue-800">
                        <div className="flex justify-between items-center">
                            <span>Username:</span>
                            <code className="bg-white px-3 py-1 rounded-lg">admin</code>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Password:</span>
                            <code className="bg-white px-3 py-1 rounded-lg">password</code>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Login;
