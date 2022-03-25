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

export function validateEmail(email: string): string | undefined {
    if (!email) return 'The email is required.';

    if (typeof email !== 'string') {
        return 'The email is not properly formatted.';
    }

    const strength = passwordStrength(email, passwordStrengthOptions);

    if (strength.id < 2) return 'Your email is too weak.';
}

export function validatePassword(password: string): string | undefined {
    if (!password) return 'The password is required.';

    if (typeof password !== 'string') {
        return 'The password is not properly formatted.';
    }

    const strength = passwordStrength(password, passwordStrengthOptions);

    if (strength.id < 2) return 'Your password is too weak.';
}

export function validateUsername(username: string): string | undefined {
    if (!username) return 'The username is required.';

    if (typeof username !== 'string') {
        return 'The username is not properly formatted.';
    }
}
