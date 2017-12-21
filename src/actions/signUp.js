import db from '../db'

export default function signUp(name, email, password) {
  return db.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING  id, name, email', [name, email, password])
}
