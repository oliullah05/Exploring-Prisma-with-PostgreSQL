import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const updates = async()=>{
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
const updateMany = await prisma.post.updateMany({
    where:{
        title:"This is tittle"
    },
    data:{
        title:"This is tittle 55"
    }
})

console.log(updateMany);
}

updates()