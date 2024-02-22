import { NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";
import { Campaign } from "@prisma/client";

export const POST = async ({name,description,endDate}:Campaign) => {
    try {
      const data = await prisma.campaign.create({
        data:{
            name,
            description,
            endDate,
        }  
      });
      return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
};