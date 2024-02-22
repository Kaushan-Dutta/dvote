import { NextResponse,NextRequest } from "next/server";
import { User } from "../../../../lib/types/user";
import { userExists } from "../../../../prisma/middleware/auth";

export const GET = async ({ email, password }: User) => {
    try {
      const isUser = await userExists(email);
      if (!isUser)
        return NextResponse.json(
          { error: "User does not exists" },
          { status: 400 }
        );
      if (isUser.password !== password)
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 400 }
        );
      
      return NextResponse.json({ isUser }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  };