
import { joinClasses } from '@/utilities/css';
import { faUserChef } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type LogoSize = 'sm' | 'md' | 'lg';

interface Properties {
    className?: string;
    resize?: boolean;
    size?: LogoSize;
}

function getSizeClass(size: LogoSize, resize: boolean) {
    switch (size) {
        case 'sm':
            return resize ? 'sm:text-2xl md:text-3xl lg:text-4xl' : 'text-3xl';

        case 'lg':
            return '';

        default:
            return 'text-5xl';
    }
}

/**
 * A logo to use for branding in the app when needed.
 *
 * @param properties Used to configure the logo styling.
 */
export const Logo = ({ className, resize = false, size = 'md' }: Properties) => {
    const classes = joinClasses(
        'font-nunito font-black uppercase text-neutral-500',
        getSizeClass(size, resize),
        className
    );

    return (
        <div className={classes}>
            <span>DIETING</span>

            <FontAwesomeIcon icon={faUserChef} className="text-lime-500 mx-1" />

            <span>FIT</span>
        </div>
    );
};
