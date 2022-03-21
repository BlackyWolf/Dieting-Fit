import { createHash } from 'crypto';

export function md5(content: string) {
    const hash = createHash('md5');

    hash.update(content);

    const hashedContent = hash.digest('hex');

    return hashedContent;
}
