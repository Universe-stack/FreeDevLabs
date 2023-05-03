import React,{useEffect} from "react";
import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import{ SharedLayout, Home,About,Bodybuilder, Course, Communities,CourseItem, Resources} from './components/index';
import { courseActions } from "./store/course-slice";
import {getCourseData} from "./components/services/index"
import {useDispatch} from "react-redux";





function App() {
  const {populateData} = courseActions;

  const dispatch = useDispatch();

  useEffect(()=> {
    getCourseData()
    .then((res)=>{
      console.log(res.niches)
      const action =populateData(res);
      dispatch(action)
    })
    .catch(e=>{
      console.log("error",e)
    })
  },[]);

  return (
    
      <div className="App">
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Bodybuilder/>}/>
              <Route path="/" index element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/resources" element={<Resources/>} />
              <Route path="/communities" element={<Communities/>} />
              <Route path="/courses/:id" element={<Course/>} />
              <Route path='/courses/:courseId/:id' element={<CourseItem/>}/>
        </Route>
      </Routes>
    
        
      </div>
  );
}

export default App;
