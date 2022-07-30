/**
 * Takes in an array of class names and joins them into one string for HTML.
 *
 * @param classes The classes to join together.
 *
 * @returns The single HTML className string.
 */
export const joinClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');
