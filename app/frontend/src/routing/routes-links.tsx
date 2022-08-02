import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faChartUser,
    faIdCard,
    faLeafyGreen,
    faPlateUtensils,
    faPotFood
} from '@fortawesome/pro-duotone-svg-icons';

/**
 * Represents a navigable link.
 */
export interface UiLink {
    icon?: IconDefinition;
    name: string;
    to: string;
}

/**
 * An array of items to use for building the navigation bar.
 */
export const navigation: UiLink[] = [
    { icon: faChartUser, name: 'Dashboard', to: '/dashboard' },
    { icon: faPlateUtensils, name: 'My Meal Plan', to: '/mealplan' },
    { icon: faPotFood, name: 'Recipes', to: '/recipes' },
    { icon: faLeafyGreen, name: 'Foods', to: '/foods' }
];

export const userMenu: UiLink[] = [
    { icon: faIdCard, name: 'Profile', to: '/user/profile' }
];
