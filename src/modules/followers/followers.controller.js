import jwt from 'jsonwebtoken'
import FollowersService from '../../services/followers.services'
import { APP_SECRET } from '../../utils'
class FollowersController {
  static follow (req, res) {
    try {
      const { token, query: { followId } } = req
      jwt.verify(token, APP_SECRET, (err, authData) => {
        if (err) {
          console.log(err)
          return res.status(403).json({
            message: 'You must log in to perform this act'
          })
        }
        
        const { user: { id } } = authData
        FollowersService._follow(id, followId)
          .then(following => {
            res.status(201).json({
              message: `You are now following...`,
              following
            })
          })
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        message: 'Something terrible happened'
      })
    }
  }

  static unfollow (req, res) {
    try {
      const { token, query: { followId } } = req
      jwt.verify(token, APP_SECRET, (err, authData) => {
        if (err) {
          console.log(err)
          return res.status(403).json({
            message: 'You must log in to perform this act'
          })
        }

        const { user: { id } } = authData
        FollowersService._unfollow(id, followId) 
          .then(response => {
            res.status(202).json({
              message: response
            })
          })

      })
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: 'Something terrible happened'
      })
    }
  } 
}

export default FollowersController
