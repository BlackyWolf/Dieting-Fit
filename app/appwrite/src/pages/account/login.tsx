import { Form, Input } from '@/components';
import { Button } from '@/components/Button';

export const Login = () => {
    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input name="email" required />
            <Input name="password" type="password" autoComplete="current-password" required />

            <Button color="blue" fullWidth>
                Login
            </Button>
        </Form>
    );
};
