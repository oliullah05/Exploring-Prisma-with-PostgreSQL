import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async()=>{
const getAllPosts = await prisma.$queryRaw `select * from posts`

// delete all users forcefully

await prisma.$queryRaw`TRUNCATE table "users" cascade`
await prisma.$queryRaw`TRUNCATE table "categories" cascade`

}

rawQuery()

