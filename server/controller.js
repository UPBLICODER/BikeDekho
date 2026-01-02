const { error } = require('console');
const User = require('./model')

exports.createUser = async (req,res)=>{
    try{
        const userData = await req.body;

        await User.create(userData)
          .then((createdUser) => {
            if (!createdUser) {
              res.status(401).json({
                success: false,
                message: "User Not Created!",
              });
            }

            res.status(201).json({
              success: true,
              message: "User Created Sucessfully!",
              createdUser,
            });
          })
          .catch((error) => {
            res.status(404).json({
              success: false,
              error: error.message,
            });
          });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

exports.getUsers = async (req,res)=>{
    try {
        await User.find()
          .then((allusers) => {
            if (!allusers) {
              res.status(401).json({
                success: false,
                message: "Users Not found!",
              });
            }

            res.status(201).json({
              success: true,
              message: "All users fetched successfully!",
              allusers,
            });
          })
          .catch((error) => {
            res.status(404).json({
              success: false,
              error: error.message,
            });
          });
    } 
    catch (error) {
      res.status(400).json({
        success: false,
        message: "Internal Server Error",
      });
    }
}

exports.getUser = async (req,res)=>{
    try {
        const userId = await req.params.id;
        User.findById(userId)
          .then((person) => {
            if(!person){
                res.status(401).json({
                  success: false,
                  message: "User Not found!",
                });
            }

            res.status(201).json({
              success: true,
              message: "User fetched successfully!",
              person,
            });

          })
          .catch((error) => {
            res.status(404).json({
              success: false,
              error: error.message,
            });
          });
    } 
    catch (error) {
      res.status(400).json({
        success: false,
        message: "Internal Server Error",
      });
    }
}