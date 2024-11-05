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
declare const ResizableHandle: $$__sveltets_2_IsomorphicComponent<{
    disabled?: boolean | undefined;
    onDraggingChange?: import("paneforge/dist/internal/types").PaneResizeHandleOnDragging | undefined;
    tabIndex?: number | undefined;
    el?: HTMLElement | null | undefined;
} & import("svelte/elements").HTMLAttributes<HTMLDivElement> & {
    withHandle?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type ResizableHandle = InstanceType<typeof ResizableHandle>;
export default ResizableHandle;
