import {RegistrationRequest} from "~/types/IRegistration";
import {validate} from "~/server/services/validator";
import {IUser} from "~/types/IUser";


export async function validateUser(data: RegistrationRequest) {
    const errors = await validate(data)
    if (errors.size > 0) return {hasErrors: true, errors}
    return {hasErrors: false}
}

export function sanitizeUserForFrontend(user: IUser | undefined): IUser {
    if (user) {
        delete user.password;
        delete user.loginType;
        return user
    } else return user
}