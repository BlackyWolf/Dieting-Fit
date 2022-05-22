export function joinClasses(...classes: Array<string | undefined>) {
    return classes.filter(x => x).join(' ');
}
