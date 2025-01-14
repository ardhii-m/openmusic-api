const mapAlbumDBtoModel = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
});

const mapSongDBtoModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId
}) =>({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId
});

module.exports = { mapAlbumDBtoModel, mapSongDBtoModel };