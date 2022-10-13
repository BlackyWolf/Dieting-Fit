import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { SubmitHandler, useForm as useHookForm, UseFormRegister } from 'react-hook-form';

interface FormState {
    data?: any;
    register: UseFormRegister<any>;
}

const defaultState: FormState = {
    register: () => ({}) as any
};

const FormContext = createContext(defaultState);

export const useForm = () => useContext(FormContext);

type Properties = PropsWithChildren<{
    className?: string;
    defaultValues?: any;
    onSubmit: SubmitHandler<any>;
}>;

export const Form = ({ children, className, defaultValues, onSubmit }: Properties) => {
    const { handleSubmit, register } = useHookForm({ defaultValues });

    const state: FormState = {
        register
    };

    return (
        <FormContext.Provider value={state}>
            <form onSubmit={handleSubmit(onSubmit)} className={className}>
                {children}
            </form>
        </FormContext.Provider>
    );
};
