import {v4 as uuidv4} from 'uuid'
import {IUser} from "~/types/IUser";
import {CompatibilityEvent, setCookie} from "h3";
import {createSession, getSessionByAuthToken} from "~/server/database/repositories/sessionRepository";
import {sanitizeUserForFrontend} from "~/server/services/userService";

export async function makeSession(user: IUser, event: CompatibilityEvent) {
    const authToken = uuidv4().replaceAll('-', '')
    const session = await createSession({authToken, userId: user.id})
    const userId = session.userId

    if (userId){
        setCookie(event, 'auth_token', authToken, {path: '/', httpOnly: true})
        return getSessionByAuthToken(authToken)
    }
    throw Error('Error Creating Session')
}

export async function getUserBySessionToken(authToken: string): Promise<IUser> {
    const session = await getSessionByAuthToken(authToken)

    return sanitizeUserForFrontend(session.user)
}