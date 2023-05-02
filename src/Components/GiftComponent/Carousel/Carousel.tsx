import React, { useState } from 'react';
import './Carousel.css';
import slide1 from './img/slide 1.svg';
import slide2 from './img/slide2.svg';
import slide3 from './img/slide 4.svg';
import BeautyCloud from '../../../shared/ui/BeautyCloud/BeautyCloud';
import { TCarouselType } from './CarouselType';
import arrowLeft from './img/arrowleft.svg';
const CarouselItems = ({ swipeElement }:TCarouselType) => {
    return (
        <article className={'CarouselItems'} style={{rotate:`${swipeElement}deg`}}>
            <img src={slide1} alt={'slide1'} className={'CarouselItems_item CarouselItems_item1'}/>
            <img src={slide2} alt={'slide2'} className={'CarouselItems_item CarouselItems_item2'}/>
            <img src={slide3} alt={'slide3'} className={'CarouselItems_item CarouselItems_item3'}/>
        </article>
    )
}
const Carousel = () => {
    const [swipeElement,setSwipeElement]= useState(0)
    const handleClick= (direction:'left' | 'right') => {
        if(direction === 'left') {
            setSwipeElement(prev => prev - 120)
        } else {
        setSwipeElement(prev => prev + 120)
        }
    }
  
    return (
        <div className={'Carousel'}>
            <section className={'Carousel_inner'}>
               <CarouselItems swipeElement={swipeElement}/>
            </section>
                <BeautyCloud />
                <div className={'Carousel_Arrows'}>
                    <img
                        src={arrowLeft}
                        className={'Carousel_Arrows__left'}
                        alt={'arrow'}
                        onClick={()=>handleClick('left')} />
                    <img
                        src={arrowLeft}
                        className={'Carousel_Arrows__right'}
                        alt={'arrow'}
                        onClick={()=>handleClick('right')} />
                </div>
        </div>
    );
};

export default Carousel;