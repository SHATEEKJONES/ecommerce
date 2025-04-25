import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    }
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   lowercase: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   minlength: 6,
    // },
  });

  const User = mongoose.model('User', userSchema);


  //get all names in users 
  router.get('/users', async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { router as userRoutes };