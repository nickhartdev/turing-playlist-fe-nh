import React from 'react';

const SongController = (props) => {
  return (
    <div>
      <button onClick={props.moveToNextSong}>Next Song</button>
    </div>
  );
};

export default SongController;
