import db from '../db'

export default function signIn(email, passwordAttempt) {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
    .then((results) => {
      if (results[0]) {
        if (results[0].password === passwordAttempt) {
          const {password, ...user} = results[0]
          return {user}
        }
      } return {error: 'No match'}
    })
}
