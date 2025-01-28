import {RegistrationRequest} from "~/types/IRegistration";

export async function validate(data: RegistrationRequest) {
    const errors = new Map<string, { check: InputValidation }>()

    for (const [key, value] of Object.entries(data)) {
        let val = await runChecks(key, value)
        if (val.hasError) errors.set(key, {'check': val})
    }
    return errors
}

async function runChecks(key: string, value: string): Promise<InputValidation> {
    const check: InputValidation = {
        value,
        isBlank: false,
        lengthMin8: true,
        key,
        hasError: false
    }

    if (value == '' || value == null) {
        check.isBlank = true
        check.hasError = true
        check.errorMessage = `${key} is required`
        return check
    }

    if (key == 'password') {
        if (value.length < 8) {
            check.hasError = true
            check.errorMessage = `password must e at least 8 character`
        }
        check.lengthMin8 = false
    }

    if (key == 'email') {
        const isValidEmail = validateEmail(value)

        if (!isValidEmail) {
            check.emailTaken = true
            check.hasError = true
            check.errorMessage = `${value}, is not a valid email!`
            return check
        }
    }
    return check
}

const validateEmail = (input: string): boolean => !!input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
