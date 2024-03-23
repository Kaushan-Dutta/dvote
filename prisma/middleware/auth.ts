import prisma from "../prisma";
import jwt  from 'jsonwebtoken';
import { User } from "../../lib/types/user";
import dotenv from 'dotenv';
import { NextRequest,NextResponse } from "next/server";

dotenv.config();

declare module 'next/server' {
  interface NextRequest {
    user?: User; 
  }
}
export const userExists = (email: string) => {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
};

export const createToken=({id,email,name,role}:User)=>{
     return jwt.sign({id,email,name,role},process.env.JWT_SECRET!,{expiresIn:'1d'});  
}

