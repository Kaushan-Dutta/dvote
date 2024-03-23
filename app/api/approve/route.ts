//@ts-nocheck
import { NextResponse,NextRequest } from "next/server";
import prisma from "../../../prisma/prisma";
import { verifyToken } from "../../../prisma/middleware/auth";

export const PUT = verifyToken(async (req:NextRequest) => {
  try {
    if(req.user.role=="ADMIN"){

      const url = new URL(req.url)
      const id = url.searchParams.get("id")
      const approve= url.searchParams.get("approve");
      
      if(approve=='true'){
          const data = await prisma.campaign.update({
              where: {
                  id: id,
              },
              data:{
                  isApproved:approve
              }
          });
          return NextResponse.json({ data }, { status: 200 });

          
      }
      await prisma.campaign.delete({
          where: {
              id: id,
          }
      });
      return NextResponse.json({ message:"Apply Rejected" }, { status: 200 });
    }  
    return NextResponse.json({ message:"Not Admin" }, { status: 200 });

  } catch (err:any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
});