const path = require('path');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumByIdHandler,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.putAlbumByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumByIdHandler,
  },
  {
    method: 'POST',
    path: '/albums/{id}/covers',
    handler: handler.postAlbumCoverHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
    },
  },
  {
    method: 'GET',
    path: '/albums/{id}/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'file/covers'),
      },
    },
  },
  {
    method: 'POST',
    path: '/albums/{id}/likes',
    handler: (request, h) => handler.postLikeAlbumHandler(request, h),
    options: {
      auth: 'openmusic_jwt',
    },
  }
];

module.exports = routes;