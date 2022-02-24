import { shuffle } from 'lodash'
import React, { useEffect, useState } from 'react'
import useSpotify from '../hooks/useSpotify'

const Song = ({ track, order }) => {
  const spotifyApi = useSpotify()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let trackImgNo = track.track.album.images.length
    let trackNoArr = [...Array(trackImgNo).keys()]
    setIndex(shuffle(trackNoArr).pop())
  }, [track.track])

  return (
    <div>
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[index].url}
          alt="album pix"
        />
        <div>
          <p>{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>
    </div>
  )
}

export default Song
