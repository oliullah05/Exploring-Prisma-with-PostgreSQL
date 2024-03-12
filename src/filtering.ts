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
            // equals:"user1@gmail.com",
            // equals:"user1@gmail.com"
        }
    }
})



const userNameArrey =["user 1","user 2","user 5"]

// const userNamesByArrey = await prisma.user.findMany({
//     where:{
//         OR:userNameArrey.map(user=>({useName:user}))
//     }
// })
const userNamesByArrey = await prisma.user.findMany({
    where:{
        useName:{
            in:userNameArrey
        }
    }
})




// in dept data populate

const inDeptPopulateData = await prisma.user.findUnique({
    where:{
        id:1
    },
    include:{
        post:{
            include:{
                postCategory:{
                    include:{
                        category:true
                    }
                }
            }
        }
    }
})


    console.dir(inDeptPopulateData,{depth:Infinity});
}

filtering()