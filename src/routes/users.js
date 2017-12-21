import express from 'express'

import {
  getUserById,
  updateUserById,
} from '../actions'

const router = express.Router()

router.get('/:id', (req, res) => {
  const {id} = req.params
  getUserById(id)
    .then(user => res.render('users/profile', {user, edit: false}))
    .catch(() => res.redirect('/'))
})

router.get('/:id/edit', (req, res, next) => {
  const {id} = req.params
  getUserById(id)
    .then(user => res.render('users/profile', {user, edit: true}))
    .catch(next)
})

router.post('/:id/edit', (req, res) => {
  console.log('happenmed');
  const {name, email} = req.body
  const {id} = req.params
  updateUserById(id, name, email)
    .then(user => {
      console.log('responding');
      res.json(user)
    })
})

export default router
