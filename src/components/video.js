import React from "react";


const Video = ({ videoSrcURL, videoTitle, ...props }) => {
//console.log(videoSrcURL)
const embedSrc = videoSrcURL.includes('playlist?list') ? videoSrcURL.replace('playlist?list=', '/embed/videoseries?list=') : videoSrcURL.replace('watch?v=', 'embed/')
  return (
  <>
  <div className="video-responsive">
    <iframe
      src={embedSrc}
      title={videoTitle}
      type="text/html"
      //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      //frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
       width="450"
    />
    
  </div>
  <span>{videoTitle}</span>
  </>
  )
  }
export default Video