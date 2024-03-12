import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const aggregates = async () => {

    // avarage age
    const avarageAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })

    // sum of ages

    const sumOfAges = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    })


    // count of all table data 
    const countDataByAnyField = await prisma.post.aggregate({
        _count: {
            //    _all:true,
            //    age:true
            title: true
        },
        where: {
            published: true
        }
    })

    // count of all table data another way
    const countDataAnotherWay = await prisma.user.count()



    // find max age
    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })


    // find min age
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })

    console.log(minAge);
}

aggregates()