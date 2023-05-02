import React, { useEffect, useRef, useState } from 'react';
import './GiftComponent.css'
import { TSwipeElement } from '../../App';
import Carousel from './Carousel/Carousel';
const GiftComponent = ({ onClick }:TSwipeElement) => {
    const [showBlock,setShowBlock] = useState(false)
    const GiftComponentRef = useRef<HTMLElement>(null)
    const ObserverFunction:IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                if(showBlock) {
                    return
                } else {
                    setShowBlock(true)
                }
            } else if (!showBlock) {
                return
            } else setShowBlock(false)
        })
    }
    useEffect(() =>{
        let observer = new IntersectionObserver(ObserverFunction,{rootMargin:'0px',threshold:0.5})
        if(!GiftComponentRef.current) {
            return
        }

        observer.observe(GiftComponentRef?.current)
    },[])
    return (
        <section className={'GiftComponent'} ref={GiftComponentRef}>
            <section className={`GiftComponent_infoBlock ${showBlock && 'showInfoBlock'}`}>
                <h2 className={'GiftComponent_infoBlock__h'}>PageMaker including versions of Lorem Ipsum.</h2>
                <p className={'GiftComponent_infoBlock__text'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                <section className={'GiftComponent_infoBlock__button'}>
                    <button className={'GiftComponent_infoBlock__buttonItem'} onClick={() => {
                        onClick().back()
                        setTimeout(()=>setShowBlock(false),500)
                    }}>BACK</button>
                </section>
            </section>
            <section className={'GiftComponent_carousel'}>
                <Carousel />

            </section>

        </section>
    );
};

export default GiftComponent;