import db from '../db'

export default function updateUserById(userId, name, email) {
  return db.one('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING name, email', [name, email, userId])
}
