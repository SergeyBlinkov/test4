import React from 'react';
import './BurgerButton.css';
import { TBurgerButton } from './BurgerButtonType';
const BurgerButton = ({onClick,isShow}:TBurgerButton) => {
    let classN = isShow ? 'showBurgerButton' : 'hideBurgerButton';
    return  <>{isShow && <article className={`BurgerButton ${classN}`} onClick={onClick}>
        <span className={'BurgerButton_fl'}></span>
        <span className={'BurgerButton_cl'}></span>
        <span className={'BurgerButton_bl'}></span>
    </article>}
        </>
};

export default BurgerButton;