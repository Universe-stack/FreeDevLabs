import React from 'react';
import "./YouTube.scss";



const Youtube=({h,w,title})=> {
  
  console.log(h,w)
    const opts = {
      height:`${h}`,
      width:`${w}`,
      playerVars: {
        autoplay: 1,
      },
    };

    function onReady(event){
        event.target.pauseVideo();
    }
  
    return (
      <div className='video-container'>
        <iframe
        height={`${h}`}
        width={`${w}`}
        title='vid'
  src="https://www.youtube.com/embed/msizPweg3kE"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope;"
  allowfullscreen></iframe>
      </div>
    );
  
}

export default Youtube;