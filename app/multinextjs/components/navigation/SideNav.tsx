import { joinClasses } from '../../utilities/css';
import { ActiveLink } from './ActiveLink';

const isLinkActive = (isActive: boolean) =>joinClasses(
    'px-4 py-2 rounded-md transition duration-150 mb-2',
    isActive ? 'bg-slate-500 text-white hover:bg-slate-600' : 'hover:bg-slate-300'
);

export const SideNav = () => {
    return (
        <nav className="sidenav md:w-64 lg:w-96 border-r bg-slate-50 flex flex-col p-4">
            <ActiveLink href="/" className={isLinkActive}>
                Dashboard
            </ActiveLink>
            <ActiveLink href="/my/recipes" className={isLinkActive}>
                Recipes
            </ActiveLink>
            <ActiveLink href="/my/foods" className={isLinkActive}>
                Foods
            </ActiveLink>
            <ActiveLink href="/my/workouts" className={isLinkActive}>
                Workouts
            </ActiveLink>
            <ActiveLink href="/my/exercises" className={isLinkActive}>
                Exercises
            </ActiveLink>
        </nav>
    );
};
