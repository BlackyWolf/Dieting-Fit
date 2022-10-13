import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useForm } from './Form';

interface Properties extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    name: string;
}

export const Input = ({ className, id, label, name, ...rest }: Properties) => {
    const { register } = useForm();

    return (
        <div className={className}>
            {label && (
                <label htmlFor={id || name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <input
                id={id || name}
                {...register(name)}
                {...rest}
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
        </div>
    );
};
