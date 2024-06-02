import { NextResponse } from "next/server";
import prisma from "../../../../db/prisma";

export const POST = async (req) => {
    const {uuid}=await req.json()
    try{
    const user=await prisma.user.update({
        where:{
            uuid:uuid
        },
        data:{
            referal:{
                increment:1
            },
        }
    })
    return NextResponse.json({"ok":200})
}
catch{
    return NextResponse.json({error:"wrong uid"})
}


}