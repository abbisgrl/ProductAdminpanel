import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    occupation: String,
    phoneNumber: String,
    role: {
      type: String,
      enum: ['user', 'admin', 'superadmin'],
      default: 'admin',
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
)

const User = mongoose.model('User', UserSchema)
export default User
