import React, { FC, ReactElement, ReactNode } from 'react';
import './BackgroundPurpleLine.css';
import BGTOP from './img/bg/BGTOP.svg';
import BGBOTTOM from './img/bg/BGBOTTOM.svg';
type someT = {
    left?:number
    children:ReactNode | ReactElement | JSX.Element
}
const BackgroundPurpleLine:FC<someT> = ({children,left}) => {
    return (
        <div className={'BackgroundPurpleLine'} style={{left:`${left}vw`}}>
            <img src={BGTOP} alt={'BGTOP'} className={'BGTOP'}/>
            <img src={BGBOTTOM} alt={'BGBOTTOM'} className={'BGBOTTOM'}/>
            {children}
        </div>
    );
};

export default BackgroundPurpleLine;