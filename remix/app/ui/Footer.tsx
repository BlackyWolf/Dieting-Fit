import { joinClasses } from '~/utilities';
import { Container } from './Container';

interface Properties {
    margin?: string;
}

export const Footer = ({ margin = '' }: Properties) => {
    const classes = joinClasses(margin);

    return (
        <footer className={classes}>
            <Container padding="py-4">
                <p>Copyright &copy; BlackyWolf. All rights reserved.</p>
            </Container>
        </footer>
    );
}
