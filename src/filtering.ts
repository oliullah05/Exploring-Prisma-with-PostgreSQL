import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const filtering = async () => {

    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "title"
                    },

                },
                {
                    published: false
                }
            ]
        }
    })



    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "title"
                    }
                },
                {
                    published: false
                }
            ]
        }
    })





const notFiltering = await prisma.post.findMany({
    where:{
        NOT:[
            {
                title:{
                    contains:"this"
                }
            }
        ]
    }
})




const startsWith = await prisma.user.findMany({
    where:{
        email:{
            startsWith:"user1"
        }
    }
})


    console.log(startsWith);
}

filtering()