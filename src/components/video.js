import React from "react";


const Video = ({ videoSrcURL, videoTitle, ...props }) => {
//console.log(embedSrc)
const embedSrc = videoSrcURL.includes('playlist?list') ? videoSrcURL.replace('playlist?list=', 'embed/videoseries?list=') : videoSrcURL.replace('watch?v=', 'embed/')
console.log(embedSrc) ;
return (
  <>
  <div className="video-responsive">
    <iframe
      src={embedSrc}
      title={videoTitle}

      //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      //frameBorder="0"
   
      allowFullScreen
       width="450"
    />
    
  </div>
  <span>{videoTitle}</span>
  </>
  )
  }
export default Video