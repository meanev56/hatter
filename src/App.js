import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/mobile/Mobile';

const App = () => {
  // Determine whether to display the mobile or desktop header based on screen size
  const isMobile = window.innerWidth < 1068; // Adjust the width threshold as needed

  return (
    <div>
      {isMobile ? <Mobile /> : <Desktop />}
      
    </div>
  );
};

export default App;
