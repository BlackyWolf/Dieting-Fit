import { Button, Container, PrimaryButton, SecondaryButton } from '~/ui';

export default function Ui() {
    return (
        <Container>
            <h1 className="text-6xl font-medium">UI</h1>

            <hr className="my-4" />

            <h3 className="text-4xl font-medium mb-4">Buttons</h3>

            <div className="space-y-4">
                <Button>Default</Button>
                <PrimaryButton>Primary</PrimaryButton>
                <SecondaryButton>Secondary</SecondaryButton>
                <Button disabled>Disabled</Button>
                <Button full={false}>Non-full width</Button>
                <Button full={false} size="sm">Small</Button>
                <Button full={false} size="md">Medium</Button>
                <Button full={false} size="lg">Large</Button>
                <Button full={false} roundness="none">Not Rounded</Button>
                <Button full={false} roundness="sm">Small Rounded</Button>
                <Button full={false} roundness="md">Medium Rounded</Button>
                <Button full={false} roundness="lg">Large Rounded</Button>
                <Button full={false} roundness="pill">Pill/Fully Rounded</Button>
            </div>
        </Container>
    );
}
