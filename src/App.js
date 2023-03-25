import React from "react";
import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import{ SharedLayout, Home,About,Bodybuilder, Course, Communities} from './components/index';

function App() {
  return (
    
      <div className="App">
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Bodybuilder/>}/>
              <Route path="/" index element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/communities" element={<Communities/>} />
              <Route path='courses/:courseId' element={<Course />}/>
        </Route>
      </Routes>
    
        
      </div>
  );
}

export default App;
