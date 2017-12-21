import db from '../db'

export default function addLikeByUser(userId, albumId) {
  console.log('liking');
  return db.one(`INSERT INTO usersAlbumLikes (user_id, album_id)
    VALUES ($1, $2) RETURNING *`,
    [userId, albumId])
}
