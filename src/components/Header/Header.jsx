import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import HeaderOption from './HeaderOption/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';



function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>

                </div>
            </div>

            <div className="header__right">
                <Link to="/"><HeaderOption Icon={HomeIcon} title="Home" /></Link>
                <HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
                <Link to="/jobs"><HeaderOption Icon={BusinessCenterIcon}  title="Jobs" /></Link>
                <HeaderOption Icon={ChatIcon}  title="Messaging" />
                <HeaderOption Icon={NotificationsIcon}  title="Notifications" />
                <HeaderOption avatar={true} title="me"
                    onClick={logoutOfApp} />

            </div>
        </div>
    )
}

export default Header

