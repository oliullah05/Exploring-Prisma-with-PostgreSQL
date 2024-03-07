import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async()=>{
// create single data into db

// const result = await prisma.post.create({
//     data:{
//       title:"This is tittle 2"  ,
//       content:"this is content... 2",
//       authorName:"Oliullah 2"
//     }
// })
// console.log(result);





// create many data into db

const creteMany = await prisma.post.createMany({
    data:[
        {
            title:"This is tittle 5"  ,
                  content:"this is content... 2",
                  authorName:"Oliullah 2"
        },
        {
            title:"This is tittle 6"  ,
                  content:"this is content... 2",
                  authorName:"Oliullah 2"
        },
    ]
})

console.log(creteMany);
}

main()