import React from 'react'
import TrackList from './Track_List'

export default function SearchResults({result, addSong, actionBtn}) {
  return (
    <div className='search-result'>
      Results
      <TrackList
        result={result}
        handleClick={addSong}
        actionBtn={actionBtn}
      />
    </div>
  )
}
