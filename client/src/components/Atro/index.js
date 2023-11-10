// src/components/MouseMove.js
import React from 'react';
import img1 from '../../assets/images/WoWScrnShot_030522_215717.jpg';
import img2 from '../../assets/images/WoWScrnShot_030522_215717.jpg';
import Atropos from 'atropos/react';
const MouseMove = () => {
 

  return (
    <div className="mouse-move-container">
        <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <img src={img1} alt="img1" />
      </Atropos>
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >

        <img src={img2} alt="img2" />
      </Atropos>
    </div>
  );
};

export default MouseMove;
