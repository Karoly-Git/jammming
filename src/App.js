import React, {useState} from 'react';
import SearchResults from './components/SearchResults';

import fetchedData from './data/results.json';
import PlayList from './components/Play_List';
import SearchBar from './components/SearchBar';

export default function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [playListName, setPlayListName] = useState('New PlayList');
  const [mySpotifyAccount, setMySpotifyAccount] = useState([]);

  const addSong = (newSong) => {
    let filteredList = playList.filter(song => song.id === newSong.id);
    if (filteredList.length === 0){
      console.log([...playList, newSong]);
      setPlayList([...playList, newSong]);
    } else {
      console.log('Song is already in the Playlist!')
    }
  }

  const removeSong = (oldSong) => {
    let newPlayList = playList.filter(song => song.id !== oldSong.id );
    console.log(newPlayList);
    setPlayList([...newPlayList]);
  }

  const renamePlaylist = (inputValue) => {
    setPlayListName(inputValue);
  }

  const resetPlayList = () => {
    setPlayList([]);
  }

  const savePlayList = () => {
    if (playList.length !== 0){
      setMySpotifyAccount([...mySpotifyAccount, playList]);
      console.log([...mySpotifyAccount, playList]);
    }
  }

  return (
    <div>
      <SearchBar
        fetchedData={fetchedData}
        setSearchResult={setSearchResult}
      />

      <SearchResults
        result={searchResult}
        addSong={addSong}
        actionBtn="+"
      />
      
      <PlayList
        playList={playList}
        playListName={playListName}
        renamePlaylist={renamePlaylist}
        removeSong={removeSong}
        actionBtn="-"
      />

      <button onClick={savePlayList}>Save PlayList</button>
      <button onClick={resetPlayList}>Reset PlayList</button>
    </div>
  )
}
