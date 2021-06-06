import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1621246734364-ba4f7298bb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt=""/>
            <Avatar className="sidebar__avatar" />
            <h2>Nathan Benson</h2>
            <h4>nathanbenson.affiliate@gmail.com</h4>
          </div>
          <div className="sidebar__stats">
              <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">9.949</p>
              </div>
              <div className="sidebar__stat">
              <p>Views on post</p>
                <p className="sidebar__statNumber">2.696</p>
              </div>
          </div>
          <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
          </div>
        </div>
    )
}

export default Sidebar
