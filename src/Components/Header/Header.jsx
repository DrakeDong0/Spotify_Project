import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom'; 

export default function Search() {
    const navigate = useNavigate();

    function handleChange(event) {
        // Handle search input change here
    }

    function handleLogout() {
        navigate('/'); 
    }

    function showAlert(){
        alert("Hello world!");
    }

    return (
        <div className='header-container'>
            <form>
                <div className="search-bar">
                    <span className="search-icon material-symbols-outlined">search</span>
                    <input className="search-input" type="search" placeholder="Search" onChange={handleChange} />
                </div>
            </form>
            <div className="checkbox-container">
                <input type="checkbox" />
                <label htmlFor="select-all">Select All</label>
            </div>
            <div className="vertical-line"></div>
            <button class="delete-button" onClick={showAlert} type="button">
                <span className="material-symbols-outlined">delete</span>
                <p>Delete</p>
            </button>
            <div className="vertical-line"></div>
            <button className="logout-button" onClick={handleLogout} type="button">
                <span class="material-symbols-outlined">logout</span>
                <p>Logout</p>
            </button>
            <div className="vertical-line"></div>
        </div>
    );
}
