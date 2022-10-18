import { createStytchUIClient } from '@stytch/nextjs/ui'
import { STYTCH_PUBLIC_TOKEN } from './variables';

export const stytch = createStytchUIClient(STYTCH_PUBLIC_TOKEN);
