import { PropsWithChildren } from 'react';
import { Button, ButtonProperties } from './Button';

type Properties = PropsWithChildren<ButtonProperties>;

export const SecondaryButton = (properties: Properties) => {
    return (
        <Button color="gray" {...properties} />
    );
}
