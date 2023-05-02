import React, { useState } from 'react';
import './SideBar.css';
import BurgerButton from '../../shared/ui/BurgerButton/BurgerButton';
const SideBar = () => {
    const [show,setShow] = useState(false)
    let showClass = show ? 'showSideBar' : 'hideSideBar';
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div className={'SideBarBlock'}>
            <nav className={`SideBar ${showClass}`}>
                <span className={'closeButton'} onClick={handleClick}></span>
                <ul className={'SideBar_nav'}>
                    <li className={'SideBar_nav__item'}><p>Menu1</p><span>GO</span></li>
                    <li className={'SideBar_nav__item'}><p>Menu2</p><span>GO</span></li>
                    <li className={'SideBar_nav__item'}><p>Menu3</p><span>GO</span></li>
                    <li className={'SideBar_nav__item'}><p>Menu4</p><span>GO</span></li>
                </ul>
                <span className={'SideBar__phone'}>8 800 000 00 00</span>
            </nav>
            <BurgerButton onClick={handleClick} isShow={!show} />
        </div>

    );
};

export default SideBar;