import React, { useEffect, useState } from 'react'
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'

const Sidebar = () => {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div
      className="h-screen overflow-y-scroll border-r border-gray-900 
    p-5 text-xs text-gray-500 scrollbar-hide"
    >
      <div className="space-y-4">
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 hover:text-white "
        >
          <p>Sign out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white ">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlists</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <HeartIcon className="h-5 w-5" />
          <p>On Episodes</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <LibraryIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {playlists.map((playlist) => (
          <p key={playlist.id} className="cursor-pointer hover:text-white">
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
