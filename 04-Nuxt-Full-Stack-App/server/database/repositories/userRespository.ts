import {IUser} from "~/types/IUser";
import prisma from "~/server/database/client";

export async function createUser(data: IUser) {
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            loginType: data.loginType,
            password: data.password
        }
    })
}