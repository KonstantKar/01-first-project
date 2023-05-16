const MusicComp = (props) => {
  let addSong = () => {
    props.addSong(props.id);
  };
  let deleteSong = () => {
    props.deleteSong(props.id);
  };
  return (
    <div>
      <div>{props.songName}</div>
      <div>{props.artist}</div>
      <div>
        {props.followed ? (
          <button onClick={deleteSong}>Песня добавлена</button>
        ) : (
          <button onClick={addSong}>Песня не добавлена</button>
        )}
      </div>
    </div>
  );
};
export default MusicComp;
