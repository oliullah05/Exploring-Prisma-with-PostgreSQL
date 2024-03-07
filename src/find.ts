import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async()=>{
// find all
const findFirst =await prisma.post.findFirstOrThrow({
    where:{
        id:2
    }
})


// find unique
const findUnique =await prisma.post.findUniqueOrThrow({
    where:{
        id:200
    }
})





const getAllDataFromDB = await prisma.post.findMany()
console.log({findUnique});

}

main()