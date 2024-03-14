import React from 'react'

export default function Track({song, handleClick, actionBtn}) {
  return (
    <div className='track'>
      <div className='track-information'>
        <h3>{song.name}</h3>
        <p>{song.artist} | {song.album}</p>
      </div>
      <a className='track-action' onClick={() => handleClick(
        {
          "id": 'ID_' + song.name,
          "name": song.name,
          "artist": song.artist,
          "album": song.album
        }
      )}>
        {actionBtn}
      </a>
    </div>
  )
}
