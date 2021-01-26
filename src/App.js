import React from 'react';
import { ChangeColor, Color, Counter ,Todos }from './components';


const App = () => {
  return (
    <div>
      <Counter/>
      <hr style={{margin:'20px 0'}}/>
      <Color/>
      <hr style={{margin:'20px 0'}}/>
      <ChangeColor/>
      <hr style={{margin:'20px 0'}}/>
      <Todos/>
    </div>
  );
};

export default App;