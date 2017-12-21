import express from 'express'

import {
  addLikeByUser,
  getAlbums,
  getAlbumById,
  getLikesByAlbum,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getAlbums()
    .then(albums => res.render('albums/index', {albums}))
    .catch(next)
})

router.get('/:albumID', (req, res, next) => {
  getAlbumById(req.params.albumID)
    .then((album) => {
      getLikesByAlbum(req.userId, album.id)
        .then(likes => {
          console.log(likes);
          res.render('albums/album', {album, user: req.user, likes})
        })
    })
    .catch(next)
})

router.post('/:albumId/like', (req, res, next) => {
  console.log(req.userId, req.params.albumId);
  addLikeByUser(req.userId, req.params.albumId)
    .then(result => {
      console.log(result);
      if (result) {
        res.json({liked:'liked'})
      }
    })
})

export default router
