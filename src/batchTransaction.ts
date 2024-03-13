import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();




const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data: {
            useName: "Marifa Mia",
            email: "marifamia@maruf.com",
        }
    })
    
    
    const updateUser = prisma.user.update({
        where: {
            id: 36
        },
    
        data: {
            age: 30
        }
    })
 

    const [userData,updatedUserData]= await prisma.$transaction([
       createUser,updateUser
    ])

    console.log(userData,updatedUserData);
}
batchTransaction()