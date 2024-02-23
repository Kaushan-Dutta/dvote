import { NextRequest, NextResponse } from 'next/server';
import { userExists } from '../../../../prisma/middleware/auth';
import prisma from '../../../../prisma/prisma';

export const POST = async (req:NextRequest) => {
  
  const { name, email, password } = await req.json();

  try {
    if (await userExists(email))
      return NextResponse.json({ message:"User with same credentials"}, { status: 400 });
    const data = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err}, { status: 500 });
  }
};
