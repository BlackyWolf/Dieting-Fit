import { argon2id, hash, verify } from 'argon2';
import { createHash } from 'crypto';

const passwordOptions = {
    hashLength: 128,
    memoryCost: 2 ** 16,
    type: argon2id
};

export function md5(content: string): string {
    const hash = createHash('md5');

    hash.update(content);

    const hashedContent = hash.digest('hex');

    return hashedContent;
}

export async function hashPassword(password: string): Promise<string> {
    return await hash(password, passwordOptions)
}

export async function verifyPassword(hash: string, password: string): Promise<boolean> {
    return await verify(hash, password, passwordOptions);
}
