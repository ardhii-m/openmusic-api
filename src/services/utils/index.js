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

const mapPlaylistDBtoModel = ({
  id,
  name,
  owner,
}) => ({
  id,
  name,
  username: owner,
});

const mapPlaylistActivitiesDBtoModel = ({
  username,
  title,
  action,
  time,
}) => ({
  username,
  title,
  action,
  time,
});

module.exports = { mapAlbumDBtoModel, mapSongDBtoModel, mapPlaylistDBtoModel, mapPlaylistActivitiesDBtoModel };