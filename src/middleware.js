import {
  getUserById,
} from './actions'

export default function middleware(req, res, next) {
  req.setCookie = userId =>
    new Promise((resolve) => {
      res.cookie('userId', userId)
      resolve()
    })

  if (req.cookies.userId) {
    getUserById(req.cookies.userId)
      .then((user) => {
        req.user = user
        req.userId = user.id
        next()
      })
      .catch(console.log)
  } else {
    next()
  }
}
