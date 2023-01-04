import React from 'react'
import {DefaultPlayer as Video } from 'react-html5video'
import introVideo from './videos/video1.mp4'
import "react-html5video/dist/styles.css"
const VideoPlayer = () => {
  return (
<Video autoPlay loop >
    <source src={introVideo} type="video/webm" />
</Video>
  )
}

export default VideoPlayer