import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
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
declare const ContextMenuSubContent: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<ContextMenuPrimitive.SubContentProps, {
    default: {};
}>, {
    keydown: import("bits-ui").CustomEventHandler<KeyboardEvent, HTMLDivElement>;
    focusout: import("bits-ui").CustomEventHandler<FocusEvent, HTMLDivElement>;
    pointermove: import("bits-ui").CustomEventHandler<PointerEvent, HTMLDivElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}, {}, string>;
type ContextMenuSubContent = InstanceType<typeof ContextMenuSubContent>;
export default ContextMenuSubContent;
