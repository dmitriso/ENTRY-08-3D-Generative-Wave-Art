// THIS CONTAINS THE STRUCTURE FOR COMPONENTS TO BE USED
import './App.css';
import React, { Suspense} from 'react';
import AnimationCanvas from './components/AnimationCanvas';

function App() {
  return (
    <div className='anim'>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>

    </div>
  );
}

export default App;


