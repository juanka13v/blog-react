import React from 'react'
import "./header.css"
import mainImg from "../images/main-foto.jpg"

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src={mainImg} alt="" className="headerImg" />
        </div>
    )
}

export default Header
