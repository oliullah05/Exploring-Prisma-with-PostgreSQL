import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const deleteData = async()=>{
//  single  data delete

// const deleteOne = await prisma.post.delete({
//     where:{
//         id:1
//     }
// })


//  delete many data


const deleteMany = await prisma.post.deleteMany({
    where:{
        title:"This is tittle 55"
    }
})


//  delete all data 

const deleteAll = await prisma.post.deleteMany({})

}

deleteData()