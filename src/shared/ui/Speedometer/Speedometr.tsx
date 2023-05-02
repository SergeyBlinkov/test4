import React, { useState } from 'react';
import Ellipse from './img/Ellipse1.svg';
import './Speedometr.css';
import Group from './img/Group/Group';


const initStage: TInitStage[] = [
    { color: '#7A0BC0', isActive: true, amount: 3 },
    { color: '#0B8AC0', isActive: false, amount: 6 },
    { color: '#E105E5', isActive: false, amount: 9 },
];
type TInitStage = {
    color: string,
    isActive: boolean,
    amount: number
}
type TButtonLevelBlock = {
    onClick: () => {
        setElement:(el:number) => void,
        getElement: TInitStage[]
    },
    el:TInitStage
    i: number
}
const ButtonLevelItem = ({ i, onClick,el }: TButtonLevelBlock) => {
    let color = el.isActive ? {backgroundColor:el.color} : {}
    return <button style={color} className={`ButtonLevelItem ButtonLevelItem${i}`} onClick={() => onClick().setElement(i)}>Level {i}</button>;
};

const ButtonLevelBlock = ({ onClick }: Pick<TButtonLevelBlock, 'onClick'>) => {
    const el = onClick().getElement
    return <section className={'ButtonLevelBlock'}>
        {el.map((item,index) => (
            <ButtonLevelItem key={item.color} onClick={onClick} i={index + 1} el={item}/>
        ))}
    </section>;
};

const Speedometer = ({onClick}:Pick<TButtonLevelBlock,'onClick'>) => {
    const activeElement = onClick().getElement.filter(el => el.isActive)[0]
    let ChangeDegree = activeElement.amount === 3 ?  0 : activeElement.amount === 6 ? 120: 240
    return <section className={'Speedometer'}>
        <span className={'Speedometer_center'} style={{ background: activeElement.color }}></span>
        <Group color={activeElement.color} amount={activeElement.amount} />
        <div className={`Speedometer__arrow`} style={{rotate:`${ChangeDegree}deg`}}>
            <ArrowClock activeElement={activeElement} />
        </div>
        <img src={Ellipse} alt={'ellipse'} className={'Speedometer__ellipse'} />
    </section>
}
const SpeedometerBlock = () => {
    const [stage, setStage] = useState(initStage);
    const handleClick = () => {
        return {
            setElement:(el:number) => setStage(prev =>
                prev.map((item, index) =>
                    el === index + 1 ? ({ ...item, isActive: true }) : ({ ...item, isActive: false })),
            ),
            getElement: stage
        };
    };
    return (
        <section className={'SpeedometerBlock'}>
            <Speedometer onClick={handleClick}/>
            <ButtonLevelBlock onClick={handleClick} />
        </section>
    );
};
const ArrowClock = ({ activeElement }: { activeElement: TInitStage }) => {
    return  <svg width='202' height='78'
                 viewBox='0 0 202 78' fill='none'
                 xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M85.2877 32.202L84.2954 35.0042L98.0447 39.8731L99.4079 43.5573L194.457 77.2161L201.184 74.7959L197.464 68.7245L102.415 35.0657L99.037 37.0709L85.2877 32.202Z'
            fill='white' />
        <path
            d='M85.6235 31.2538L15.9286 6.57353L14.2496 11.3147L83.9445 35.9949L84.2954 35.0042L85.2877 32.202L85.6235 31.2538Z'
            fill='white' />
        <path
            d='M14.2496 11.3147L15.9286 6.57353L13.7554 3.6697L6.16961 0.983422L3.12746 2.04041L1.44853 6.78156L3.14754 9.51749L10.7334 12.2038L14.2496 11.3147Z'
            fill='white' />
        <path
            d='M15.9286 6.57353L85.6235 31.2538M15.9286 6.57353L14.2496 11.3147M15.9286 6.57353L13.7554 3.6697L6.16961 0.983421L3.12746 2.04041L1.44853 6.78157L3.14754 9.51749L10.7334 12.2038L14.2496 11.3147M85.6235 31.2538L83.9446 35.9949M85.6235 31.2538L85.2877 32.202M83.9446 35.9949L14.2496 11.3147M83.9446 35.9949L84.2954 35.0043M85.2877 32.202L99.037 37.0709L102.415 35.0657L197.464 68.7245L201.184 74.7959L194.457 77.2161L99.4079 43.5573L98.0447 39.8731L84.2954 35.0043M85.2877 32.202L84.2954 35.0043'
            stroke='white' strokeWidth='1.00593' />
    </svg>;

};

export default SpeedometerBlock;