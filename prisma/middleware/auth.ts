import prisma from "../prisma";

export const userExists = (email: string) => {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
};