import { Fragment } from 'react'
import ReactPlayer from 'react-player'

export default function Player ({videoUrl}) {

    return(
        <div style={{marginBottom : '100px'}}>
            <ReactPlayer url={videoUrl} controls/>
        </div>
      
    )
}