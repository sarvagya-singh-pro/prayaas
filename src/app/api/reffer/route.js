import { NextResponse } from "next/server";
import prisma from "../../../../db/prisma";

export const POST = async (req) => {
    // Get all items

// Generate a UUID v4
const crypto = require("crypto");
const {name}=await req.json()
// const name = JSON.parse(req.body)["name"]
let uuid = crypto.randomUUID();
    console.log("ok")
    const allUsers = await prisma.user.findUnique({
        where:{
            name:name,
        }
    });
    if (allUsers){
        return NextResponse.json({"error":"Name Already In Use"})

    }
    else{
        const newUser = await prisma.user.create({
            data: {
              name: name,
              uuid: uuid.toString(),
              
            },
          });
    }
    return NextResponse.json({ "ok":uuid });
  };