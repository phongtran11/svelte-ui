interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const FormFieldErrors: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    id?: string;
    asChild?: boolean;
    el?: HTMLDivElement;
} & import("svelte/elements").HTMLAttributes<HTMLDivElement> & {
    errorClasses?: string | undefined | null;
}, {
    default: {
        errors: string[];
        fieldErrorsAttrs: {
            id: string;
            'data-fs-error': string | undefined;
            'data-fs-field-errors': string;
            'aria-live': "assertive";
        };
        errorAttrs: {
            'data-fs-field-error': string;
            'data-fs-error': string | undefined;
        };
    };
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        errors: string[];
        fieldErrorsAttrs: {
            id: string;
            'data-fs-error': string | undefined;
            'data-fs-field-errors': string;
            'aria-live': "assertive";
        };
        errorAttrs: {
            'data-fs-field-error': string;
            'data-fs-error': string | undefined;
        };
    };
}, {}, string>;
type FormFieldErrors = InstanceType<typeof FormFieldErrors>;
export default FormFieldErrors;
