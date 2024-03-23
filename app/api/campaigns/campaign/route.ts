//@ts-nocheck
import { NextResponse,NextRequest } from "next/server";
import prisma from "../../../../prisma/prisma";

export const GET = async (req:NextRequest) => {
  try {
    const url = new URL(req.url)
    const id = url.searchParams.get("id")

    const data = await prisma.campaign.findUnique({
        where: {
            id: id,
        },
        include:{
            candidates:{
                include:{
                    user:true
                }
            }
        }
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};