import { AppBar, Button, Toolbar } from '@mui/material';
import { House, LogOut } from 'lucide-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Handle Logout Functionality
    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate('/login');
    };

    return (
        <AppBar position='sticky' elevation={0} className='bg-white shadow-sm border-b border-gray-200'>
            <Toolbar className='flex flex-wrap justify-between items-center px-4 py-2'>

                {/* App title */}
                <div className='flex items-center gap-3'>
                    <div className='flex space-x-3 items-center'>
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <House className="h-5 w-5 text-blue-600" />
                        </div>
                        <h1 className='text-lg text-gray-100 font-bold'>Protected Application</h1>
                    </div>
                </div>

                {/* Buton for Page Navigation */}
                <div className="flex flex-wrap justify-center gap-3 px-6 py-3">
                    {[...Array(10).keys()].map(i => {
                        const page = `/page/${i + 1}`;
                        const isActive = location.pathname === page;

                        return (
                            <Button
                                key={page}
                                component={Link}
                                to={page}
                                variant={isActive ? 'contained' : 'outlined'}
                                color="inherit"
                                size="small"
                                className={`min-w-[44px] h-9 px-3 py-2 text-sm rounded-xl font-semibold transition-all duration-200`}
                                onClick={() => localStorage.setItem('lastPage', page)}
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: isActive ? '#0277bd' : 'transparent',
                                    color: isActive ? '#fff' : '#e0e0e0',
                                    border: isActive ? '1px solid #0277bd' : '1px solid #e0e0e0',
                                    '&:hover': {
                                        backgroundColor: isActive ? '#1e3a8a' : '#2196f3',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                                        transform: 'translateY(-1px)',
                                    },
                                    '&:active': {
                                        backgroundColor: isActive ? '#1e3a8a' : '#2196f3',
                                        transform: 'translateY(0)',
                                    },
                                }}
                            >
                                {i + 1}
                            </Button>

                        );
                    })}
                </div>

                {/* Logout Button */}
                <div className='flex items-center'>
                    <Button
                        variant='contained'
                        color='error'
                        size='small'
                        onClick={logout}
                        className='text-white space-x-2'
                    >
                        <LogOut className='h-4 w-4' />
                        <span>Logout</span>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
