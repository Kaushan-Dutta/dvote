//@ts-nocheck
import { NextResponse,NextRequest } from "next/server";
import prisma from "../../../prisma/prisma";
import { userExists } from "../../../prisma/middleware/auth";
import { Campaign } from "../../../lib/types/campaign";

export const POST = async (req:Campaign) => {
    try {
      const { name, description, endDate, candidates } = await req.json();
      const data = await prisma.campaign.create({
        data:{
            name,
            description,
            endDate,
        }  
      });
      for(let candidate in  candidates ){
        const user=await userExists(candidate.email);
        if(!user){
            return NextResponse.json({ error: "User does not exists" }, { status: 400 });
        }
        await prisma.candidate.create({
            data:{
                userId:user.id,
                campaignId:data.id
            }
        });
      }

      return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

};