import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useForm } from './Form';

interface Properties extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    name: string;
}

export const Input = ({ className, id, label, name, type, ...rest }: Properties) => {
    const { register } = useForm();

    return (
        <div className={className}>
            {label && (
                <label htmlFor={id || name}>{label}</label>
            )}

            <input id={id || name} {...register(name)} {...rest} />
        </div>
    );
};
