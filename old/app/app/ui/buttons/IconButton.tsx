import { PropsWithChildren } from 'react';
import { Button, ButtonProperties } from './Button';

type Properties = PropsWithChildren<ButtonProperties>;

export const IconButton = (properties: Properties) => {
    return (
        <Button color="transparent" {...properties} roundness="pill" size="sm" full={false} />
    );
}
