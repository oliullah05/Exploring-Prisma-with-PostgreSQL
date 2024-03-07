import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async()=>{
// const result = await prisma.post.create({
//     data:{
//       title:"This is tittle 2"  ,
//       content:"this is content... 2",
//       authorName:"Oliullah 2"
//     }
// })
// console.log(result);


const getAllDataFromDB = await prisma.post.findMany()
console.log(getAllDataFromDB);

}

main()