import { NextResponse } from "next/server";
import { userExists } from "../../../../prisma/middleware/auth";
import prisma from "../../../../prisma/prisma";
import { User } from "../../../../lib/types/user";

export const POST = async ({ email, name, password }: User) => {
    try {
      if (await userExists(email))
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 }
        );
      const data = await prisma.user.create({
        data: {
          email,
          name,
          password,
        },
      });
      return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
};