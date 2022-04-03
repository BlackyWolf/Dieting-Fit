export type FormModel<TData> = {
    fieldErrors: Record<string, string | undefined>;
    fields: TData;
    formError?: string;
};

export function isFormValid(formModel: FormModel<any>) {
    return !Object.values(formModel.fieldErrors).some(Boolean);
}
