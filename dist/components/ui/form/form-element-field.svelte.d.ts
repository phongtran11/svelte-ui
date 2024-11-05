import type { FormPathLeaves } from 'sveltekit-superforms';
import type { HTMLAttributes } from 'svelte/elements';
import * as FormPrimitive from 'formsnap';
declare class __sveltets_Render<T extends Record<string, unknown>, U extends FormPathLeaves<T>> {
    props(): FormPrimitive.ElementFieldProps<T, U> & HTMLAttributes<HTMLDivElement>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            constraints: Partial<{}> | undefined;
            errors: string[];
            tainted: boolean;
            value: never;
        };
    };
    bindings(): string;
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends Record<string, unknown>, U extends FormPathLeaves<T>>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T, U>['props']> & {
        children?: any;
    }>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T, U>['props']>, ReturnType<__sveltets_Render<T, U>['events']>, ReturnType<__sveltets_Render<T, U>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T, U>['bindings']>;
    } & ReturnType<__sveltets_Render<T, U>['exports']>;
    <T extends Record<string, unknown>, U extends FormPathLeaves<T>>(internal: unknown, props: ReturnType<__sveltets_Render<T, U>['props']> & {
        $$events?: ReturnType<__sveltets_Render<T, U>['events']>;
        $$slots?: ReturnType<__sveltets_Render<T, U>['slots']>;
        children?: any;
    }): ReturnType<__sveltets_Render<T, U>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any, any>['bindings']>;
}
declare const FormElementField: $$IsomorphicComponent;
type FormElementField<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = InstanceType<typeof FormElementField<T, U>>;
export default FormElementField;
