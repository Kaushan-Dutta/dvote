import { NextResponse,NextRequest } from "next/server";
import prisma from "../../../prisma/prisma";
import { userExists } from "../../../prisma/middleware/auth";
import { Campaign } from "../../../lib/types/campaign";
import { verifyToken } from "../../../prisma/middleware/auth";

export const POST =verifyToken( async (req:NextRequest) => {
    try {
      const { name, description, endDate, candidates } = await req.json();
      const create = await prisma.campaign.create({
        data:{
            name,
            description,
            endDate,
        }  
      });
      for(let i=0;i<candidates.length;i++) {
        const user=await userExists(candidates[i].email);
        if(!user){
            return NextResponse.json({ error: "User does not exists" }, { status: 400 });
        }
        await prisma.candidate.create({
            data:{
                userId:user.id,
                campaignId:create.id
            }
        });
      }

      return NextResponse.json({ create }, { status: 200 });
    } catch (err:any) {
      return NextResponse.json({ error: err.message}, { status: 500 });
    }

});