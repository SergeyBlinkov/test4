import React, { useState } from 'react';
import SpeedPageComponent from './Components/SpeedPageComponent/ui/SpeedPageComponent';
import './App.scss';
import GiftComponent from './Components/GiftComponent/GiftComponent';
import BackgroundPurpleLine from './shared/ui/BackgroundPurpleLine/BackgroundPurpleLine';
import './style/media/MediaMobile.css';
export type TSwipeElement = {
    onClick: () => {
        go:() =>void
        back:() => void
    }
}
function App() {
    const [swipeElement,setSwipeElement] = useState(0)
    const handleClick = () => {
            return {
                go:() =>setSwipeElement(-100),
                back:() => setSwipeElement(0)
            }
    }
    return (
    <div className="App">
      <section className={'inner'}>
          <BackgroundPurpleLine left={swipeElement}>
          <SpeedPageComponent onClick={handleClick}/>
          <GiftComponent onClick={handleClick}/>
          </BackgroundPurpleLine>
      </section>


    </div>
  );
}

export default App;
