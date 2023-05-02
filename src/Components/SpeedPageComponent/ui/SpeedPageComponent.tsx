import React from 'react';
import SpeedometerBlock from '../../../shared/ui/Speedometer/Speedometr';
import './SpeedPageComponent.css'
import GoButton from '../../../shared/ui/GoButton/GoButton';
import SideBar from '../../../feature/SideBar/SideBar';
import { TSwipeElement } from '../../../App';
const SpeedPageComponent = ({onClick}:TSwipeElement) => {
    return (

            <section className={'SpeedPageComponent'}>
            <SideBar />
                <section className={'SpeedPageComponent_infoBlock'}>
                    <h2 className={'SpeedPageComponent_infoBlock__h'}>Bibendum neque egestas congue</h2>
                    <p className={'SpeedPageComponent_infoBlock__text'}>lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat</p>
                    <GoButton onClick={() => onClick().go()}/>
            </section>
                <SpeedometerBlock />
            </section>


    );
};

export default SpeedPageComponent;