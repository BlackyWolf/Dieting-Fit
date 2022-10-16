import { joinClasses } from '@/utilities/css';
import { faCircleCheck, faCircleInfo, faCircleXmark, faTriangleExclamation } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';

type AlertType = 'danger' | 'info' | 'success' | 'warning'

type Properties = PropsWithChildren<{
    className?: string;
    title?: string;
    type: AlertType;
}>;

function getBackgroundCss(type: AlertType) {
    switch (type) {
        case 'danger': return 'bg-red-50';
        case 'info': return 'bg-blue-50';
        case 'success': return 'bg-green-50';
        case 'warning': return 'bg-yellow-50';
    }
}

function getBodyCss(type: AlertType) {
    switch (type) {
        case 'danger': return 'text-red-700';
        case 'info': return 'text-blue-700';
        case 'success': return 'text-green-700';
        case 'warning': return 'text-yellow-700';
    }
}

function getIcon(type: AlertType) {
    switch (type) {
        case 'danger': return faCircleXmark;
        case 'info': return faCircleInfo;
        case 'success': return faCircleCheck;
        case 'warning': return faTriangleExclamation;
    }
}

function getIconCss(type: AlertType) {
    switch (type) {
        case 'danger': return 'text-red-400';
        case 'info': return 'text-blue-400';
        case 'success': return 'text-green-400';
        case 'warning': return 'text-yellow-400';
    }
}

function getTitleCss(type: AlertType) {
    switch (type) {
        case 'danger': return 'text-red-800';
        case 'info': return 'text-blue-800';
        case 'success': return 'text-green-800';
        case 'warning': return 'text-yellow-800';
    }
}

export const Alert = ({ children, className, title, type }: Properties) => {
    const backgroundCss = joinClasses('rounded-md p-4', getBackgroundCss(type));
    const bodyCss = joinClasses('mt-2 text-sm', getBodyCss(type));
    const titleCss = joinClasses('text-sm font-medium', getTitleCss(type));

    return (
        <div className={className}>
            <div className={backgroundCss}>
                <div className="flex">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon icon={getIcon(type)} size="lg" className={getIconCss(type)} aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                        {title && <h3 className={titleCss}>{title}</h3>}
                        {children && (
                            <div className={bodyCss}>
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

