interface Properties {
    className?: string;
}

export const SideNav = ({ className }: Properties) => {
    return (
        <nav className={className}>
            <a>Recipes</a>
        </nav>
    );
};
