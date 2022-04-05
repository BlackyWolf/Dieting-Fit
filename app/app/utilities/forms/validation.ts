import { Options, passwordStrength } from 'check-password-strength';

const passwordStrengthOptions: Options<string> = [
    {
        id: 0,
        value: "Too weak",
        minDiversity: 0,
        minLength: 0
    },
    {
        id: 1,
        value: "Weak",
        minDiversity: 2,
        minLength: 8
    },
    {
        id: 2,
        value: "Medium",
        minDiversity: 4,
        minLength: 16
    },
    {
        id: 3,
        value: "Strong",
        minDiversity: 4,
        minLength: 24
    }
];

function isBoolean(data: unknown, parameterName: string) {
    if (typeof data !== 'boolean') {
        return `The ${parameterName} field is not properly formatted.`;
    }
}

function isNotNull(data: unknown, parameterName: string) {
    if (!data) return `The ${parameterName} is required`;
}

function isString(data: unknown, parameterName: string) {
    if (typeof data !== 'string') {
        return `The ${parameterName} is not properly formatted.`;
    }
}

export function validateEmail(email: string): string | undefined {
    return isNotNull(email, 'email') || isString(email, 'email');
}

export function validatePassword(password: string, strengthCheck = true): string | undefined {
    const error = isNotNull(password, 'password') || isString(password, 'password');

    if (error) return error;

    if (strengthCheck) {
        const strength = passwordStrength(password, passwordStrengthOptions);

        if (strength.id < 2) return 'Your password is too weak.';
    }
}

export function validateRememberMe(rememberMe?: boolean): string | undefined {
    if (!rememberMe) return;

    return isBoolean(rememberMe, 'remember me');
}

export function validateUsername(username: string): string | undefined {
    return isNotNull(username, 'username') || isString(username, 'username');
}
