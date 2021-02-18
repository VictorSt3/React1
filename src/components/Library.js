import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div
      className={`library ${libraryStatus ? "active-library" : " "}`}
      style={{ display: libraryStatus ? "initial" : "none" }}
    >
      <h2>Library</h2>
      <div
        onClick={() => setLibraryStatus(!libraryStatus)}
        style={{
          position: "fixed",
          cursor: "pointer",
          left: "280px",
          top: "10px",
        }}
      >
        <svg viewBox="0 0 120 80" width="40" height="40">
          <rect width="80" height="15"></rect>
          <rect y="30" width="80" height="15"></rect>
          <rect y="60" width="80" height="15"></rect>
        </svg>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            cover={song.cover}
            name={song.name}
            artist={song.artist}
            active={song.active}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
