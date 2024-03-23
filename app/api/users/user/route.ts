//@ts-nocheck
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';
import prisma from "../../../../prisma/prisma";


export const GET = async (req:NextRequest) => {
   
    try {
      const url = new URL(req.url)
      const id = url.searchParams.get("id")

      const data = await prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      });
      return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ error: err}, { status: 500 });
    }
};