import { type Side } from './index.js';
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
declare const SheetContent: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    transition?: import("bits-ui/dist/internal/types.js").Transition | undefined;
    transitionConfig?: any;
    inTransition?: import("bits-ui/dist/internal/types.js").Transition | undefined;
    inTransitionConfig?: any;
    outTransition?: import("bits-ui/dist/internal/types.js").Transition | undefined;
    outTransitionConfig?: any;
    asChild?: boolean | undefined;
    el?: HTMLDivElement | undefined;
} & import("bits-ui/dist/internal/types.js").HTMLDivAttributes & {
    side?: Side;
}, {
    default: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}, {}, string>;
type SheetContent = InstanceType<typeof SheetContent>;
export default SheetContent;
