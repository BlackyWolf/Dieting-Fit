import { faUserChef } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { joinClasses } from '~/utilities';

type LogoSize = 'sm' | 'md' | 'lg';

interface Properties {
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

export const Logo = ({ resize = false, size = 'md' }: Properties) => {
    const classes = joinClasses(
        'font-nunito font-black uppercase text-neutral-500',
        getSizeClass(size, resize)
    );

    return (
        <div className={classes}>
            <span>DIETING</span>

            <FontAwesomeIcon icon={faUserChef} className="text-lime-500 mx-1" />

            <span>FIT</span>
        </div>
    );
}
