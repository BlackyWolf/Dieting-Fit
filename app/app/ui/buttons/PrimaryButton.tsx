import { PropsWithChildren } from 'react';
import { Button, ButtonProperties } from './Button';

type Properties = PropsWithChildren<ButtonProperties>;

export const PrimaryButton = (properties: Properties) => {
    return (
        <Button color="sky" {...properties} />
    );
}
