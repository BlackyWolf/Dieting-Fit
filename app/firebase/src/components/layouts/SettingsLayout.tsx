import { joinClasses } from '@/utilities/css';
import { NavLink, Outlet } from 'react-router-dom';

function getLinkCss({ isActive }: { isActive: boolean }) {
    return joinClasses(
        'px-4 py-2 block rounded-md mb-2',
        isActive ? 'bg-blue-500 text-white' : 'hover:bg-slate-200'
    )
}

export const SettingsLayout = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold mb-6">Settings</h1>

            <div className="grid grid-cols-3">
                <nav className="pr-4">
                    <NavLink to="/account/settings/profile" className={getLinkCss}>
                        Profile
                    </NavLink>
                    <NavLink to="/account/settings/security" className={getLinkCss}>
                        Security
                    </NavLink>
                </nav>

                <div className="col-span-2 pl-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
