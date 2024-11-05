import * as FormPrimitive from 'formsnap';
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
declare const FormDescription: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<FormPrimitive.DescriptionProps, {
    default: {
        descriptionAttrs: {
            id: string;
            'data-fs-error': string | undefined;
            'data-fs-description': string;
        };
    };
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        descriptionAttrs: {
            id: string;
            'data-fs-error': string | undefined;
            'data-fs-description': string;
        };
    };
}, {}, string>;
type FormDescription = InstanceType<typeof FormDescription>;
export default FormDescription;
