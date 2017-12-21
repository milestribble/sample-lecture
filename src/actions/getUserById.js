import db from '../db'

export default function getUserById(userId) {
  return db.one('SELECT * FROM users WHERE id = $1', [userId])
}
