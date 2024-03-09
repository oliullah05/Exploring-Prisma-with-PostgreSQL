import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async()=>{
// offset pagination
const offsetPaginationData = await prisma.post.findMany({
    skip:5,
    take:2
})




// offset pagination
const cursorBasedPaginationData = await prisma.post.findMany({
    skip:5,
    take:2,
    cursor:{
        id:45
    }
})
// console.log(cursorBasedPaginationData);



// sorting

const sortedData = await prisma.post.findMany({
    orderBy:{
        id:"desc"
    },
    where:{
        title:"title 1"
    },
    skip:2,
    take:2
})
console.log(sortedData);
}

paginationSorting()