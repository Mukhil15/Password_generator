import React from 'react';  
import {Route,Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Main from'./components/Main'
function App() {


  return (

    <div>
      <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Main" element={<Main/>} />
      </Routes>
      
    </div>
  );
}

export default App;
