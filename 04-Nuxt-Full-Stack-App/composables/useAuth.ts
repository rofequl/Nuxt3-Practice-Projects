import {ISession} from "~/types/ISession";
import {useRouter, useState} from "#app";

export async function userRegistration(name: string, email: string, password: string): Promise<FormValidation> {
    try {
        const {data, error} = await useFetch<ISession>('/api/auth/register', {
            method: 'POST',
            body: {data: {name, email, password}},
            server: false,
            key: name + email + password
        })
        if (error.value) {
            type ErrorData = {
                data: ErrorData
            }
            const errorData = error.value as unknown as ErrorData
            const errors = errorData.data.data as unknown as string
            const res = JSON.parse(errors)
            const errorMap = new Map<string, { check: InputValidation; }>(Object.entries(res));

            return {hasErrors: true, errors: errorMap}
        }
        if (data) {
            useState('user').value = data
            await useRouter().push('/dashboard')
        }
    } catch (e) {
        console.log('Error: ' + e.toString())
    }
}