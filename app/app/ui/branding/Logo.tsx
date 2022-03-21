import { faUserChef } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { joinClasses } from '~/utilities';

type LogoSize = 'sm' | 'md' | 'lg';

interface Properties {
    size?: LogoSize
}

function getSizeClass(size: LogoSize) {
    switch (size) {
        case 'sm':
            return 'sm:text-2xl md:text-3xl lg:text-4xl';

        case 'lg':
            return '';

        default:
            return 'text-5xl';
    }
}

export const Logo = ({ size = 'md' }: Properties) => {
    const classes = joinClasses(
        'font-nunito font-black uppercase text-neutral-500',
        getSizeClass(size)
    );

    return (
        <div className={classes}>
            <span>DIETING</span>

            <FontAwesomeIcon icon={faUserChef} className="text-lime-500 mx-1" />

            <span>FIT</span>
        </div>
    );
}
