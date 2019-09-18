require('dotenv').config()
const cloudinary = require('cloudinary').v2
import multer from 'multer'
import path from'path'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import ProfilePictureService from '../../services/profpic.services'
import { APP_SECRET } from '../../utils'
import UserService from '../../services/user.services';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/imageUploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
}).single('avatar')

const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/
  // check file type
  const extname = fileTypes.test(path.extname(
    file.originalname).toLowerCase()
  )
  // check mimetype
  const mimetype = fileTypes.test(file.mimetype)
  if (extname && mimetype) {
    return cb(null, true)
  }
  return cb({ error: 'Only images are allowed' })

}

class ProfilePictureController {
  static modifyUserProfilePicture (req, res) {
    const { token } = req
    jwt.verify(token, APP_SECRET, (err, authData) => {
      if (err) {
        console.log(err)
        return res.status(403).json({
          message: 'You are not authorized'
        })
      }

      const { user: { id } } = authData
      UserService._findByPk(id).then(legit => {
        if (legit === undefined) {
          return res.status(404).json({
            message: 'Not Found'
          })
        }
        upload(req, res, (err) => {
          if (err) {
            return res.status(400).send(err)
          }
    
          // Send file to cloudinary
          const { file: { path, filename } } = req
          cloudinary.uploader.upload(
            path,
            { public_id: `profileImage/${filename}`, tags: 'profPic' },
            (err, image) => {
              if (err) return res.send(err)
              console.log('File uploaded to cloudinary')
              // remove file from server
              fs.unlinkSync(path)
    
              // return image details
              const { secure_url } = image
              ProfilePictureService._modifyProfPic(id, secure_url)
                .then(response => {
                  return res.status(200).json({
                    message: response
                  })
                })
            }
          )    
        })
      })
    })  
  }

  // static loadProfPic (req, res) {
  //   try {
  //     const { token } = req
  //     jwt.verify(token, APP_SECRET, (err, authData) => {
  //       if (err) {
  //         console.log(err)
  //         return res.status(403).json({
  //           message: 'You must login first'
  //         })
  //       }

  //       const { user: { id } } = authData
  //       ProfilePictureService._loadProfPic(id)
  //         .then(picture => {
  //           res.status(200).json({
  //             image: picture
  //           })
  //         })
  //     })
  //   } catch (e) {
  //     console.log(e)
  //     return res.status(500).json({
  //       message: 'Something went wrong'
  //     })
  //   }
  // }
}

export default ProfilePictureController
