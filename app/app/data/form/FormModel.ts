export type FormModel<TData> = {
    formError?: string;
    fieldErrors: Record<string, string | undefined>;
    fields: TData;
};

export function isFormValid(formModel: FormModel<any>) {
    return !Object.values(formModel.fieldErrors).some(Boolean);
}
