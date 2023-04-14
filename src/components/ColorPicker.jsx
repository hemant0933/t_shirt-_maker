import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';


const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={['#FC2947','#BA90C6','#474E68','#FFCAC8','#F0D9E7','#8D93AB','#761A1A','#863A6F','#5800FF','#77D970','#A8FF3E','#8D7B68']}
        onChange={(color) => state.color = color.hex}
      
      />
      
    </div>
  );
}

export default ColorPicker;
