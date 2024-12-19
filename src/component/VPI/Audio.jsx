import React from 'react'
import data from '../../Video/video'
import AudioPlayer from './AudioPlayer'

function Audio({id}) {

  return (
    <div>
      <AudioPlayer audioFile = {data[id]}/>
    </div>
  )
}

export default Audio