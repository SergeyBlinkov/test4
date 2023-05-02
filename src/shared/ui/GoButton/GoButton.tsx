import React,{FC} from 'react';
import { TGoButton } from './GoButtonTypes';
import './GoButton.css';

const GoButton:FC<TGoButton> = ({label,onClick}) => {
    return (
        <div className={'GoButton'}>
        <button className={'GoButton_button'} onClick={()=> onClick && onClick()}>
            {label ? label : "GO"}
        </button>
        </div>
    );
};

export default GoButton;