const User = require('../model/user_model');
const zod = require('zod');



const updateBody = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})


exports.updateUser = async (req, res) => {
    try {

        const { success } = updateBody.safeParse(req.body);

        if (!success) {
            return res.status(400).json({
                success: false,
                message: "Invalid data"
            })
        }

        const user = await User.updateOne({_id: req.userId}, req.body);
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })

    }

}


// to fetch all users and filter via fistName/lastName 

exports.getUsers = async (req, res) => {
    try {

    const filter=req.query.filter || "";
    console.log("filter string",filter);




    // The $regex operator in MongoDB is used to perform regular expression pattern matching on string fields.
    // It allows you to search for documents where a specific field matches a regular expression pattern.
    // const users=await User.find({
    //     $or:[
    //         {
    //             firstName:{
    //                 "$regex":filter,
    //             },
    //             lastName:{
    //                 "$regex":filter
    //             }
    //         }
    //     ]
    // })
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    console.log("users",users);

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}