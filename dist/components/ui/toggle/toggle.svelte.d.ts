import { Toggle as TogglePrimitive } from 'bits-ui';
import { type Size, type Variant } from './index.js';
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
declare const Toggle: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    disabled?: boolean | undefined;
    pressed?: boolean | undefined;
    onPressedChange?: import("bits-ui/dist/internal/types.js").OnChangeFn<boolean> | undefined;
    asChild?: boolean | undefined;
    el?: HTMLButtonElement | undefined;
} & import("svelte/elements.js").HTMLButtonAttributes & {
    variant?: Variant;
    size?: Size;
}, {
    default: {};
}>, TogglePrimitive.Events, {
    default: {};
}, {}, string>;
type Toggle = InstanceType<typeof Toggle>;
export default Toggle;
