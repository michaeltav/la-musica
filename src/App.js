import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "show_#286",
      artist: "Joe Kay",
      album: "Mixes",
      track: "show_#286",
      year: "2016",
      img_src: "/la-musica/src/songs_images/Soulection_#286.jpg",
      src: "/la-musica/src/songs/show_#286.mp3",
    },
    {
      title: "show_#457",
      artist: "Joe Kay",
      album: "Mixes",
      track: "show_#457",
      year: "2016",
      img_src: "/la-musica/src/songs_images/Soulection_#457.jpg",
      src: "/la-musica/src/songs/show_#457.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs, setSongs]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
