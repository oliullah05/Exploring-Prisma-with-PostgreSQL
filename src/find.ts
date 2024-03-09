import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async()=>{
// find all

const findAll = await prisma.post.findMany({
    select:{
        authorName:true
    }
})



// find first

const findFirst =await prisma.post.findFirstOrThrow({
    where:{
        id:45
    }
})


// find unique
const findUnique =await prisma.post.findUniqueOrThrow({
    where:{
        id:42
    },
    select:{
        title: false,
    content: true,
    // authorName: true,
    }
})





const getAllDataFromDB = await prisma.post.findMany()
console.log({findAll});

}

main()