import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar className='toolbar' >
                <Typography variant="overline">The Shopping Spot</Typography>
                <div className='nav-links'>
                    <Link className='link' to="/shop" >
                        <Typography style={{ marginRight: "10px" }} variant="overline">Shop</Typography>
                    </Link>
                    <Link className='link' to="/cart">
                        <Typography variant="overline">Cart</Typography>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
