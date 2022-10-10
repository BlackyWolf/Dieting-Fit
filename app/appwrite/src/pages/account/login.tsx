import { Form, Input } from '@/components';

export const Login = () => {
    function onSubmit(data: any) {

    }

    return (
        <Form onSubmit={onSubmit}>
            <Input name="email" />
        </Form>
    );
};
