import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient()

const aggregates = async()=>{
const avarageAge= await prisma.user.aggregate({
    _avg:{
        age:true
    }
})

console.log(avarageAge);
}

aggregates()