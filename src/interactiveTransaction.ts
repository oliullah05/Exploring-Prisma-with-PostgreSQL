import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
    const result = await prisma.$transaction(async (tx) => {
        // query 1
        const getAllPost = await tx.post.findMany({
            where: {
                published: true
            }
        })


        // query 2
        const countUser = await tx.user.count()


        // query 3

        const updateUser = await tx.user.update({
            where:{
                id:400
            },
            data:{
                age:55
            }
        })

        return{
            getAllPost,
            countUser,
            updateUser
            
        }

    })

    console.log(result);
}

interactiveTransaction()