import React from 'react'
import TrackList from './Track_List'

export default function PlayList({playList, playListName, renamePlaylist, removeSong, actionBtn}) {
  return (
    <div className='playlist'>
      <input type='text' placeholder='add album neme' onChange={(e) => renamePlaylist(e.target.value)}></input>
      
      <h3>{playListName}</h3>
      
      <TrackList
        result={playList}
        handleClick={removeSong}
        actionBtn={actionBtn}
      />
    </div>
  )
}
