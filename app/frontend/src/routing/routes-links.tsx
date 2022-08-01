import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faIdCard } from '@fortawesome/pro-duotone-svg-icons';

/**
 * Represents a navigable link.
 */
export interface UiLink {
    icon: IconDefinition;
    name: string;
    to: string;
}

/**
 * An array of items to use for building the navigation bar.
 */
export const navigation: UiLink[] = [
    { icon: faHouse, name: 'Dashboard', to: '/' }
];

export const userMenu: UiLink[] = [
    { icon: faIdCard, name: 'Profile', to: '/user/profile' }
];
