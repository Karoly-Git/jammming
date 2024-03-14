import React from 'react'

import Track from './Track'

export default function TrackList({result, handleClick, actionBtn}) {
  return (
    <div className='track-list'>
      {result.map((song, index) => 
        <Track 
          key={'song' + index}
          song={song}
          result={result}
          handleClick={handleClick}
          actionBtn={actionBtn}
        />
      )}
    </div>
  )
}
