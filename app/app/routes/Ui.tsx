import { Button, Container, Heading, PrimaryButton, SecondaryButton } from '~/ui';

export default function Ui() {
    return (
        <Container>
            <Heading size="1" divider>UI</Heading>

            <Heading size="3" margin="mb-4">Buttons</Heading>

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

            <Heading size="3" margin="my-4">Headings</Heading>

            <Heading size="5" divider>With divider</Heading>

            <Heading size="1">h1</Heading>
            <Heading size="2">h2</Heading>
            <Heading size="3">h3</Heading>
            <Heading size="4">h4</Heading>
            <Heading size="5">h5</Heading>
            <Heading size="6">h6</Heading>
        </Container>
    );
}
