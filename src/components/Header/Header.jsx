import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import HeaderOption from './HeaderOption/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';



function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>

                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
                <HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon}  title="Jobs" />
                <HeaderOption Icon={ChatIcon}  title="Messaging" />
                <HeaderOption Icon={NotificationsIcon}  title="Notifications" />
                <HeaderOption avatar={'https://static.wikia.nocookie.net/enfuturama/images/a/a6/Bender_Rodriguez.png/revision/latest/top-crop/width/360/height/360?cb=20200504113535'} title="me" />

            </div>
        </div>
    )
}

export default Header

