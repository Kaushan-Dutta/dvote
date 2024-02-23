import { NextResponse,NextRequest } from "next/server";
import { userExists } from "../../../../prisma/middleware/auth";

export const GET = async (req:NextRequest) => {
    try {
      const url = new URL(req.url)
      const email = url.searchParams.get("email")
      const password = url.searchParams.get("password")
      
      const isUser = await userExists(email!);
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