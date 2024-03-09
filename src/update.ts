import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const updates = async () => {
    // single update

    // const singleUpdate = await prisma.post.update({
    //     where:{
    //         id:2
    //     },
    //     data:{
    //         authorName:"1",

    //     }
    // })



    // update many data
    // const updateMany = await prisma.post.updateMany({
    //     where:{
    //         title:"This is tittle"
    //     },
    //     data:{
    //         title:"This is tittle 55"
    //     }
    // })


    // update or insert


    const upsertData = await prisma.post.upsert({
        where: {
            id: 600
        },
        update: {
            title: "updated tittle 6",
            authorName:"oli 43"
        },
        create: {
            title: "title 1",
            content:"content 1",
          
        }
    })


    console.log(upsertData);
}

updates()