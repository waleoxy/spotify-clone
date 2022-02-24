import { shuffle } from 'lodash'
import React, { useEffect, useState } from 'react'
import useSpotify from '../hooks/useSpotify'
import { millisToMinutesAndSeconds } from '../lib/time'

const Song = ({ track, order }) => {
  const spotifyApi = useSpotify()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let trackImgNo = track.track.album.images.length
    let trackNoArr = [...Array(trackImgNo).keys()]
    setIndex(shuffle(trackNoArr).pop())
  }, [track.track])

  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[index].url}
          alt="album pix"
        />
        <div>
          <p className="w-36 truncate md:w-64">{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden md:inline">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song
