import bcrypt from "bcryptjs"

const users = [
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Smeet Kalamkar",
        email:"smeet@example.com",
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:"Ayush Chaturvedi",
        email:"ayush@example.com",
        password:bcrypt.hashSync('123456',10)
    }
]

export default users