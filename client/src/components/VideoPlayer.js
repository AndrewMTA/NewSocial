import React from 'react'
import {DefaultPlayer as Video } from 'react-html5video'
import introVideo from './videos/video1.mp4'
import "react-html5video/dist/styles.css"
const VideoPlayer = () => {
  return (
<video autoPlay loop width = "100%"  height = "100%">
    <source src={introVideo} type="video/webm" />
</video>
  )
}

export default VideoPlayer