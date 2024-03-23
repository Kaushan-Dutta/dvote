import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';
import jwt  from 'jsonwebtoken';

export const GET =   (req: NextRequest) => {
    
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
        throw new Error('Authorization token not provided');
    }
    try {
        return NextResponse.json({user:jwt.verify(token, process.env.JWT_SECRET!)},{status:200}); 
  
    } catch (error) {
        throw new Error('Invalid token');
    }
   
};
  