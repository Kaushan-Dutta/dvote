import { NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";

export const GET = async () => {
  try {
    const data = await prisma.campaign.findMany();
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
// {
//   include:{
//     candidates:{
//       include:{
//         user:{
//           select:{
//             email:true,
//             name:true
//           }
//         }
//       },
//     }
//   }
// }