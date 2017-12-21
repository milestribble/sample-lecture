import db from '../db'

export default function getLikesByAlbum(userId, albumId) {
  console.log(userId, albumId);
  return Promise.all([
    db.query('SELECT * FROM usersAlbumLikes WHERE album_id = $1',
      [albumId]),
    db.query('SELECT * FROM usersAlbumLikes WHERE user_id = $1 AND album_id = $2',
      [userId, albumId]),
  ])
    .then((resultsArrays) => {
      const totalLikes = resultsArrays[0].length
      const userLiked = resultsArrays[1].length > 0
      return {totalLikes, userLiked}
    })
}
