import { faUserChef } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
    return (
        <div className="font-nunito font-black uppercase text-5xl text-neutral-500">
            <span>DIETING</span>

            <FontAwesomeIcon icon={faUserChef} className="text-lime-500 mx-1" />

            <span>FIT</span>
        </div>
    );
}
