import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { UrlObject } from 'url';

type ActiveClassName = string | ((isActive: boolean) => string);

type Properties = PropsWithChildren<{
    className: ActiveClassName;
    href: string | UrlObject;
}>;

function getCss(className: ActiveClassName, isActive: boolean) {
    if (typeof className === 'string') return className;

    return className(isActive);
}

function isLinkActive(pathName: string, href: string | UrlObject) {
    if (typeof href === 'string') return pathName === href;

    return href.pathname === pathName;
}

export const ActiveLink = ({ children, className, href }: Properties) => {
    const router = useRouter();
    const isActive = isLinkActive(router.pathname, href);
    const classes = getCss(className, isActive);

    return (
        <Link href={href}>
            <a className={classes}>
                {children}
            </a>
        </Link>
    );
};
