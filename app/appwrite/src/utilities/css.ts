export const joinClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');
