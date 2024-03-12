import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[
        {
            emit:"event",
            level:"query"
        }
    ]
});
prisma.$on("query",(e)=>{
    console.log(e);
 
})
const loggin = async()=>{
    const getAllFromDb =await prisma.post.findMany()
    // console.log(getAllFromDb);
}

loggin()