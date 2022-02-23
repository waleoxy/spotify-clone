import React from 'react'
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {
  const { data: session } = useSession()

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
        {/*playlist*/}
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
        <p className="cursor-pointer hover:text-white">Playlist... name</p>
      </div>
    </div>
  )
}

export default Sidebar
