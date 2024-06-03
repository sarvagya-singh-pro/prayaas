import { NextResponse } from "next/server";
import prisma from "../../../../db/prisma";

export const POST = async (req) => {
    
    const {uuid,ip}=await req.json()
    console.log(ip)
    try{
      const existingRefer = await prisma.refer.findUnique({
        where: { ip:ip },
      });
  
      if (existingRefer) {
        const updatedRefer = await prisma.refer.update({
          where: { ip },
          data: { fromId: uuid },
        });
        console.log('Referral updated:', updatedRefer);
        return updatedRefer;
      } else {
        const newRefer = await prisma.refer.create({
          data: {
            from: { connect: { uuid: uuid } },
            ip:ip,
          },
        });
        console.log('Referral created:', newRefer);
   
      }
      return NextResponse.json({"ok":200})
    }

catch(error){
  console.error('Error creating referral:', error);
    return NextResponse.json({error:"wrong uid"})
}


}