import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
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
declare const RadioGroupItem: $$__sveltets_2_IsomorphicComponent<{
    value: string;
    disabled?: boolean | undefined;
    asChild?: boolean | undefined;
    el?: HTMLButtonElement | undefined;
} & import("svelte/elements").HTMLButtonAttributes & {
    value: string;
}, RadioGroupPrimitive.ItemEvents, {}, {}, string>;
type RadioGroupItem = InstanceType<typeof RadioGroupItem>;
export default RadioGroupItem;
