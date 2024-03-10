import { PrismaClient, UserROle } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
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

    // const creteMany = await prisma.post.createMany({
    //     data:[
    //         {
    //             title:"This is tittle 5"  ,
    //                   content:"this is content... 2",
    //                   authorName:"Oliullah 2"
    //         },
    //         {
    //             title:"This is tittle 6"  ,
    //                   content:"this is content... 2",
    //                   authorName:"Oliullah 2"
    //         },
    //     ]
    // })

    // console.log(creteMany);




    // const createUser = await prisma.user.create({
    //     data: {
    //         useName: "user 2",
    //         email: "user2@gmail.com",
    //         role:UserROle.user
    //     }
    // })

    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio:"This is bio",
    //         userId:3
    //     }
    // })


    // const createCategory = await prisma.category.create({
    //     data:{
    //         name:"softwere engenering"
    //     }
    // })




    const createPost = await prisma.post.create({
        data: {
            title: "this is title..",
            content: "this is content...",
            authorId: 1,
            postCategory: {

                create: [
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 3
                    }
                ]



                // create: {
                //     categoryId: 2

                //     category: {

                //         connect:
                //         {
                //             id: 3
                //         }

                //     }
                // }
            }

        },
        include: {
            postCategory: true
        }
    })



    console.log(createPost);






}

main()