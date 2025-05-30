const routes = (handler) => [
  {
    method: 'POST',
    path: '/playlists',
    handler: handler.postPlaylistHandler,
    options: {
      auth: 'openmusic_jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists',
    handler: handler.getPlaylistsHandler,
    options: {
      auth: 'openmusic_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/playlists/{id}',
    handler: handler.deletePlaylistByIdHandler,
    options: {
      auth: 'openmusic_jwt',
    },
  },
  // {
  //   method: 'POST',
  //   path: '/playlists/{id}/songs',
  //   handler: handler.postPlaylistSongHandler,
  // },
  // {
  //   method: 'GET',
  //   path: '/playlists/{id}/songs',
  //   handler: handler.getPlaylistSongsHandler,
  // },
  // {
  //   method: 'DELETE',
  //   path: '/playlists/{id}/songs',
  //   handler: handler.deletePlaylistSongHandler,
  // },
];

module.exports = routes;
