import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async()=>{
    // fluent api
    // find user data with his all post
    // const userDataWithHisPost = await prisma.user.findUnique({
    //     where:{
    //         id:1
    //     }
    // }).post()



    const userDataWithHisPost = await prisma.user.findUnique({
        where:{
            id:3
        }
    }).profile()




    // mongoose populate style
    // const userDataWithHisPost = await prisma.user.findUnique({
    //     where:{
    //         id:3
    //     },
    //     include:{
    //         post:true
    //     }
    // })
    console.log(userDataWithHisPost);
}

relationalQueries()